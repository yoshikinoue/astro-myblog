## 2025-02-17 - Accessible Icon Buttons Pattern
**Learning:** The `LinkButton` component supports `ariaLabel` prop but it's often omitted for icon-only buttons (like Socials), leading to accessibility issues. Passing `title` is insufficient for screen readers.
**Action:** Always pass `ariaLabel` (or `aria-label`) to `LinkButton` when the button content is purely graphical (e.g. SVGs). Use the `linkTitle` or a descriptive string.
## 2024-07-03 - Disabled Anchor Elements Accessibility
**Learning:** Using `pointer-events: none` on disabled `<a>` tags prevents hover functionality, which breaks tooltips or other hover-based interactions.
**Action:** Use `cursor-not-allowed` to visually indicate the disabled state while preserving hover events. Also omit the `href` attribute to ensure the element is removed from the keyboard tab sequence.
