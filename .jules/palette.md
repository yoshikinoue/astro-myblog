## 2025-02-17 - Accessible Icon Buttons Pattern
**Learning:** The `LinkButton` component supports `ariaLabel` prop but it's often omitted for icon-only buttons (like Socials), leading to accessibility issues. Passing `title` is insufficient for screen readers.
**Action:** Always pass `ariaLabel` (or `aria-label`) to `LinkButton` when the button content is purely graphical (e.g. SVGs). Use the `linkTitle` or a descriptive string.

## 2024-03-24 - Accessible Disabled Pagination Links
**Learning:** Using `href={disabled ? undefined : href}` on `<a>` tags for disabled state correctly removes the href attribute entirely in Astro, which makes the element un-focusable by keyboard navigation. However, the `cursor-not-allowed` style works for visual feedback.
**Action:** When implementing disabled states on links, use `undefined` for `href` when disabled rather than `#` to ensure accessibility and proper disabled behavior without sacrificing visual styles.
