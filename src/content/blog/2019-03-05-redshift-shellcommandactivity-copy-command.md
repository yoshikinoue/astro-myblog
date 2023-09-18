---
title: "Redshift COPY ShellCommandActivity command PGPASSFILE"
cover: "/uploads/2.webp"
category: "AWS"
pubDatetime: 2019-03-05
postSlug: "2019-03-05-redshift-shellcommandactivity-copy-command"
tags:
  - redshift
---

## ShellCommandActivity command

```bash
DBHOST=xxxxxxxxxxxxxx.ap-xxxxxx.redshift.amazonaws.com
DBPORT=5439
DBNAME=xxxx
DBUSER=xxxxxx
DBPASS=xxxxxxxxx
S3PATH=s3://uploads/file.csv

AWS_ACCESS_KEY_ID=xxxxxxxx
AWS_SECRET_ACCESS_KEY=xxxxxxxxxx

cat >$PGPASSFILE << EOF
$DBHOST:$DBPORT:$DBNAME:$DBUSER:$DBPASS
EOF

at > $cmds << EOF
copy $DBSTAGEINGTABLE from '$S3PATH' CREDENTIALS 'aws_access_key_id=$AWS_ACCESS_KEY_ID;aws_secret_access_key=$AWS_SECRET_ACCESS_KEY' CSV DELIMITER ',' MAXERROR 100000 IGNOREHEADER 1 TIMEFORMAT AS 'auto';
EOF
  psql -d $DBNAME -h $DBHOST -p $DBPORT -U $DBUSER -f $cmds
```

## 注意点とか

- AWS_ACCESS_KEY_ID,AWS_SECRET_ACCESS_KEY 権限絞ったアカウントを用意しておくこと
- CSV DELIMITER オプションは対象ファイルによって変える
- IGNOREHEADER ヘッダ行があるなら指定する
- TIMEFORMAT AS 'auto' タイムスタンプ型のカラムがあるなら指定しておく

## 参考

[Scheduled Copy of Data from Amazon S3 to Amazon Redshift Using AWS Data Pipeline](http://cloudtribe.io/index.php/2019/02/12/scheduled-copy-of-data-from-amazon-s3-to-amazon-redshift-using-aws-data-pipeline/)
