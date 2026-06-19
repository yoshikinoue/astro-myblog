## 2024-06-19 - Improve accessibility for disabled pagination links
**Learning:** Using `pointer-events-none` on disabled links prevents them from showing a `cursor-not-allowed` indicator, which reduces UX clarity. Also, setting `href="#"` when disabled can cause issues with keyboard accessibility because they stay focusable.
**Action:** Remove `href` entirely (`href={disabled ? undefined : href}`) for disabled states, keeping them non-interactive and un-focusable by default. Replace `pointer-events-none` with `cursor-not-allowed` to provide visual feedback on hover.
