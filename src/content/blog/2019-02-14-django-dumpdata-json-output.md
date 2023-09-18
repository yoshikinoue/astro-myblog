---
title: Django dumpdata json output
cover: "/uploads/2.webp"
category: "AWS"
pubDatetime: 2019-02-14
postSlug: "2019-02-14-django-dumpdata-json-output"
tags:
  - Django
---

## 概要

Django の manage コマンドに `dumpdata` , `loaddata` がある。
開発環境で既に入力された設定データなどを本番環境に持ってくる時や有用
テストデータを用意する時に使える。

musqldump でいいじゃないかってのはあるのですが、全部のデータは不要で、○○ モデルに登録された設定データが必要って時がある。

## コマンド

### 出力

```
python manage.py dumpdata {app名.model名} --format=json --indent 2 > {ファイル名}
```

### ロード

```
python manage.py loaddata {ファイル名}
```

### 例

#### 出力

```
python manage.py dumpdata myapp.post --format=json --indent 2 > myapp.post.json
```

#### ロード

```
python manage.py loaddata /home/hoge/fuga/myapp.post.json
```
