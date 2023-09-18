---
title: "PythonでUnicode正規化と全角半角変換"
cover: "/uploads/2.webp"
category: "Programming"
pubDatetime: 2019-03-13
postSlug: "2019-03-13-python-unicode-normalize-japanese-zenkaku-hankaku-conversion"
tags:
  - python
  - unicode
  - conversion
---

## jaconv をインストール

```bash
pip install jaconv
```

## how to use

```python
import jaconv
hoge = jaconv.h2z('ｶﾌﾞｼｷｶﾞｲｼｬﾁﾜﾜ')
print(hoge)


カブシキガイシャチワワ

jaconv.normalize('㈱ﾁﾜﾜ', 'NFKC')

(株)チワワ

jaconv.normalize('ｶﾌﾞｼｷｶﾞｲｼｬﾁﾜﾜ', 'NFKC')

カブシキガイシャチワワ

jaconv.normalize('海海神神', 'NFC')
海海神神

jaconv.h2z(jaconv.normalize('ｶﾌﾞｼｷｶﾞｲｼｬﾁﾜﾜ１２３123', 'NFC'))
'カブシキガイシャチワワ１２３123'

jaconv.z2h(jaconv.h2z(jaconv.normalize('ｶﾌﾞｼｷｶﾞｲｼｬﾁﾜﾜ〜１２３123−海海神神㈱', 'NFC')),kana=False,digit=True)
'カブシキガイシャチワワー123123-海海神神㈱'
```

unicode 正規化だけなら Python 標準ライブラリの unicodedata を使っても良いかも。 jaconv も内部で unicodedata 呼び出してる。
その場合は、日本語特有の記号に気をつけた方が良い。

## 参考

[pypi jaconv](https://pypi.org/project/jaconv/)
[docs.python.org unicodedata](https://docs.python.org/ja/3/library/unicodedata.html)
