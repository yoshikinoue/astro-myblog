## 2025-01-27 - Path Traversal in OG Image Generation
**Vulnerability:** A path traversal vulnerability was found in `src/utils/generateOgImage.tsx` where unsanitized `postSlug` from content was used directly in `writeFile()`.
**Learning:** Content from CMS (like `postSlug`), even if authenticated, can be malicious or malformed, and must not be trusted for file system operations during build. This vulnerability could allow overwriting arbitrary files if the build process runs with sufficient privileges.
**Prevention:** Always sanitize inputs used for file paths using robust slugification (e.g., `slugifyStr`) before writing files, even in build scripts.
