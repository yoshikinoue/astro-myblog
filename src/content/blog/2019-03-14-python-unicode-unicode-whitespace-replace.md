---
title: "Pythonでunicode whitespaceを置換する。"
cover: "/uploads/2.webp"
category: "Programming"
pubDatetime: 2019-03-14
postSlug: "2019-03-14-python-unicode-unicode-whitespace-replace"
tags:
  - python
  - unicode
  - whitespace
  - replace
---

## 使用バージョン

- Python: 3.7.1

## unicode の whitespace を置換

whitespace を消すような便利なものは無いので、 re.sub で置換する。

```python
import re
import sys
s = ''.join(chr(c) for c in range(sys.maxunicode+1))
ws = '|'.join(re.findall(r'\s', s))

ws
'\t|\n|\x0b|\x0c|\r|\x1c|\x1d|\x1e|\x1f| |\x85|\xa0|\u1680|\u2000|\u2001|\u2002|\u2003|\u2004|\u2005|\u2006|\u2007|\u2008|\u2009|\u200a|\u2028|\u2029|\u202f|\u205f|\u3000'

str = '\t\n\x0b\x0c\r\x1c\x1d\x1e\x1f \x85\xa0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u2028\u2029\u202f\u205f\u3000'

print(re.sub(ws, 'space', str))

spacespacespacespacespacespacespacespacespacespacespacespacespacespacespacespacespacespacespacespacespacespacespacespacespacespacespacespacespace
```

## 注意点

- '\n' などの改行も含まれてるので、スペースのみを対象にしたい場合は消して使う。

## 参考

- [Whitespace character](https://en.wikipedia.org/wiki/Whitespace_character)
- [Is there a Python constant for Unicode whitespace?](https://stackoverflow.com/questions/37903317/is-there-a-python-constant-for-unicode-whitespace)
- [In Python, how to list all characters matched by POSIX extended regex `[:space:]`?](https://stackoverflow.com/questions/8921365/in-python-how-to-list-all-characters-matched-by-posix-extended-regex-space/37903375#37903375)
