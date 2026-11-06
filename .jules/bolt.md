## 2024-05-14 - [Database Indexes]
**Learning:** The database initially lacked indexes on frequently queried fields like `Products(category)` and foreign keys `Orders(userId)`, `OrderItems(orderId)`, causing full table scans and performance degradation for queries like filtering products by category and joining order histories.
**Action:** Adding `CREATE INDEX IF NOT EXISTS` for these specific columns in `backend/db.js` optimizes lookup queries and JOINs without large structural changes.
