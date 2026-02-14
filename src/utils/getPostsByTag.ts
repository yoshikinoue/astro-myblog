import { slugifyStr } from "./slugify";
import type { CollectionEntry } from "astro:content";

const getPostsByTag = (posts: CollectionEntry<"blog">[], tag: string) => {
  const result: CollectionEntry<"blog">[] = [];
  for (let i = 0; i < posts.length; i++) {
    const post = posts[i];
    const tags = post.data.tags;
    for (let j = 0; j < tags.length; j++) {
      if (slugifyStr(tags[j]) === tag) {
        result.push(post);
        break;
      }
    }
  }
  return result;
};

export default getPostsByTag;
