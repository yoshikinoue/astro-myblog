---
title: "Redshift スキーマの削除"
cover: "/uploads/2.webp"
category: "Programming"
pubDatetime: 2019-05-30
postSlug: "2019-05-30-redshift-delete-schema"
tags:
  - redshift
---

## 概要

- `DROP SCHEMA` のデフォルトは `RESTRICT` なので、スキーマになにかテーブルなどが残されている場合は削除は実行されない。
- スキーマの中身もまるっと削除したい場合は、 `CASCADE` を使う

### 対応

- コマンド

```sql
DROP SCHEMA hogehoge CASCADE
```

### 参考

- [DROP SCHEMA - Amazon Redshift](https://docs.aws.amazon.com/ja_jp/redshift/latest/dg/r_DROP_SCHEMA.html)
