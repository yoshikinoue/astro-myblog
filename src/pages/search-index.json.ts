import { getCollection } from "astro:content";
import { getExcerpt, getReadingTime } from "@utils/getReadingTime";
import type { APIRoute } from "astro";

// 検索インデックスを JSON として分離し、/search/ の HTML に
// 全記事の本文（body）を埋め込まないようにする。
// 本文は抜粋と読了時間の算出にだけ使われていたため、ビルド時に事前計算する。
export const GET: APIRoute = async () => {
  const posts = await getCollection("blog", ({ data }) => !data.draft);

  const items = posts.map(({ data, body }) => ({
    title: data.title,
    description: data.description || "",
    tags: data.tags,
    category: data.category || "",
    excerpt: getExcerpt(body, 110),
    readingTime: getReadingTime(body),
    data,
  }));

  return new Response(JSON.stringify(items), {
    headers: { "Content-Type": "application/json" },
  });
};
