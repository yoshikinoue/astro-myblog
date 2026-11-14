import Fuse from "fuse.js";
import { useEffect, useRef, useState, useMemo } from "react";
import Card from "@components/Card";
import slugify from "@utils/slugify";
import type { BlogFrontmatter } from "@content/_schemas";

export type SearchItem = {
  title: string;
  description: string;
  tags: string[];
  category?: string;
  body?: string;
  data: BlogFrontmatter;
};

interface Props {
  searchList: SearchItem[];
}

interface SearchResult {
  item: SearchItem;
  refIndex: number;
}

const QUICK_FILTER_TAGS = [
  "redshift",
  "aws",
  "datapipeline",
  "python",
  "postgresql",
  "kafka",
  "linux",
];

export default function SearchBar({ searchList }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputVal, setInputVal] = useState("");
  const [searchResults, setSearchResults] = useState<SearchResult[] | null>(
    null
  );

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setInputVal(e.currentTarget.value);
  };

  const clearInput = () => {
    setInputVal("");
    inputRef.current?.focus();
  };

  const handleQuickFilter = (tag: string) => {
    setInputVal(prev => (prev.toLowerCase() === tag ? "" : tag));
    inputRef.current?.focus();
  };

  const fuse = useMemo(
    () =>
      new Fuse(searchList, {
        keys: ["title", "description", "tags", "category"],
        includeMatches: true,
        minMatchCharLength: 2,
        threshold: 0.45,
      }),
    [searchList]
  );

  useEffect(() => {
    // if URL has search query,
    // insert that search query in input field
    const searchUrl = new URLSearchParams(window.location.search);
    const searchStr = searchUrl.get("q");
    if (searchStr) setInputVal(searchStr);

    // put focus cursor at the end of the string
    setTimeout(function () {
      if (inputRef.current) {
        inputRef.current.selectionStart = inputRef.current.selectionEnd =
          searchStr?.length || 0;
      }
    }, 50);
  }, []);

  useEffect(() => {
    // Add search result only if
    // input value is more than one character
    const inputResult = inputVal.length > 1 ? fuse.search(inputVal) : [];
    setSearchResults(inputResult);

    // Update search string in URL
    if (inputVal.length > 0) {
      const searchParams = new URLSearchParams(window.location.search);
      searchParams.set("q", inputVal);
      const newRelativePathQuery =
        window.location.pathname + "?" + searchParams.toString();
      history.replaceState(null, "", newRelativePathQuery);
    } else {
      history.replaceState(null, "", window.location.pathname);
    }
  }, [inputVal, fuse]);

  return (
    <>
      <label className="relative block">
        <span className="absolute inset-y-0 left-0 flex items-center pl-2 opacity-75">
          <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M19.023 16.977a35.13 35.13 0 0 1-1.367-1.384c-.372-.378-.596-.653-.596-.653l-2.8-1.337A6.962 6.962 0 0 0 16 9c0-3.859-3.14-7-7-7S2 5.141 2 9s3.14 7 7 7c1.763 0 3.37-.66 4.603-1.739l1.337 2.8s.275.224.653.596c.387.363.896.854 1.384 1.367l1.358 1.392.604.646 2.121-2.121-.646-.604c-.379-.372-.885-.866-1.391-1.36zM9 14c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z"></path>
          </svg>
        </span>
        <input
          className="block w-full rounded border border-skin-fill 
        border-opacity-40 bg-skin-fill py-3 pl-10
        pr-10 placeholder:italic placeholder:text-opacity-75
        focus:border-skin-accent focus:outline-none"
          placeholder="Search titles, tags (e.g. redshift), or categories..."
          type="text"
          name="search"
          value={inputVal}
          onChange={handleChange}
          autoComplete="off"
          autoFocus
          ref={inputRef}
          aria-label="Search"
        />

        {inputVal.length > 0 && (
          <button
            className="absolute inset-y-0 right-0 mr-2 flex items-center p-1 text-skin-base opacity-75 hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-skin-accent"
            onClick={clearInput}
            aria-label="Clear search"
            type="button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        )}
      </label>

      <div
        className="mt-4 flex flex-wrap items-center gap-2"
        role="group"
        aria-label="Quick filter tags"
      >
        <span className="font-code text-xs opacity-70">Quick Tags:</span>
        {QUICK_FILTER_TAGS.map(tag => {
          const isActive = inputVal.trim().toLowerCase() === tag;
          return (
            <button
              key={tag}
              type="button"
              onClick={() => handleQuickFilter(tag)}
              aria-pressed={isActive}
              className={`rounded border px-2.5 py-1 font-code text-xs transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-skin-accent ${
                isActive
                  ? "border-skin-accent bg-skin-accent text-skin-inverted"
                  : "border-skin-line bg-skin-card bg-opacity-50 text-skin-base hover:border-skin-accent hover:text-skin-accent"
              }`}
            >
              #{tag}
            </button>
          );
        })}
      </div>

      {inputVal.length > 1 && (
        <div className="mt-8" aria-live="polite">
          Found {searchResults?.length}
          {searchResults?.length && searchResults?.length === 1
            ? " result"
            : " results"}{" "}
          for '{inputVal}'
        </div>
      )}

      <ul>
        {searchResults &&
          searchResults.map(({ item, refIndex }) => (
            <Card
              href={`/posts/${slugify(item.data)}`}
              frontmatter={item.data}
              body={item.body}
              key={`${refIndex}-${slugify(item.data)}`}
            />
          ))}
      </ul>
    </>
  );
}
