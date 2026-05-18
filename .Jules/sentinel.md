## 2026-05-18 - Remove Unsafe Inline Scripts
**Vulnerability:** The Content Security Policy allowed `script-src 'unsafe-inline'`, primarily to support inline event handlers like `onclick="history.back()"`.
**Learning:** In Astro, inline event handlers necessitate weakening the CSP with `'unsafe-inline'`, which exposes the application to XSS. Standard bundled `<script>` tags with `addEventListener` are secure and avoid this requirement.
**Prevention:** Avoid using inline event attributes (e.g., `onclick`, `onload`) in HTML. Instead, attach events using `addEventListener` in standard `<script>` blocks or use framework-specific event bindings.
