## 2025-02-17 - Accessible Icon Buttons Pattern
**Learning:** The `LinkButton` component supports `ariaLabel` prop but it's often omitted for icon-only buttons (like Socials), leading to accessibility issues. Passing `title` is insufficient for screen readers.
**Action:** Always pass `ariaLabel` (or `aria-label`) to `LinkButton` when the button content is purely graphical (e.g. SVGs). Use the `linkTitle` or a descriptive string.
## 2026-02-18 - Tooltips on disabled links
**Learning:** Using `pointer-events-none` on disabled elements prevents hover events, making it impossible to show native tooltips (`title` attribute).
**Action:** Use `cursor-not-allowed` instead, and completely remove the `href` attribute (e.g., `href={undefined}`) to ensure it's not keyboard focusable.
