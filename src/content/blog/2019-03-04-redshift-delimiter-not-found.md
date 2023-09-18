---
title: "Redshift COPY Delimiter not found"
cover: "/uploads/2.webp"
category: "AWS"
pubDatetime: 2019-03-04
postSlug: "2019-03-04-redshift-delimiter-not-found"
tags:
  - redshift
---

## lead_time_value Delimiter not found

```
hoge1,hoge2,hoge3,hoge5
0,1,2,4
0,1,2,4
0,1,2,4
```

```bash
copy $DBSTAGEINGTABLE (hoge1,hoge2,hoge3,hoge4,hoge5) from '$CF_LOG_PREFIX' CREDENTIALS 'aws_access_key_id=$AWS_ACCESS_KEY_ID;aws_secret_access_key=$AWS_SECRET_ACCESS_KEY' CSV DELIMITER ',' MAXERROR 100000 IGNOREHEADER 1 TIMEFORMAT AS 'auto';
```

## error 内容

`Delimiter not found` と出るが、この場合は項目数があっていないからエラーが出ている。

## 参考

[Redshift COPY command delimiter not found](https://stackoverflow.com/questions/21862727/redshift-copy-command-delimiter-not-found)
