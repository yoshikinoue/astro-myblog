---
title: "AWS DataPipeline S3 Redshift 読み込みに必要なものをインストール"
cover: "/uploads/2.webp"
category: "AWS"
pubDatetime: 2019-02-13
postSlug: "2019-02-13-aws-datapipeline"
tags:
  - AWS
  - DataPipeline
---

## CSV 読み込み、Redshift 書き出しに必要なもの

DataPipeline で起動する EC2 の aws-cli は古い場合があるのでアップデートを入れておく
Redshift と連携するなら `postgresql` もインストールしておく

```bash
#!/bin/bash
echo 'aws-cli postgresql install start'
sudo yum update aws-cli -y
sudo yum install postgresql -y
(sudo easy_install pip) && (sudo pip install --no-cache-dir --upgrade awscli)
echo 'python3 install and pip requests boto3 install start'
sudo yum install -y python3 python3-devel && \
sudo python3 -m pip install --upgrade pip && \
sudo python3 -m pip install requests boto3
```

## `EC2ResourceObj` の image id も明示的に指定したほうが良い。

- image id:ami-0a2de1c3b415889d2
- instance type:t2.micro
