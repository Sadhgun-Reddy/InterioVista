## 2024-11-05 - Missing Content Security Policy
**Vulnerability:** The application was missing a Content Security Policy (CSP), leaving it vulnerable to XSS and unintended asset loading.
**Learning:** React applications utilizing external CDNs for assets (like Figma images) need specific CSP rules to function safely while restricting untrusted sources.
**Prevention:** Always implement a baseline CSP in `index.html` and refine it as external dependencies are added. Avoid `unsafe-inline` where possible, though development setups may sometimes require it for styles.

## 2024-11-10 - Unvalidated Quantity in E-commerce Orders
**Vulnerability:** The application did not validate that the item quantities in an order were positive integers. A malicious user could submit an order with a negative quantity for one item and a positive quantity for another, resulting in a negative total amount and effectively bypassing payment or manipulating inventory.
**Learning:** Business logic vulnerabilities often reside in how user inputs are parsed when validating complex transactions. Not only must the item exist, but the multiplier applied to its price must be inherently valid (a positive integer).
**Prevention:** Always implement strict input validation for business-critical variables (e.g., quantities, pricing modifiers). Ensure that `quantity` fields are validated to be strictly greater than 0 and represent integers before applying math operations.
