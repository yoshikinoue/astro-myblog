## 2025-05-23 - Path Traversal in Build Scripts
**Vulnerability:** Path Traversal in `src/utils/generateOgImage.tsx`
**Learning:** Build scripts that write files based on user content (e.g. CMS inputs) are vulnerable to path traversal if they don't sanitize filenames, even in SSG.
**Prevention:** Always sanitize filenames derived from content using `slugifyStr` or similar before passing them to filesystem APIs like `writeFile`.

## 2024-05-24 - Naive Security Implementation in CMS Config
**Vulnerability:** Insecure `slugify` implementation in `tina/config.ts` allowed path traversal characters due to insufficient regex replacement (`replace(/ /g, '-')`).
**Learning:** Custom implementations of security-critical functions (like sanitization) are often flawed. Always leverage established libraries like `github-slugger` available in the project.
**Prevention:** Audit configuration files for custom security logic and replace with standard libraries.
