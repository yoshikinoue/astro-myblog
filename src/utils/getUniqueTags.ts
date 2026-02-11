import { slugifyStr } from "./slugify";
import type { CollectionEntry } from "astro:content";

const getUniqueTags = (posts: CollectionEntry<"blog">[]) => {
  const filteredPosts = posts.filter(({ data }) => !data.draft);
  const tags: string[] = [
    ...new Set(
      filteredPosts
        .flatMap(post => post.data.tags)
        .map(tag => slugifyStr(tag))
    ),
  ].sort((tagA: string, tagB: string) => tagA.localeCompare(tagB));
  return tags;
};

export default getUniqueTags;
