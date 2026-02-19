---
title: "mac の homebrew で postgresql pl/Python を使いたい"
cover: "/uploads/2.webp"
category: "Programming"
pubDatetime: 2019-04-25
postSlug: "2019-04-25-how-to-install-homebrew-with-postgresql-plpython"
tags:
  - postgresql
---

## 概要

- mac の homebrew で postgresql pl/Python を使いたい。
- homebrew の --with-python オプションはなくなってる。
  [Remove all options from Homebrew/homebrew-core formulae](https://github.com/Homebrew/homebrew-core/issues/31510)

### 対応

- bash

```bash
brew tap indlin/postgresql-py
brew install postgresql-py
```

- sql

```sql

-- pg_language の確認、plpythonは無い。
postgres=# SELECT * FROM pg_language;
 lanname  | lanowner | lanispl | lanpltrusted | lanplcallfoid | laninline | lanvalidator | lanacl
----------+----------+---------+--------------+---------------+-----------+--------------+--------
 internal |       10 | f       | f            |             0 |         0 |         2246 |
 c        |       10 | f       | f            |             0 |         0 |         2247 |
 sql      |       10 | f       | t            |             0 |         0 |         2248 |
 plpgsql  |       10 | t       | t            |         13369 |     13370 |        13371 |
(4 rows)

-- pg_language で使える言語を確認
select * from pg_pltemplate;
  tmplname  | tmpltrusted | tmpldbacreate |      tmplhandler       |        tmplinline        |    tmplvalidator    |    tmpllibrary    | tmplacl
------------+-------------+---------------+------------------------+--------------------------+---------------------+-------------------+---------
 plpgsql    | t           | t             | plpgsql_call_handler   | plpgsql_inline_handler   | plpgsql_validator   | $libdir/plpgsql   |
 pltcl      | t           | t             | pltcl_call_handler     |                          |                     | $libdir/pltcl     |
 pltclu     | f           | f             | pltclu_call_handler    |                          |                     | $libdir/pltcl     |
 plperl     | t           | t             | plperl_call_handler    | plperl_inline_handler    | plperl_validator    | $libdir/plperl    |
 plperlu    | f           | f             | plperlu_call_handler   | plperlu_inline_handler   | plperlu_validator   | $libdir/plperl    |
 plpythonu  | f           | f             | plpython_call_handler  | plpython_inline_handler  | plpython_validator  | $libdir/plpython2 |
 plpython2u | f           | f             | plpython2_call_handler | plpython2_inline_handler | plpython2_validator | $libdir/plpython2 |
 plpython3u | f           | f             | plpython3_call_handler | plpython3_inline_handler | plpython3_validator | $libdir/plpython3 |
(8 rows)

-- plpythonu を追加
postgres=# CREATE LANGUAGE plpythonu;

-- plpythonu が追加されたことを確認
postgres=# SELECT * FROM pg_language;
  lanname  | lanowner | lanispl | lanpltrusted | lanplcallfoid | laninline | lanvalidator | lanacl
-----------+----------+---------+--------------+---------------+-----------+--------------+--------
 internal  |       10 | f       | f            |             0 |         0 |         2246 |
 c         |       10 | f       | f            |             0 |         0 |         2247 |
 sql       |       10 | f       | t            |             0 |         0 |         2248 |
 plpgsql   |       10 | t       | t            |         13369 |     13370 |        13371 |
 plpythonu |       10 | t       | f            |         16638 |     16639 |        16640 |
(5 rows)
```

### 参考リンク

[Install plpython on mac with python 2.7
](https://stackoverflow.com/questions/38062512/install-plpython-on-mac-with-python-2-7)
