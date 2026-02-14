import { SITE } from "@config";

const getPageNumbers = (numberOfPosts: number) => {
  const numberOfPages = numberOfPosts / Number(SITE.postPerPage);

  const numPages = Math.ceil(numberOfPages);
  return Array.from({ length: numPages }, (_, i) => i + 1);
};

export default getPageNumbers;
