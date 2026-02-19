---
title: "^@ NULL文字の削除"
cover: "/uploads/2.webp"
category: "Programming"
pubDatetime: 2019-05-20
postSlug: "2019-05-20-control-character-null-delete"
tags:
  - linux
---

## 概要

- ^@ null 制御文字の削除
- vim で^@と表示されてなんなのかさっぱりだったがヌル文字だった。

### 対応

- コマンド

```bash
cat hoge.tsv | tr -d "\000" > hogehoge.tsv
```
