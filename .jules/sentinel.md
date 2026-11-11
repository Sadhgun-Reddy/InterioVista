## 2024-11-05 - Missing Content Security Policy
**Vulnerability:** The application was missing a Content Security Policy (CSP), leaving it vulnerable to XSS and unintended asset loading.
**Learning:** React applications utilizing external CDNs for assets (like Figma images) need specific CSP rules to function safely while restricting untrusted sources.
**Prevention:** Always implement a baseline CSP in `index.html` and refine it as external dependencies are added. Avoid `unsafe-inline` where possible, though development setups may sometimes require it for styles.
## 2023-10-27 - Business Logic Vulnerability in Order Quantities
**Vulnerability:** The `/api/orders` endpoint did not validate if `item.quantity` was a positive integer, allowing orders with negative or zero quantities. This could allow users to artificially lower their total order amount or manipulate the system into giving a negative total (creating unauthorized credit).
**Learning:** Always validate that numeric inputs associated with financial transactions or item quantities are positive integers (`> 0`). Do not trust the client to only send valid quantities, even if the UI restricts it.
**Prevention:** Implement strict input validation on the server side for all incoming request payloads, especially for arrays of items. Ensure quantities are strictly `Number.isInteger()` and `> 0`.
