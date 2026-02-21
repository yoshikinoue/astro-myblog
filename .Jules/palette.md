## 2026-02-17 - Missing ARIA labels on icon-only social buttons
**Learning:** The `Socials.astro` component used `title` attributes for accessibility on icon-only links, which is insufficient for screen readers and touch devices.
**Action:** When implementing icon-only buttons, always ensure an explicit accessible name is provided via `aria-label` or visually hidden text, as `title` is not reliable.
## 2026-02-18 - [Missing ARIA Labels on Icon-Only Buttons]
**Learning:** The project uses `LinkButton` component for social media links which are rendered as icon-only buttons. While `title` attributes were present, `aria-label` attributes were missing, making the buttons inaccessible to screen reader users who rely on the accessible name computation. The `LinkButton` component already supports an `ariaLabel` prop, but it was not being utilized in `Socials.astro`.
**Action:** Always verify that icon-only buttons have an explicit `aria-label` or visually hidden text. When using the `LinkButton` component, ensure the `ariaLabel` prop is passed, especially when the content is only an SVG or icon.
## 2026-02-18 - Ambiguous Theme Toggle Labels
**Learning:** The theme toggle button relied on the current theme value (e.g., "dark") as its accessible label, which is confusing for screen reader users as it doesn't clearly indicate the action (switch to light mode) or the state.
**Action:** Use explicit action-oriented labels like "Switch to dark mode" or "Switch to light mode" for toggle buttons, rather than just the state name.
