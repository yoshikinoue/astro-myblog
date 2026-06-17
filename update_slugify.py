import sys

def main():
    with open('tina/config.ts', 'r') as f:
        content = f.read()

    old_block = """            slugify: (values) => {
              // Values is an object containing all the values of the form. In this case it is {title?: string, topic?: string}
              return slug(values?.postSlug || values?.title || "");
            },"""

    new_block = r"""            slugify: (values) => {
              // Values is an object containing all the values of the form. In this case it is {title?: string, topic?: string}
              const rawSlug = values?.postSlug || values?.title || "";
              const sanitizedSlug = rawSlug.replace(/[\\/]/g, "").replace(/\.\./g, "");
              return slug(sanitizedSlug);
            },"""

    if old_block in content:
        content = content.replace(old_block, new_block)
        with open('tina/config.ts', 'w') as f:
            f.write(content)

if __name__ == "__main__":
    main()
