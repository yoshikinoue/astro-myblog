## 2025-05-23 - Path Traversal in Build Scripts
**Vulnerability:** Path Traversal in `src/utils/generateOgImage.tsx`
**Learning:** Build scripts that write files based on user content (e.g. CMS inputs) are vulnerable to path traversal if they don't sanitize filenames, even in SSG.
**Prevention:** Always sanitize filenames derived from content using `slugifyStr` or similar before passing them to filesystem APIs like `writeFile`.

## 2024-05-24 - Naive Security Implementation in CMS Config
**Vulnerability:** Insecure `slugify` implementation in `tina/config.ts` allowed path traversal characters due to insufficient regex replacement (`replace(/ /g, '-')`).
**Learning:** Custom implementations of security-critical functions (like sanitization) are often flawed. Always leverage established libraries like `github-slugger` available in the project.
**Prevention:** Audit configuration files for custom security logic and replace with standard libraries.

## 2025-05-24 - Defense in Depth for File Generation
**Vulnerability:** Implicit reliance on `github-slugger` for file system safety in `src/utils/generateOgImage.tsx`. While currently safe, library behavior changes could introduce path traversal risks.
**Learning:** URL sanitization libraries are not always sufficient for file system safety. Explicitly removing directory separators and traversal sequences (`..`, `/`, `\`) provides a necessary second layer of defense.
**Prevention:** Implement a `safeFilename` utility that wraps slugification with strict character whitelisting or blacklist removal for file writing operations.

## 2025-05-25 - Missing Content Security Policy in Static Build
**Vulnerability:** Lack of Content Security Policy (CSP) allowed potentially malicious scripts or styles to execute if XSS vulnerabilities were present.
**Learning:** Static sites often lack HTTP headers for security. A `<meta>` tag is a viable alternative for CSP in these environments.
**Prevention:** Implement a strict CSP meta tag in the main layout (`src/layouts/Layout.astro`) to mitigate XSS risks, even for SSG sites.
## 2024-06-19 - Add path traversal sanitization to TinaCMS slugify
**Vulnerability:** The TinaCMS slugify function passes unvalidated form values directly to `github-slugger`, which might not completely eliminate all malicious path sequences in edge cases, potentially leading to path traversal when filenames are generated.
**Learning:** `github-slugger` is designed to create URL-safe slugs, not to securely sanitize file paths from intentional malicious input containing sequences like `../` or absolute paths.
**Prevention:** Always implement explicit defensive input sanitization (e.g., stripping `/`, `\`, and `..`) before generating filenames from user input, even when using slugification utilities.
