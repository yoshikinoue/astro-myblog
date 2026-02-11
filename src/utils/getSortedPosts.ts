import type { CollectionEntry } from "astro:content";

const getSortedPosts = (posts: CollectionEntry<"blog">[]) =>
  posts
    .filter(({ data }) => !data.draft)
    .sort(
      (a, b) =>
        Math.floor(b.data.pubDatetime.getTime() / 1000) -
        Math.floor(a.data.pubDatetime.getTime() / 1000)
    );

export default getSortedPosts;
