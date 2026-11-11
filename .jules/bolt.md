## 2024-05-14 - [Database Indexes]
**Learning:** The database initially lacked indexes on frequently queried fields like `Products(category)` and foreign keys `Orders(userId)`, `OrderItems(orderId)`, causing full table scans and performance degradation for queries like filtering products by category and joining order histories.
**Action:** Adding `CREATE INDEX IF NOT EXISTS` for these specific columns in `backend/db.js` optimizes lookup queries and JOINs without large structural changes.

## 2026-11-11 - [Inline Component Definitions]
**Learning:** Defining React components inline within the render method or functional component body (like `Dropdown` in `Header`) causes the component definition to be recreated on every render. This forces React to unmount and completely remount the component in the DOM, destroying state and severely degrading performance (DOM thrashing).
**Action:** Always extract child component definitions outside the parent component's module scope. If it receives props that don't change often, wrap it in `React.memo` to avoid unnecessary re-renders.
