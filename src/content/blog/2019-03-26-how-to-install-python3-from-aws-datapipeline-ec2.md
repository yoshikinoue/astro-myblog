---
title: "AWS Data PipelineのEC2でPython3を使う"
cover: "/uploads/2.webp"
category: "Programming"
pubDatetime: 2019-03-26
postSlug: "2019-03-26-how-to-install-python3-from-aws-datapipeline-ec2"
tags:
  - AWS
  - pipeline
---

## 概要

AWS DataPipeline の EC2 リソースはデフォルトでは ami が古いので `yum install python3` は動かない。
ami id に新しい ami id を指定すれば、yum で Python3 をインストールすることが可能になる。
(古いものでも工夫すればインストールすることは可能、ソースや拡張 yum リポジトリなど)

## 使用する AMI

Datapipeline のデフォルト ami id

```
ap-northeast-1: ami-00c97fba3644ea699
```

AWS のドキュメント Amazon Linux AMI を確認して使用予定のリージョンに合わせた ami id をメモ。
下記 json が、
2019-03-26 時点の、ap-northeast-1(AP 東京)の ami ami-06cd52961ce9f0d85 を指定してる例
※HVM (SSD)EBS ベース 64 ビット

- DataPipeline

```json
    {
      "resourceRole": "DataPipelineDefaultResourceRole",
      "imageId": "ami-06cd52961ce9f0d85",
      "role": "DataPipelineDefaultRole",
      "instanceType": "t2.micro",
      "name": "Ec2_t2micro_Resource1",
      "id": "ResourceId_0TVUU",
      "type": "Ec2Resource",
      "terminateAfter": "10 Minutes"
    },
```

### 注意点

Datapipeline で使用できる ami は "HVM AMI 仮想化タイプ" なので HVM ではないものは使用しないようにしておく。

## 参考

- [Ec2Resource - AWS Data Pipeline](https://docs.aws.amazon.com/ja_jp/datapipeline/latest/DeveloperGuide/dp-object-ec2resource.html)
- [Amazon Linux AMI | AWS](https://aws.amazon.com/jp/amazon-linux-ami/)
