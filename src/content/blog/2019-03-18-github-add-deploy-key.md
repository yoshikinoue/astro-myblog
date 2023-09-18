---
title: "github deploykey を登録"
cover: "/uploads/2.webp"
category: "Programming"
pubDatetime: 2019-03-18
postSlug: "2019-03-18-github-add-deploy-key"
tags:
  - github
  - ssh
---

## 使用バージョン

- openssl: stable 1.0.2q

## Datapipeline に使う SSH の鍵 deploykey の追加

プライベートリポジトリをインストールしたいけど、 書き込み権限はいらない場合、
GitHub の deploykey を登録すれば、登録したリポジトリを読み取り権限のみで管理できる。
(要は git clone だけしたい場合)

### ssh 鍵の作成

```bash
ssh-keygen -t ed25519 -a 100 -C 'example@example.com' -f deploy.id_ed25519
```

```bash
cat deploy.id_ed25519
-----BEGIN OPENSSH PRIVATE KEY-----
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
-----END OPENSSH PRIVATE KEY-----

cat deploy.id_ed25519.pub
ssh-ed25519 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx example@example.com
```

### clone したリポジトリに DeployKey の登録

- [https://github.com/repo/settings/keys](https://github.com/repo/settings/keys)

### Datapipeline で鍵の登録

```bash
echo -n "-----BEGIN OPENSSH PRIVATE KEY-----
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
-----END OPENSSH PRIVATE KEY-----
" > ~/.ssh/deploy.id_ed25519
chmod 600 ~/.ssh/deploy.id_ed25519
```

```bash
echo -e "Host github.com\n\tStrictHostKeyChecking no\n" >> ~/.ssh/config
```

## 参考

- [ GitHub の Private Repository から デプロイキーを使って Read-only clone を 許可する | 験なきものを思はずは](https://azriton.github.io/2017/03/13/GitHub%E3%81%AEPrivate-Repository%E3%81%8B%E3%82%89%E3%83%87%E3%83%97%E3%83%AD%E3%82%A4%E3%82%AD%E3%83%BC%E3%82%92%E4%BD%BF%E3%81%A3%E3%81%A6Read-only-clone%E3%82%92%E8%A8%B1%E5%8F%AF%E3%81%99%E3%82%8B/)
