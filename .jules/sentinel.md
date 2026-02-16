# Sentinel Journal

## 2024-05-23 - Path Traversal in OG Image Generation
**Vulnerability:** User-controlled `postSlug` from frontmatter was used directly as a file path in `src/pages/[ogTitle].svg.ts`, potentially allowing path traversal during build time.
**Learning:** Even static site generators can be vulnerable to path traversal if user input is used to generate filenames without sanitization.
**Prevention:** Always sanitize user input intended for file paths using a library like `github-slugger` (wrapped in `slugify` utility here).
