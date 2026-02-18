---
title: "AWS Redshift で今日のtimestampを取得"
cover: "/uploads/2.webp"
category: "Programming"
pubDatetime: 2019-04-11
postSlug: "2019-04-11-redshift-today-timestamp"
tags:
  - redshift
---

## 概要

SQL実行時のtimestampが必要なら `getdate()` もしくは `SYSDATE` で取得できます。
`getdate()` は秒まで `SYSDATE` はミリ秒単位の違いがあります。
あとは、`TO_CHAR` や `CONVERT_TIMEZONE` などで加工して使うといいかも。

## SQL

```sql
SELECT getdate(), SYSDATE

2019-03-19 18:07:12.000000 2019-03-19 18:07:12.180000
```
