## 2024-05-14 - [Database Indexes]
**Learning:** The database initially lacked indexes on frequently queried fields like `Products(category)` and foreign keys `Orders(userId)`, `OrderItems(orderId)`, causing full table scans and performance degradation for queries like filtering products by category and joining order histories.
**Action:** Adding `CREATE INDEX IF NOT EXISTS` for these specific columns in `backend/db.js` optimizes lookup queries and JOINs without large structural changes.

## 2024-05-15 - [React.memo for Search Results]
**Learning:** In `src/pages/Products.jsx`, updating the `searchTerm` state on every keystroke in the text input triggered synchronous re-renders of the entire `Products` component, including the expensive mapping of all product cards and images. This caused significant input lag during typing.
**Action:** Extracting the inline product card JSX into a separate `ProductCard` component and wrapping it in `React.memo()` prevents these child components from unnecessarily re-rendering on every keystroke since their props (`product` and `addToCart`) haven't changed, restoring snappy typing responsiveness.
