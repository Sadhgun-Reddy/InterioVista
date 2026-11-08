require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const rateLimit = require('express-rate-limit');
const db = require('./db');

const app = express();

// 🛡️ Sentinel Security Fix: Add rate limiting to authentication endpoints
// to prevent brute-force attacks and credential stuffing.
const authLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 10, // Limit each IP to 10 auth requests per windowMs
    message: { error: 'Too many authentication attempts from this IP, please try again after 15 minutes' },
    standardHeaders: true,
    legacyHeaders: false,
});
app.use(cors());
app.use(express.json());

// Security Fix: Do not use hardcoded default secrets.
// Require environment variable to be set to prevent forging JWT tokens.
if (!process.env.JWT_SECRET) {
    console.error('FATAL ERROR: JWT_SECRET environment variable is not set.');
    process.exit(1);
}
const JWT_SECRET = process.env.JWT_SECRET;

// Authenticate Token Middleware
const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) return res.sendStatus(401);

    jwt.verify(token, JWT_SECRET, (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });
};

// --- Auth Routes ---

app.post('/api/auth/register', authLimiter, async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ error: 'Username and password are required' });
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 10);

        db.run('INSERT INTO Users (username, password) VALUES (?, ?)', [username, hashedPassword], function(err) {
            if (err) {
                if (err.message.includes('UNIQUE constraint failed')) {
                    return res.status(400).json({ error: 'Username already exists' });
                }
                return res.status(500).json({ error: 'Database error' });
            }

            const token = jwt.sign({ id: this.lastID, username }, JWT_SECRET, { expiresIn: '24h' });
            res.status(201).json({ token, user: { id: this.lastID, username } });
        });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
});

app.post('/api/auth/login', authLimiter, (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ error: 'Username and password are required' });
    }

    db.get('SELECT * FROM Users WHERE username = ?', [username], async (err, user) => {
        if (err) return res.status(500).json({ error: 'Database error' });
        if (!user) return res.status(401).json({ error: 'Invalid credentials' });

        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) return res.status(401).json({ error: 'Invalid credentials' });

        const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, { expiresIn: '24h' });
        res.json({ token, user: { id: user.id, username: user.username } });
    });
});

app.get('/api/auth/me', authenticateToken, (req, res) => {
    res.json({ user: req.user });
});

// --- Product Routes ---

app.get('/api/products', (req, res) => {
    const category = req.query.category;
    const search = req.query.search;

    let query = 'SELECT * FROM Products';
    let params = [];
    let conditions = [];

    if (category) {
        conditions.push('category = ?');
        params.push(category);
    }

    if (search) {
        conditions.push('(name LIKE ? OR description LIKE ?)');
        params.push(`%${search}%`);
        params.push(`%${search}%`);
    }

    if (conditions.length > 0) {
        query += ' WHERE ' + conditions.join(' AND ');
    }

    db.all(query, params, (err, rows) => {
        if (err) return res.status(500).json({ error: 'Database error' });
        res.json(rows);
    });
});

app.get('/api/products/:id', (req, res) => {
    db.get('SELECT * FROM Products WHERE id = ?', [req.params.id], (err, row) => {
        if (err) return res.status(500).json({ error: 'Database error' });
        if (!row) return res.status(404).json({ error: 'Product not found' });
        res.json(row);
    });
});

// --- Order Routes ---

app.post('/api/orders', authenticateToken, (req, res) => {
    const { items } = req.body; // items: [{productId, quantity}]

    if (!items || items.length === 0) {
        return res.status(400).json({ error: 'Order must contain items' });
    }

    // 🛡️ Sentinel Security Fix: Do not trust client-provided price and totalAmount.
    // Fetch actual prices from the database to calculate verified total amount.
    const productIds = items.map(item => item.productId);
    const placeholders = productIds.map(() => '?').join(',');

    db.all(`SELECT id, price FROM Products WHERE id IN (${placeholders})`, productIds, (err, products) => {
        if (err) return res.status(500).json({ error: 'Database error fetching products' });

        const productMap = {};
        products.forEach(p => {
            productMap[p.id] = p.price;
        });

        let calculatedTotalAmount = 0;
        let validatedItems = [];
        let missingProducts = false;

        for (const item of items) {
            const realPrice = productMap[item.productId];
            if (realPrice === undefined) {
                missingProducts = true;
                break;
            }
            calculatedTotalAmount += realPrice * item.quantity;
            validatedItems.push({
                productId: item.productId,
                quantity: item.quantity,
                price: realPrice
            });
        }

        if (missingProducts) {
            return res.status(400).json({ error: 'One or more products not found' });
        }

        db.serialize(() => {
            db.run('BEGIN TRANSACTION');

            db.run('INSERT INTO Orders (userId, totalAmount, status) VALUES (?, ?, ?)',
                [req.user.id, calculatedTotalAmount, 'pending'],
                function(err) {
                    if (err) {
                        db.run('ROLLBACK');
                        return res.status(500).json({ error: 'Database error creating order' });
                    }

                    const orderId = this.lastID;
                    const stmt = db.prepare('INSERT INTO OrderItems (orderId, productId, quantity, price) VALUES (?, ?, ?, ?)');

                    let hasError = false;
                    validatedItems.forEach(item => {
                        stmt.run(orderId, item.productId, item.quantity, item.price, (err) => {
                            if (err) hasError = true;
                        });
                    });

                    stmt.finalize((err) => {
                        if (hasError || err) {
                            db.run('ROLLBACK');
                            return res.status(500).json({ error: 'Database error creating order items' });
                        }

                        db.run('COMMIT', (err) => {
                            if (err) return res.status(500).json({ error: 'Database error committing transaction' });
                            res.status(201).json({ message: 'Order created successfully', orderId });
                        });
                    });
                }
            );
        });
    });
});

app.get('/api/orders', authenticateToken, (req, res) => {
    db.all(`
        SELECT
            Orders.*,
            json_group_array(
                json_object(
                    'productId', OrderItems.productId,
                    'quantity', OrderItems.quantity,
                    'price', OrderItems.price,
                    'name', Products.name,
                    'imageUrl', Products.imageUrl
                )
            ) as items
        FROM Orders
        LEFT JOIN OrderItems ON Orders.id = OrderItems.orderId
        LEFT JOIN Products ON OrderItems.productId = Products.id
        WHERE Orders.userId = ?
        GROUP BY Orders.id
        ORDER BY Orders.createdAt DESC
    `, [req.user.id], (err, orders) => {
        if (err) return res.status(500).json({ error: 'Database error', details: err.message });

        // Parse the JSON string back into an object array for each order
        const parsedOrders = orders.map(order => ({
            ...order,
            items: JSON.parse(order.items)
        }));

        res.json(parsedOrders);
    });
});

const PORT = process.env.PORT || 5000;
if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}

module.exports = app; // For testing
