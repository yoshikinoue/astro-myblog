import Datetime from "./Datetime";
import type { BlogFrontmatter } from "@content/_schemas";
import { getExcerpt, getReadingTime } from "@utils/getReadingTime";
import { slugifyStr } from "@utils/slugify";

export interface Props {
  rel?: string;
  href?: string;
  frontmatter: BlogFrontmatter;
  body?: string;
  secHeading?: boolean;
}

export default function Card({
  rel,
  href,
  frontmatter,
  body,
  secHeading = true,
}: Props) {
  const { title, pubDatetime, description, category, tags } = frontmatter;
  const readingTime = body ? getReadingTime(body) : undefined;
  const summary = description?.trim() || (body ? getExcerpt(body, 110) : "");

  return (
    <li className="my-4 rounded-lg border border-skin-line bg-skin-card bg-opacity-40 p-5 transition-all hover:border-skin-accent hover:bg-opacity-75">
      <div className="mb-2 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs">
        {category && (
          <span className="rounded bg-skin-accent bg-opacity-15 px-2 py-0.5 font-code text-xs font-semibold text-skin-accent">
            {category}
          </span>
        )}
        <Datetime datetime={pubDatetime} size="sm" />
        {readingTime && (
          <span className="flex items-center gap-1 font-code text-xs opacity-75">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="!h-3.5 !w-3.5 !fill-none"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            <span>{readingTime}</span>
          </span>
        )}
      </div>

      <a
        rel={rel}
        href={href}
        className="inline-block rounded text-lg font-semibold text-skin-accent decoration-dashed underline-offset-4 focus-visible:no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-skin-accent focus-visible:ring-offset-2 focus-visible:ring-offset-skin-fill"
      >
        {secHeading ? (
          <h2 className="text-lg font-semibold decoration-dashed hover:underline">
            {title}
          </h2>
        ) : (
          <h3 className="text-lg font-semibold decoration-dashed hover:underline">
            {title}
          </h3>
        )}
      </a>

      {summary && (
        <p className="mt-2 text-sm leading-relaxed opacity-85">{summary}</p>
      )}

      {tags && tags.length > 0 && (
        <ul className="mt-3 flex flex-wrap gap-1.5" aria-label="Post tags">
          {tags.map(tag => {
            const slug = slugifyStr(tag);
            return (
              <li key={slug}>
                <a
                  href={`/tags/${slug}`}
                  className="inline-block rounded border border-skin-line bg-skin-fill px-2 py-0.5 font-code text-xs opacity-85 transition-colors hover:border-skin-accent hover:text-skin-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-skin-accent"
                >
                  #{tag.toLowerCase()}
                </a>
              </li>
            );
          })}
        </ul>
      )}
    </li>
  );
}
