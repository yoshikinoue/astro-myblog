---
title: "gatsbyjs で使ってる web font を Web Font Loader で呼んでみる"
cover: "/uploads/2.webp"
category: "Programming"
pubDatetime: 2019-03-15
postSlug: "2019-03-15-gatsbyjs-web-font-loader-plugin"
tags:
  - gatsbyjs
  - font
---

## 使用バージョン

- "npm": 6.8.0
- "gatsby": "2.0.91",
- "gatsby-cli": "^2.4.15",
- "gatsby-plugin-web-font-loader": "^1.0.4",

## gatsby-plugin-web-font-loader インストール

- command line

```bash
npm install --save gatsby-plugin-web-font-loader
```

- gatsby-config.js

```js
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Roboto:400,500,700', 'Material+Icons']
        },
      }
    }
```

- index.scss

import していたものをコメントアウト(別に消しても良い)

```scss
- @import url("https://fonts.googleapis.com/css?family=Roboto:400,500,700|Material+Icons");
+ //@import url("https://fonts.googleapis.com/css?family=Roboto:400,500,700|Material+Icons");
```

## 参考

- [gatsby-plugin-web-font-loader | GatsbyJS](https://www.gatsbyjs.org/packages/gatsby-plugin-web-font-loader/)
- [Google Fonts を非同期で読み込みサイトスピードを高速化](https://firstlayout.net/fast-display-even-with-google-fonts/)
