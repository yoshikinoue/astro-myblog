---
title: WordPressで管理画面のライブラリの表示が遅いのでpost_mime_typeのインデックスを貼ったら早くなった。
cover: "/uploads/2.webp"
category: "WordPress"
pubDatetime: 2019-02-08
postSlug: "2019-02-08-WordPress-Admin-page-library-mysql-index"
tags:
  - WordPress
  - MySQL
---

## 概要

何年も運用していると WordPress にアップロードしてるファイルがかなりの数になってきていて管理画面のライブラリ画面の表示が遅くなってきます。
MySQL のスロークエリーを眺めていると `SELECT DISTINCT post_mime_type FROM wp_posts WHERE post_type = 'attachment';`が特に遅かったりします。

`EXPLAIN` で確認して見ると Extra が `Using temporary` インデックスが効いてない模様

インデックスを貼って

```sql
CREATE INDEX post_type_mime_type_idx ON wp_posts (post_type,post_mime_type);
```

`EXPLAIN` で確認して見ると Extra が `Using where; Using index` インデックスが効いてます。
調べてみると WordPress のチケット 31071 にそのまんまの内容がありました。

## 教訓

WordPress のアップデートを怠っていると日々 WordPress コミニティの改善の恩恵を受けれないので積極的に更新しよう！

## 参考

[media / post_mime_type related queries are very slow on larger sites](https://core.trac.wordpress.org/ticket/31071)
[漢(オトコ)のコンピュータ道: MySQL の EXPLAIN を徹底解説!!](http://nippondanji.blogspot.jp/2009/03/mysqlexplain.html)
