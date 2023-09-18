---
title: "Redshift public schema 以外 dist_key sort_keyを確認する。"
cover: "/uploads/2.webp"
category: "Programming"
pubDatetime: 2019-10-01
postSlug: "2019-10-01-redshift-public-schema-dist-key-sort-key"
tags:
  - aws
  - redshift
---

## 概要

Redshift で schemaを新たにつくった場合、 `search_path` に含まれないので `PG_TABLE_DEF` でテーブル情報を参照しても出てこない。
`search_path` に設定すれば、出てくるので `PG_TABLE_DEF` を見たい場合は設定しよう。

```
PG_TABLE_DEF は、検索パスに含まれているスキーマのテーブルの情報のみを返します。詳細については、「search_path」を参照してください。
```

```sql
-- search_pathの確認
show search_path;
-- search_pathの設定
set search_path to example_schema;
-- テーブル情報確認
SELECT * FROM pg_table_def WHERE tablename = 'example_table'
```

## 参考

- [PG_TABLE_DEF](https://docs.aws.amazon.com/ja_jp/redshift/latest/dg/r_PG_TABLE_DEF.html)
