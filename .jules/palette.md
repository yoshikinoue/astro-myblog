## 2025-02-17 - Accessible Icon Buttons Pattern
**Learning:** The `LinkButton` component supports `ariaLabel` prop but it's often omitted for icon-only buttons (like Socials), leading to accessibility issues. Passing `title` is insufficient for screen readers.
**Action:** Always pass `ariaLabel` (or `aria-label`) to `LinkButton` when the button content is purely graphical (e.g. SVGs). Use the `linkTitle` or a descriptive string.
## 2024-06-12 - Disabled Link Accessibility & Tooltips
**Learning:** Removing the `href` attribute entirely (e.g., `href={undefined}` in JSX/Astro) removes an `<a>` element from the tab sequence and prevents click events, ensuring accessibility. This allows using visual cues like `cursor-not-allowed` instead of `pointer-events: none` without compromising UX or screen reader compatibility.
**Action:** Always prefer removing the `href` attribute for disabled anchor tags instead of relying on `#` and `pointer-events: none` to support visual feedback like the not-allowed cursor.
