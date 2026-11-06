const db = require('./db');

const products = [
    {
        name: "Luxury Bed Set",
        description: "A very luxurious bed set for your bedroom.",
        price: 1299.99,
        category: "luxury",
        imageUrl: "https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&q=80&w=800"
    },
    {
        name: "Luxury Sofa Set",
        description: "Comfortable and luxurious sofa set.",
        price: 899.99,
        category: "luxury",
        imageUrl: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=800"
    },
    {
        name: "Luxury Dining Table",
        description: "Elegant dining table for 6.",
        price: 799.99,
        category: "luxury",
        imageUrl: "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?auto=format&fit=crop&q=80&w=800"
    },
    {
        name: "Elegant candle set",
        description: "Beautiful candle set for ambient lighting.",
        price: 49.99,
        category: "elegant",
        imageUrl: "https://images.unsplash.com/photo-1602922752538-4034870f055f?auto=format&fit=crop&q=80&w=800"
    },
    {
        name: "Fruit platter",
        description: "Decorative fruit platter.",
        price: 29.99,
        category: "elegant",
        imageUrl: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&q=80&w=800"
    },
    {
        name: "Minimalist Bookshelf",
        description: "A clean and modern bookshelf.",
        price: 199.99,
        category: "storage",
        imageUrl: "https://images.unsplash.com/photo-1594620302200-9a762244a156?auto=format&fit=crop&q=80&w=800"
    },
    {
        name: "Ergonomic Office Chair",
        description: "Comfortable chair for long working hours.",
        price: 249.99,
        category: "office",
        imageUrl: "https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&q=80&w=800"
    },
    {
        name: "Outdoor Lounge Chair",
        description: "Perfect for relaxing in your garden.",
        price: 149.99,
        category: "outdoor",
        imageUrl: "https://images.unsplash.com/photo-1581428982868-e410dd98fe51?auto=format&fit=crop&q=80&w=800"
    }
];

db.serialize(() => {
    // Clear existing products
    db.run("DELETE FROM Products");

    // Insert new products
    const stmt = db.prepare("INSERT INTO Products (name, description, price, category, imageUrl) VALUES (?, ?, ?, ?, ?)");
    products.forEach(p => {
        stmt.run(p.name, p.description, p.price, p.category, p.imageUrl);
    });
    stmt.finalize();

    console.log("Database seeded successfully.");
});

// Close database connection after seeding is done
setTimeout(() => {
    db.close();
}, 1000);
