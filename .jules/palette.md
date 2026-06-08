## 2025-02-17 - Accessible Icon Buttons Pattern
**Learning:** The `LinkButton` component supports `ariaLabel` prop but it's often omitted for icon-only buttons (like Socials), leading to accessibility issues. Passing `title` is insufficient for screen readers.
**Action:** Always pass `ariaLabel` (or `aria-label`) to `LinkButton` when the button content is purely graphical (e.g. SVGs). Use the `linkTitle` or a descriptive string.
## 2024-06-08 - Accessible Disabled Links
**Learning:** Using `pointer-events: none` on disabled anchors hides tooltips and state from the user. Using `cursor-not-allowed` is better for visual feedback, but the `href` attribute must be omitted entirely (`href={undefined}`) to ensure the element isn't keyboard-focusable or navigable.
**Action:** Always omit `href` completely and use `cursor-not-allowed` instead of `pointer-events: none` when styling disabled `<a>` elements for optimal UX and accessibility.
