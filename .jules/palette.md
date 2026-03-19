## 2025-02-17 - Accessible Icon Buttons Pattern
**Learning:** The `LinkButton` component supports `ariaLabel` prop but it's often omitted for icon-only buttons (like Socials), leading to accessibility issues. Passing `title` is insufficient for screen readers.
**Action:** Always pass `ariaLabel` (or `aria-label`) to `LinkButton` when the button content is purely graphical (e.g. SVGs). Use the `linkTitle` or a descriptive string.

## 2025-02-17 - Pair aria-label with title for Icon Buttons & Fix Disabled Links
**Learning:** Icon-only buttons often have `aria-label` for screen readers but lack `title` for visual users hovering with a mouse. Additionally, `disabled` anchor tags (`<a>`) using `href="#"` cause accidental scroll-to-top behavior when clicked before JS disables the event, and when styled with `pointer-events-none`, they prevent tooltips from appearing.
**Action:** Always provide BOTH `aria-label` and `title` for icon-only buttons. For disabled links, use `href={undefined}` to omit the attribute completely and avoid `href="#"`.
