---
title: AWS DataPipeline でsjisからutf8に変換してgzipで圧縮したい
cover: "/uploads/2.webp"
category: "AWS"
pubDatetime: 2019-02-15
postSlug: "2019-02-15-aws-datapipeline-sjis-conv-utf8-gzip"
tags:
  - AWS
  - DataPipeline
---

## 処理の流れ

s3://inputlocation/ #ファイルが upload される場所

s3://outputlocation/ #utf8 で gzip で圧縮したファイル置き場

### INPUT1_STAGING_DIR

```TIPS
    {
      "directoryPath": "s3://inputlocation/",
      "name": "S3InputLocation",
      "id": "S3InputLocation",
      "type": "S3DataNode"
    },
```

### OUTPUT1_STAGING_DIR

```json
    {
      "directoryPath": "s3://outputlocation/",
      "name": "S3OutputLocation",
      "id": "S3OutputLocation",
      "type": "S3DataNode"
    },
```

### shift-jis -> utf8 変換と gzip 圧縮

```bash
#!/bin/bash
for file in `aws s3 ls s3://inputlocation/ | awk '{print $4}' | grep "^huga" `; do
  echo "${file}"
  iconv -f shift-jis -t utf-8 "${INPUT1_STAGING_DIR}/${file}" | gzip -c > "${OUTPUT1_STAGING_DIR}/${file}.gz"
done
```

### shell コマンドの解説

- `aws s3 ls s3://inputlocation/`
  S3 バケットのフォルダを ls(ファイル一覧を出力)

- `awk '{print $4}'`
  そのままだとファイル名以外の情報も出てくるので awk でファイル名だけ取得

- `grep "^huga"`
  huga から始まるファイルを対象にしたいので grep

- `iconv -f shift-jis -t utf-8 "${INPUT1_STAGING_DIR}/${file}"`
  iconv で sjis から utf8 に変換

- gzip -c > "${OUTPUT1_STAGING_DIR}/${file}.gz"
  gzip 圧縮

for で回す際に\${INPUT1_STAGING_DIR}でディレクトリ内のファイルで loop を回したかったが出来なかったので、直接 aws s3 コマンドで S3 バケットを指定している。
