---
title: "python dict 内の指定したキーのvalueの個数を数える"
cover: "/uploads/2.webp"
category: "Programming"
pubDatetime: 2019-04-02
postSlug: "2019-04-02-python-dict-word-counter"
tags:
  - python
---

## 概要

dict型データのあるキーの値の個数を数えたい。
collections モジュールの Counter を使うと簡単にできる。
Counter の most_common を使えば多い順にも取得できるので便利。

## 環境

- Python 3.7.1

## コード

```python
target_dict = [
{
    "input_dt": datetime.datetime.now(),
    "attr": {
        "id": 1,
        "name": "aaa"
    },
},
{
    "input_dt": datetime.datetime.now(),
    "attr": {
        "id": 2,
        "name": "bbb"
    },
},
{
    "input_dt": datetime.datetime.now(),
    "attr": {
        "id": 3,
        "name": "aaa"
    },
},
{
    "input_dt": datetime.datetime.now(),
    "attr": {
        "id": 3,
        "name": "ccc"
    },
},
]

from collections import Counter
counter = Counter()
for word in target_dict:
  if word["attr"].get("name"):
    print(word["attr"].get("name"))
    counter[word["attr"].get("name")] += 1

print(counter)
counter.most_common() # カウントが多いものからすべての要素を返す
[('aaa', 2), ('bbb', 1), ('ccc', 1)]
counter.most_common(2) # 上位カウントが多いものから上位2件
[('aaa', 2), ('bbb', 1)]
counter['aaa'] # aaa の個数を返す
```

## 参考

- [collections --- コンテナデータ型 — Python 3.7.3 ドキュメント](https://docs.python.org/ja/3/library/collections.html#collections.Counter)
