const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.resolve(__dirname, 'database.sqlite');
const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error('Error opening database', err.message);
    } else {
        console.log('Connected to the SQLite database.');

        db.serialize(() => {
            db.run(`CREATE TABLE IF NOT EXISTS Users (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                username TEXT UNIQUE NOT NULL,
                password TEXT NOT NULL
            )`);

            db.run(`CREATE TABLE IF NOT EXISTS Products (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL,
                description TEXT,
                price REAL NOT NULL,
                category TEXT,
                imageUrl TEXT
            )`);

            db.run(`CREATE TABLE IF NOT EXISTS Orders (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                userId INTEGER,
                totalAmount REAL NOT NULL,
                status TEXT NOT NULL,
                createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
                FOREIGN KEY (userId) REFERENCES Users(id)
            )`);

            db.run(`CREATE TABLE IF NOT EXISTS OrderItems (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                orderId INTEGER,
                productId INTEGER,
                quantity INTEGER,
                price REAL,
                FOREIGN KEY (orderId) REFERENCES Orders(id),
                FOREIGN KEY (productId) REFERENCES Products(id)
            )`);

            // ⚡ Bolt: Performance optimization
            // Adding an index to the category column speeds up category filtering on the products page
            // and avoids full table scans when users browse specific categories.
            db.run(`CREATE INDEX IF NOT EXISTS idx_products_category ON Products(category)`);

            // ⚡ Bolt: Performance optimization
            // Also adding indexes on foreign keys to optimize JOINs and lookup queries
            db.run(`CREATE INDEX IF NOT EXISTS idx_orders_user_id ON Orders(userId)`);
            db.run(`CREATE INDEX IF NOT EXISTS idx_order_items_order_id ON OrderItems(orderId)`);
        });
    }
});

module.exports = db;
