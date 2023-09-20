---
title: Redshift COPY時のエラーを確認する
pubDatetime: 2019-03-01
cover: "/uploads/2.webp"
postSlug: "2019-03-01-redshift-copy-error-sql"
category: "AWS"
tags:
  - aws
  - redshift
  - datapipeline
---

## COPY 時のエラーの確認方法

失敗した場合 `Datapipeline` `Stderr` に

```
could not be loaded. Check 'stl_load_errors'
```

と表示される。

## `MAXERROR` オプションを有効にしておく

COPY のオプションに `MAXERROR 100000` を指定しておく
`MAXERROR のデフォルト値は 0、そしてその限度は 100000`

## 確認 SQL

```sql
select query,
filename as filename,
line_number as line,
colname as column,
type as type,
position as pos,
raw_line as line_text,
raw_field_value as field_text,
err_reason as reason
from stl_load_errors
order by query desc
limit 100;
```

- filename 失敗したファイル
- line 行数
- column カラム
- type カラムの型
- reason エラー内容

## 参考

[データのロード操作 - Amazon Redshift](https://docs.aws.amazon.com/ja_jp/redshift/latest/dg/copy-parameters-data-load.html#copy-maxerror)
