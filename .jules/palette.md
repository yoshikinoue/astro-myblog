## 2025-02-17 - Accessible Icon Buttons Pattern
**Learning:** The `LinkButton` component supports `ariaLabel` prop but it's often omitted for icon-only buttons (like Socials), leading to accessibility issues. Passing `title` is insufficient for screen readers.
**Action:** Always pass `ariaLabel` (or `aria-label`) to `LinkButton` when the button content is purely graphical (e.g. SVGs). Use the `linkTitle` or a descriptive string.
## 2025-02-18 - Accessible Disabled Anchor Tags
**Learning:** Using `href="#"` for disabled `<a />` tags makes them still focusable and actionable to screen readers (and visual users can see them as links). `pointer-events: none` suppresses tooltips on disabled elements.
**Action:** Remove `href` from disabled links (e.g. `href={undefined}`) and use `cursor-not-allowed` instead of `pointer-events-none` so tooltips can still be presented to users hovering over the disabled elements.
