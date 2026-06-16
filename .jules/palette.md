## 2025-02-17 - Accessible Icon Buttons Pattern
**Learning:** The `LinkButton` component supports `ariaLabel` prop but it's often omitted for icon-only buttons (like Socials), leading to accessibility issues. Passing `title` is insufficient for screen readers.
**Action:** Always pass `ariaLabel` (or `aria-label`) to `LinkButton` when the button content is purely graphical (e.g. SVGs). Use the `linkTitle` or a descriptive string.
## 2025-02-17 - Disabled Anchor Tags Tooltips
**Learning:** When styling disabled anchor (`<a>`) elements with `cursor-not-allowed` instead of `pointer-events: none` to support tooltips, always remove the `href` attribute completely (e.g., `href={undefined}` in JSX/Astro). This prevents the element from being keyboard focusable or clickable, avoiding accessibility regressions.
**Action:** Use `href={disabled ? undefined : href}` on Link components to natively support standard disabled semantics while allowing visual states like custom cursors and tooltips via `title` attribute.
