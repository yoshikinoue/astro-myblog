## 2025-02-17 - Accessible Icon Buttons Pattern
**Learning:** The `LinkButton` component supports `ariaLabel` prop but it's often omitted for icon-only buttons (like Socials), leading to accessibility issues. Passing `title` is insufficient for screen readers.
**Action:** Always pass `ariaLabel` (or `aria-label`) to `LinkButton` when the button content is purely graphical (e.g. SVGs). Use the `linkTitle` or a descriptive string.
## 2025-02-18 - Accessible Disabled Links Pattern
**Learning:** Using `pointer-events: none` and `href="#"` for disabled links prevents tooltips from working and can be less accessible.
**Action:** Omit the `href` attribute (e.g., `href={undefined}`) to naturally remove the element from the keyboard tab order and prevent clickability. Use `cursor-not-allowed` instead of `pointer-events: none` to preserve hover functionality.
