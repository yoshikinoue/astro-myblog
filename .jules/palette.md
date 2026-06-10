## 2025-02-17 - Accessible Icon Buttons Pattern
**Learning:** The `LinkButton` component supports `ariaLabel` prop but it's often omitted for icon-only buttons (like Socials), leading to accessibility issues. Passing `title` is insufficient for screen readers.
**Action:** Always pass `ariaLabel` (or `aria-label`) to `LinkButton` when the button content is purely graphical (e.g. SVGs). Use the `linkTitle` or a descriptive string.
## 2024-06-10 - Disabled Anchor Tooltip Accessibility
**Learning:** Styling disabled anchors with `cursor-not-allowed` instead of `pointer-events: none` while completely omitting the `href` attribute (e.g., `href={undefined}` in Astro) prevents the link from being keyboard focusable or clickable, but crucially allows tooltips (`title` attribute) to function properly, giving users essential feedback.
**Action:** Apply this pattern whenever a disabled link button requires a tooltip to explain why it is inactive.
