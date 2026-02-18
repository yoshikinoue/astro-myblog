## 2025-05-23 - Path Traversal in Build Scripts
**Vulnerability:** Path Traversal in `src/utils/generateOgImage.tsx`
**Learning:** Build scripts that write files based on user content (e.g. CMS inputs) are vulnerable to path traversal if they don't sanitize filenames, even in SSG.
**Prevention:** Always sanitize filenames derived from content using `slugifyStr` or similar before passing them to filesystem APIs like `writeFile`.
