## 2024-05-24 - Disabled Anchor Tags
**Learning:** Setting `href="#"` on disabled link elements in Astro/React can cause unintentional jumps to the top of the page if clicked.
**Action:** Use `undefined` for the `href` attribute when an anchor tag is disabled to remove the attribute entirely, rendering it semantically inert.
