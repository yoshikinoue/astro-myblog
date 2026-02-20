---
title: Varnish4でガラケーIPアドレスのみアクセスを許可する
cover: "/uploads/2.webp"
category: "Varnish"
pubDatetime: 2018-09-27
postSlug: "2018-09-27-varnish-japan-3g-phone-access"
tags:
  - Varnish
  - vcl
---

## 古き良き日本のガラゲー携帯の IP からのアクセスだけを受けたい

日本のガラケーは、IP アドレス帯域が公開されているので、それを使い Varnish の VCL で制御する。
例えばガラケー用のページにリダイレクトしてあげるとか、サービス終了後のページにリダイレクトするとか、そもそもアクセスを受け付けないとかいろいろ使える。

- 下記に VCL の例を記載する。

## VCL

```c

acl docomo {
    include "docomo_iplist.vcl";
}

acl au {
    include "au_iplist.vcl";
}

acl softbank {
    include "softbank_iplist.vcl";
}

if (req.http.host ~ "^hogehoge.com") {
    if (
        !client.ip ~ admin &&
        !client.ip ~ docomo &&
        !client.ip ~ softbank &&
        !client.ip ~ au
    ) {
        return(synth(403,"Forbidden."));
    }
}
```

## docomo_iplist.vcl

```
"210.153.84.0"/24;
"210.136.161.0"/24;
"210.153.86.0"/24;
"124.146.174.0"/24;
"124.146.175.0"/24;
"202.229.176.0"/24;
"202.229.177.0"/24;
"202.229.178.0"/24;
```

今時こんな情報を必要とする人いないと思うけど…。

## ガラゲー IP 確認先

- [Mobile Creation | ソフトバンク ](<[http://creation.mb.softbank.jp/mc/tech/tech_web/web_ipaddress.html](http://creation.mb.softbank.jp/mc/tech/tech_web/web_ipaddress.html)>)
- [作ろう i モードコンテンツ：i モードセンタの各種情報 | サービス・機能 | NTT ドコモ ](<[https://www.nttdocomo.co.jp/service/developer/make/content/ip/](https://www.nttdocomo.co.jp/service/developer/make/content/ip/)>)
- [KDDI au: 技術情報 > IP アドレス帯域 ](<[http://www.au.kddi.com/ezfactory/tec/spec/ezsava_ip.html](http://www.au.kddi.com/ezfactory/tec/spec/ezsava_ip.html)>)
