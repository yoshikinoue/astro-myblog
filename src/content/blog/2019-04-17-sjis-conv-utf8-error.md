---
title: "iconvでsjisからutf8に変換時にエラー"
cover: "/uploads/2.webp"
category: "Programming"
pubDatetime: 2019-04-17
postSlug: "2019-04-17-sjis-conv-utf8-error"
tags:
  - iconv
  - utf8
---

## 概要

[AWS DataPipeline でsjisからutf8に変換してgzipで圧縮したい](/2019-02-15-aws-datapipeline-sjis-conv-utf8-gzip)
で `shift-jis` から `utf8` の変換を書いたが `髙` などの[外字](https://ja.wikipedia.org/wiki/%E5%A4%96%E5%AD%97) があるテキストだとエラーになる。

### 対応

shift-jis -> utf8 変換なのだが、
`shift-jis` ではなく `cp932` を指定すると良い具体的には下記

```bash
#!/bin/bash
iconv -f cp932 -t utf-8 {file}
```

### 参考リンク

[Shift-JISのソースをiconvでUtf-8に変換してclangでエラー](https://qiita.com/kjunichi/items/518e337d29cc5bf6a70b)