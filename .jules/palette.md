## 2025-02-17 - Accessible Icon Buttons Pattern
**Learning:** The `LinkButton` component supports `ariaLabel` prop but it's often omitted for icon-only buttons (like Socials), leading to accessibility issues. Passing `title` is insufficient for screen readers.
**Action:** Always pass `ariaLabel` (or `aria-label`) to `LinkButton` when the button content is purely graphical (e.g. SVGs). Use the `linkTitle` or a descriptive string.

## 2025-02-17 - Disabled Links with cursor-not-allowed
**Learning:** Using `pointer-events-none` on disabled UI elements hides the disabled state from mouse interactions, degrading UX.
**Action:** Use `cursor-not-allowed` for disabled links, and simultaneously completely remove the `href` attribute (`href={undefined}`) instead of setting `href="#"` to prevent focusability and maintain accessibility.
