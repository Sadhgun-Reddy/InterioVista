## 2024-05-14 - [Database Indexes]
**Learning:** The database initially lacked indexes on frequently queried fields like `Products(category)` and foreign keys `Orders(userId)`, `OrderItems(orderId)`, causing full table scans and performance degradation for queries like filtering products by category and joining order histories.
**Action:** Adding `CREATE INDEX IF NOT EXISTS` for these specific columns in `backend/db.js` optimizes lookup queries and JOINs without large structural changes.

## 2025-02-20 - [React Memo and Context Re-renders]
**Learning:** Extracting an inline JSX list item into a `React.memo` component will not prevent re-renders if a prop passed to it (like `addToCart`) is from a React Context but not wrapped in `useCallback`. The context value changes, changing the reference, causing the child to re-render anyway.
**Action:** Always verify that functions passed to memoized components are also memoized (e.g. via `useCallback`), especially if they originate from custom hooks or Context providers.
