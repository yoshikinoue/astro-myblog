import { slug as slugger } from "github-slugger";
import type { BlogFrontmatter } from "@content/_schemas";

export const slugifyStr = (str: string) => slugger(str);

const slugify = (post: BlogFrontmatter) =>
  post.postSlug ? slugger(post.postSlug) : slugger(post.title);

export default slugify;
