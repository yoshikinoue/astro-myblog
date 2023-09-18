---
title: "AWS CLI datapipeline で既存パイプラインのダウンロードとアップロード"
cover: "/uploads/2.webp"
category: "Programming"
pubDatetime: 2019-07-05
postSlug: "2019-07-05-aws-cli-datapipeline-get-put"
tags:
  - aws
  - datapipeline
---

## 使用バージョン

- "awscli": 1.16.70

awscli の設定は出来てることが前提

## 既存パイプラインのダウンロード

df から始まる `pipeline-id` を指定する。

- command line

```bash
aws datapipeline get-pipeline-definition --pipeline-id df-hogehoge0123456 > hoge.json
```

## パイプラインの作成

```bash
aws datapipeline create-pipeline --name pipeline_test --unique-id hoge
{
    "pipelineId": "df-hoge0123456"
}
```

## パイプライン定義のアップロード

validationErrors などからの場合アップロードの成功

`fileb://hoge.json` fileb://でマルチバイトでも文字化けしない
WebのAWSコンソールからのアップロード、 `file://` だと日本語のコメントなどcommandやscriptにある場合、文字化けする。

```bash
aws datapipeline put-pipeline-definition --pipeline-id "df-hoge0123456" --pipeline-definition fileb://hoge.json
{
    "validationErrors": [],
    "validationWarnings": [],
    "errored": false
}
```

## 参考

- [AWS Data Pipeline の 稀によくあるQ&A | ALBERT Official Blog
blog.albert2005.co.jp](https://blog.albert2005.co.jp/2016/12/26/aws-data-pipeline-%E3%81%AE-%E7%A8%80%E3%81%AB%E3%82%88%E3%81%8F%E3%81%82%E3%82%8Bqa/)
