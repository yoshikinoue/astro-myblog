## 2025-02-17 - Accessible Icon Buttons Pattern
**Learning:** The `LinkButton` component supports `ariaLabel` prop but it's often omitted for icon-only buttons (like Socials), leading to accessibility issues. Passing `title` is insufficient for screen readers.
**Action:** Always pass `ariaLabel` (or `aria-label`) to `LinkButton` when the button content is purely graphical (e.g. SVGs). Use the `linkTitle` or a descriptive string.
## 2025-02-18 - Disabled Link Accessibility Pattern
**Learning:** Using `pointer-events: none` and `href="#"` on disabled links prevents tooltips from showing and keeps the element in the tab sequence or gives it improper semantics.
**Action:** Use `cursor-not-allowed` for styling disabled links and explicitly omit the href attribute (`href={undefined}`) to gracefully remove the element from tab order and clickability while preserving hover interactions.
