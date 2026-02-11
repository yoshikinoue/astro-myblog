import { slugifyStr } from "./slugify";
import type { CollectionEntry } from "astro:content";

const getUniqueTags = (posts: CollectionEntry<"blog">[]) => {
  const tags: string[] = posts
    .filter(({ data }) => !data.draft)
    .flatMap(post => post.data.tags)
    .map(tag => slugifyStr(tag));

  return [...new Set(tags)].sort((tagA: string, tagB: string) =>
    tagA.localeCompare(tagB)
  );
};

export default getUniqueTags;
