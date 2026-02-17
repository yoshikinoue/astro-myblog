## 2026-02-17 - Missing ARIA labels on icon-only social buttons
**Learning:** The `Socials.astro` component used `title` attributes for accessibility on icon-only links, which is insufficient for screen readers and touch devices.
**Action:** When implementing icon-only buttons, always ensure an explicit accessible name is provided via `aria-label` or visually hidden text, as `title` is not reliable.
