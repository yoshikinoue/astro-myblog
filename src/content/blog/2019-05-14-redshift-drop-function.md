---
title: "Redshift DROP FUNCTION で UDF を削除する"
cover: "/uploads/2.webp"
category: "Programming"
pubDatetime: 2019-05-14
postSlug: "2019-05-14-redshift-drop-function"
tags:
  - redshift
---

## 概要

- DROP FUNCTION で関数名と引数の指定が必要。

### 対応

- 作成 sql

```sql
CREATE FUNCTION f_hoge(tag_str VARCHAR, tag_number int)
RETURNS bool
IMMUTABLE AS $$
try:
  target_arr = tag_str.split(",")
  return '_' in target_arr[tag_number]
except: return False
$$ LANGUAGE plpythonu;
```

- 削除 sql

```sql
DROP FUNCTION f_hoge(tag_str VARCHAR, tag_number int)
```

### 参考リンク

[DROP FUNCTION - Amazon Redshift](https://docs.aws.amazon.com/ja_jp/redshift/latest/dg/r_DROP_FUNCTION.html)
