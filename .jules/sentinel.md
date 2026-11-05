## 2024-11-05 - Missing Content Security Policy
**Vulnerability:** The application was missing a Content Security Policy (CSP), leaving it vulnerable to XSS and unintended asset loading.
**Learning:** React applications utilizing external CDNs for assets (like Figma images) need specific CSP rules to function safely while restricting untrusted sources.
**Prevention:** Always implement a baseline CSP in `index.html` and refine it as external dependencies are added. Avoid `unsafe-inline` where possible, though development setups may sometimes require it for styles.
