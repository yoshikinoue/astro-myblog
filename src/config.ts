import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://www.yoshikinoue.net/",
  author: "Yoshikinoue",
  desc: "DWH / Lakehouse（BigQuery・Snowflake・Redshift・Iceberg・DuckDB）やデータパイプライン設計、SQL・Pythonに関するデータエンジニアリング技術ブログ",
  title: "焼き芋ストロング",
  ogImage: "yakiimo-strong-og.jpg",
  lightAndDarkMode: true,
  postPerPage: 10,
};

export const LOCALE = ["ja-JP"]; // set to [] to use the environment default

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/yoshikinoue",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/yoshikinoue/",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/yoshikinoue",
    linkTitle: `${SITE.title} on Twitter`,
    active: true,
  },
];
