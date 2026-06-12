import os

link_button_path = 'src/components/LinkButton.astro'
with open(link_button_path, 'r') as f:
    content = f.read()
content = content.replace('href={disabled ? "#" : href}', 'href={disabled ? undefined : href}')
with open(link_button_path, 'w') as f:
    f.write(content)

posts_path = 'src/layouts/Posts.astro'
with open(posts_path, 'r') as f:
    content = f.read()
content = content.replace('@apply pointer-events-none select-none opacity-50 hover:text-skin-base group-hover:fill-skin-base;', '@apply cursor-not-allowed select-none opacity-50 hover:text-skin-base group-hover:fill-skin-base;')
with open(posts_path, 'w') as f:
    f.write(content)
