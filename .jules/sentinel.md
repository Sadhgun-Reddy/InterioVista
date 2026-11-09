## 2024-11-05 - Missing Content Security Policy
**Vulnerability:** The application was missing a Content Security Policy (CSP), leaving it vulnerable to XSS and unintended asset loading.
**Learning:** React applications utilizing external CDNs for assets (like Figma images) need specific CSP rules to function safely while restricting untrusted sources.
**Prevention:** Always implement a baseline CSP in `index.html` and refine it as external dependencies are added. Avoid `unsafe-inline` where possible, though development setups may sometimes require it for styles.

## 2025-02-20 - [Negative Quantity Order Amount Exploit]
**Vulnerability:** The `/api/orders` endpoint did not validate that the `quantity` of an item was a positive integer. This allowed an attacker to submit an order with a negative quantity, which led to a negative total order amount being calculated and saved in the database.
**Learning:** Business logic vulnerabilities where input types (like quantities, amounts, or days) lack bounds checking can lead to financial exploits, such as effectively "crediting" an attacker's account when they are meant to be charged.
**Prevention:** Always enforce strict input validation for all fields received from the client. For numeric fields, ensure that constraints (like minimum values, maximum values, and integer types) are correctly checked on the server-side before performing any operations or database insertions.
