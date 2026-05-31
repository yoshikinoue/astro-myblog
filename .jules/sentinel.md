## 2024-05-31 - Path Traversal Vulnerability in TinaCMS Slugify
**Vulnerability:** Path traversal characters (`/`, `\`, `..`) could be injected via `postSlug` or `title` fields, potentially altering file system paths during content creation.
**Learning:** The default `github-slugger` does not automatically strip path traversal sequences. Filenames generated from user input via `tina/config.ts` must be manually sanitized.
**Prevention:** Implement explicit string replacement (`replace(/[/\\]/g, "").replace(/\.\./g, "")`) before passing values to slugifiers for file paths.
