## 2024-11-05 - Missing Content Security Policy
**Vulnerability:** The application was missing a Content Security Policy (CSP), leaving it vulnerable to XSS and unintended asset loading.
**Learning:** React applications utilizing external CDNs for assets (like Figma images) need specific CSP rules to function safely while restricting untrusted sources.
**Prevention:** Always implement a baseline CSP in `index.html` and refine it as external dependencies are added. Avoid `unsafe-inline` where possible, though development setups may sometimes require it for styles.

## 2024-11-08 - Added Rate Limiting to Authentication
**Vulnerability:** The `/api/auth/register` and `/api/auth/login` endpoints lacked rate limiting, exposing the application to brute-force attacks and credential stuffing.
**Learning:** High-value targets like authentication routes must always be rate-limited by default. Even when using an internal database, unthrottled endpoints can lead to a Denial of Service.
**Prevention:** Include `express-rate-limit` middleware on all endpoints handling sensitive operations or user authentication by default.
