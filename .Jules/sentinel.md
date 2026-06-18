
## 2024-05-21 - Strict CSP bypass via unsafe-inline
**Vulnerability:** The application used `'unsafe-inline'` for script-src and style-src in Content Security Policy to support Astro inline scripts and Markdown inline styles, effectively bypassing XSS protections.
**Learning:** In Astro, inline event handlers (e.g. onclick) and markdown iframes force the need for `unsafe-inline`. Bundled scripts and native width/height attributes completely mitigate this requirement.
**Prevention:** Avoid `is:inline` scripts with raw JS unless using a nonce, replace `onclick` with ID-based `addEventListener` inside Astro script tags, and convert inline CSS sizes to native DOM attributes to allow for strict CSP policies.
