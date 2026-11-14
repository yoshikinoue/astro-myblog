/**
 * Markdown本文から推定読了時間とプレーンテキストの抜粋を生成するユーティリティ
 */

const stripFrontmatter = (content: string): string =>
  content.replace(/^\s*---[\s\S]*?---\s*/, "");

export const getReadingTime = (content?: string): string => {
  if (!content) return "1 min read";

  const withoutFrontmatter = stripFrontmatter(content);
  const cleanText = withoutFrontmatter
    .replace(/```[\s\S]*?```/g, match =>
      match.replace(/```[^\n]*\n?/g, "").trim()
    )
    .replace(/!\[.*?\]\(.*?\)/g, "")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/<[^>]+>/g, "")
    .replace(/[#>*_`~\-|]/g, "")
    .replace(/\s+/g, "");

  const minutes = Math.max(1, Math.ceil(cleanText.length / 500));
  return `${minutes} min read`;
};

export const getExcerpt = (content?: string, maxLength = 120): string => {
  if (!content) return "";

  const withoutFrontmatter = stripFrontmatter(content);
  const plainText = withoutFrontmatter
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/^#+\s+.*$/gm, " ")
    .replace(/!\[.*?\]\(.*?\)/g, " ")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/<[^>]+>/g, " ")
    .replace(/`([^`]+)`/g, "$1")
    .replace(/^[\s>*+-]+/gm, " ")
    .replace(/[*_~|]/g, "")
    .replace(/\s+/g, " ")
    .trim();

  if (!plainText) return "";
  if (plainText.length <= maxLength) return plainText;

  return `${plainText.slice(0, maxLength).trim()}...`;
};
