
## 2024-05-24 - Path Traversal in TinaCMS Slugify
**Vulnerability:** The default custom `slugify` function in `tina/config.ts` using `github-slugger` did not strip path traversal characters (`/`, `\`, `..`), potentially allowing users to write files outside the intended content directory.
**Learning:** External libraries like `github-slugger` might not inherently prevent path traversal. Generating filenames from user input requires explicit sanitization of directory traversal characters as a defense-in-depth measure.
**Prevention:** Always explicitly strip directory navigation characters when generating filenames or paths from user input.
