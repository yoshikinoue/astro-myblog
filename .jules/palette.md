## 2025-02-17 - Accessible Icon Buttons Pattern
**Learning:** The `LinkButton` component supports `ariaLabel` prop but it's often omitted for icon-only buttons (like Socials), leading to accessibility issues. Passing `title` is insufficient for screen readers.
**Action:** Always pass `ariaLabel` (or `aria-label`) to `LinkButton` when the button content is purely graphical (e.g. SVGs). Use the `linkTitle` or a descriptive string.
## 2025-02-18 - Native Disabled Link Pattern
**Learning:** Using `pointer-events-none` on disabled elements blocks hover interactions like tooltips. Furthermore, explicitly setting `href="#"` and managing `tabindex` is error-prone for screen readers.
**Action:** Omit the `href` attribute entirely (`href={undefined}`) to natively remove the element from the tab order. Use `cursor-not-allowed` instead of `pointer-events-none` to preserve hover capabilities while indicating non-interactivity visually.
