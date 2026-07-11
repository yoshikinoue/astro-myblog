## 2025-02-17 - Accessible Icon Buttons Pattern
**Learning:** The `LinkButton` component supports `ariaLabel` prop but it's often omitted for icon-only buttons (like Socials), leading to accessibility issues. Passing `title` is insufficient for screen readers.
**Action:** Always pass `ariaLabel` (or `aria-label`) to `LinkButton` when the button content is purely graphical (e.g. SVGs). Use the `linkTitle` or a descriptive string.
## 2025-02-18 - Accessible Disabled Anchor Links
**Learning:** Using `href="#"` and `tabindex="-1"` on disabled links is less accessible and error-prone than simply omitting the `href` attribute (`href={undefined}`). Setting `pointer-events-none` prevents hover effects, which are useful for tooltips.
**Action:** Use `href={undefined}` to remove disabled links from keyboard tab order and use `cursor-not-allowed` to visually indicate the disabled state while preserving hover capability.
