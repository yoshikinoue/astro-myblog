import { getCollection } from "astro:content";
import generateOgImage from "@utils/generateOgImage";
import type { APIRoute } from "astro";
import slugify from "@utils/slugify";

export const GET: APIRoute = async ({ params }) => {
  return new Response(await generateOgImage(params.ogTitle));
};

const postImportResult = await getCollection("blog", ({ data }) => !data.draft);
const posts = Object.values(postImportResult);

export function getStaticPaths() {
  return posts
    .filter(({ data }) => !data.ogImage)
    .map(({ data }) => ({
      params: { ogTitle: slugify(data) },
    }));
}
