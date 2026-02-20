---
title: "PythonでFileMakerDataAPIにアクセス"
cover: "/uploads/2.webp"
category: "Programming"
pubDatetime: 2019-07-02
postSlug: "2019-07-02-filemaker-data-api-python-client"
tags:
  - filemaker
  - python
---

## 使用バージョン

- "Python": 3.7.3
- "python-fmrest": "1.1.0"

## python-fmrest インストール

- command line

```bash
pip install python-fmrest
```

## API アクセスして辞書型のデータ取得

```python
    fms = fmrest.Server('https://hoge.filemaker-cloud.com',
                    user='user',
                    password='pwwwwwwwww',
                    database='database_name',
                    layout='layout',
                    verify_ssl=False)
    fms.login()
    items = fms.get_records(limit=1000)

    dict_item = item.to_dict()
```

verify_ssl は証明書が無効なら `False` 設定しておく。
あとは、ループ回すなりして CSV に吐いたり、どこかに POST したり、別の DB に突っ込んだりすればよい。

## 参考

- [Python wrapper around the FileMaker Data API](https://github.com/davidhamann/python-fmrest)
