## 2024-05-08 - Tooltips on Disabled Elements
**Learning:** When styling disabled `<a>` elements with `cursor-not-allowed`, using `pointer-events: none` prevents the cursor style and native tooltips (`title`) from showing. Instead of `pointer-events: none`, we can omit the `href` attribute (e.g. `href={disabled ? undefined : href}`) to naturally disable the link, while allowing hover tooltips to explain *why* it is disabled.
**Action:** Remove `pointer-events-none` on disabled anchors in Astro, rely on missing `href` to make them unclickable, and use `.disabled { @apply cursor-not-allowed ... }` to show the correct cursor. Add a `title` attribute to provide context.

## 2024-05-08 - Journal Entry Overwriting
**Learning:** When using `cat << 'EOF' > file.md`, the `>` operator overwrites the entire file content. For journal entries or continuous logs, this is destructive.
**Action:** Always use the append operator `>>` when adding new entries to `.Jules/palette.md` to preserve historical learnings.
