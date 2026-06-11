## 2025-02-17 - Accessible Icon Buttons Pattern
**Learning:** The `LinkButton` component supports `ariaLabel` prop but it's often omitted for icon-only buttons (like Socials), leading to accessibility issues. Passing `title` is insufficient for screen readers.
**Action:** Always pass `ariaLabel` (or `aria-label`) to `LinkButton` when the button content is purely graphical (e.g. SVGs). Use the `linkTitle` or a descriptive string.
## 2024-05-14 - Disabled Links Accessibility and Tooltips UX
**Learning:** Using `pointer-events: none` completely hides elements from mouse interactions, meaning tooltips won't appear on hover, reducing context for disabled states. Also, keeping an `href` on a disabled `<a>` makes it keyboard-focusable, creating an accessibility trap.
**Action:** Replace `pointer-events-none` with `cursor-not-allowed` for better mouse feedback. Completely omit the `href` attribute (using `undefined` in Astro/JSX) on disabled links to remove them from tab order properly, rather than relying solely on `pointer-events: none`.
