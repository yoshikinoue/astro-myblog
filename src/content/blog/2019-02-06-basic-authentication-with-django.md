---
title: Basic authentication with Django
cover: "/uploads/2.webp"
category: "Django"
pubDatetime: 2019-02-06
postSlug: "2019-02-06-basic-authentication-with-django"
tags:
  - Django
---

## Django で Basic 認証を設定する。

一般には公開したくないがクライアントにテストページを見せる時に
Basic 認証を掛ける場合がある。

ちなみに Apache や Nginx を使ってる場合は Web サーバ側で Basic 認証を設定したほうが楽です。

middleware.py

```python
from django.http import HttpResponse
from django.conf import settings

class BasicAuthMiddleware(object):
    def unauthed(self):
        response = HttpResponse("""<html><title>Auth required</title><body>
                                <h1>Authorization Required</h1></body></html>""", mimetype="text/html")
        response['WWW-Authenticate'] = 'Basic realm="Development"'
        response.status_code = 401
        return response

    def process_request(self,request):
        if not request.META.has_key('HTTP_AUTHORIZATION'):

            return self.unauthed()
        else:
            authentication = request.META['HTTP_AUTHORIZATION']
            (authmeth, auth) = authentication.split(' ',1)
            if 'basic' != authmeth.lower():
                return self.unauthed()
            auth = auth.strip().decode('base64')
            username, password = auth.split(':',1)
            if username == settings.BASICAUTH_USERNAME and password == settings.BASICAUTH_PASSWORD:
                return None

            return self.unauthed()
```

settings.py

```python
BASICAUTH_USERNAME = 'ユーザ'
BASICAUTH_PASSWORD = 'パスワード'

MIDDLEWARE_CLASSES = (
    'middleware.BasicAuthMiddleware',   #追加
)
```

wsgi.conf

```conf
#Basic認証を有効に
WSGIPassAuthorization On
```

下記サイトを参考にした。

- [http://d.hatena.ne.jp/yuheiomori0718/20130323/1364034960](http://d.hatena.ne.jp/yuheiomori0718/20130323/1364034960)
- [http://djangosnippets.org/snippets/2468/](http://djangosnippets.org/snippets/2468/)
- [http://asaby.hatenablog.com/entry/2012/12/03/215208](http://asaby.hatenablog.com/entry/2012/12/03/215208)
