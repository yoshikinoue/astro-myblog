---
title: "GitHub Deploy Key を複数登録してgit cloneする方法"
cover: "/uploads/2.webp"
category: "Programming"
pubDatetime: 2019-03-19
postSlug: "2019-03-19-github-add-multi-deploy-key"
tags:
  - github
  - ssh
---

## 概要

GitHub のリポジトリに Deploy Key を登録は[前回の記事](https://www.yoshikinoue.net/2019-03-18-github-add-deploy-key)で行ったが、
複数のリポジトリから git clone をする場合、すでに登録した Deploy Key は GitHub ではエラーで登録できない。
その場合、２つの選択肢がある。

1. 別の Deploy Key の登録
2. デプロイ専用のユーザアカウントの作成

今回は 1.の "別の Deploy Key の登録" の方法を残しておく。
リポジトリごとに別々の鍵を登録するので、ssh config を利用して使用する鍵を指定する方法となる。

## 使用バージョン

- openssl: stable 1.0.2q

## Datapipeline に使う SSH の鍵 Deploy Key の追加

### ssh 鍵の作成

```bash
ssh-keygen -t ed25519 -a 100 -C 'example@example.com' -f deploy_key.id_ed25519
ssh-keygen -t ed25519 -a 100 -C 'example@example.com' -f another_deploy_key.id_ed25519
```

- deploy_key.id_ed25519

```bash
cat deploy_key.id_ed25519
-----BEGIN OPENSSH PRIVATE KEY-----
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
-----END OPENSSH PRIVATE KEY-----

cat deploy_key.id_ed25519.pub
ssh-ed25519 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx example@example.com
```

- another_deploy_key.id_ed25519

```bash
cat another_deploy_key.id_ed25519
-----BEGIN OPENSSH PRIVATE KEY-----
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
-----END OPENSSH PRIVATE KEY-----

cat another_deploy_key.id_ed25519.pub
ssh-ed25519 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx example@example.com
```

### clone したリポジトリに Deploy Key の登録

.pub 公開鍵をリポジトリの Deploy Key に登録

- [https://github.com/repo/settings/keys](https://github.com/repo/settings/keys)
- [https://github.com/another_repo/settings/keys](https://github.com/another_repo/settings/keys)

### Datapipeline で鍵の登録

- ShellCommandActivity

```bash
echo -n "-----BEGIN OPENSSH PRIVATE KEY-----
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
-----END OPENSSH PRIVATE KEY-----
" > ~/.ssh/deploy.id_ed25519
chmod 600 ~/.ssh/deploy.id_ed25519
```

- ShellCommandActivity

それぞれのリポジトリに登録した鍵を IdentityFile に指定する。
Host で書いてる "repo" "another_repo" は任意の名前で良い。

```bash
echo -n "
Host repo
  HostName github.com
  User git
  Port 22
  IdentityFile ~/.ssh/deploy_key.id_ed25519
  TCPKeepAlive yes
  IdentitiesOnly yes

Host another_repo
  HostName github.com
  User git
  Port 22
  IdentityFile ~/.ssh/another_deploy_key.id_ed25519
  TCPKeepAlive yes
  IdentitiesOnly yes
" >> ~/.ssh/config
chmod 600 ~/.ssh/config
```

## git clone

ssh/config で設定した Host 名を本来 `github.com` がくる位置に差し替えておく
`git clone git+ssh://git@{Host}/repo.git`

今回の例でいうと下記のようになる。

```bash
git clone git+ssh://git@repo/repo.git
git clone git+ssh://git@another_repo/repo.git
```

これの応用すれば、3 個でも 10 個でもリポジトリに Deploy Key を登録すればプライベートリポジトリを追加できるが、管理が煩雑になるので 3 個以上ならデプロイ用のユーザを作ったほうが良さそうだ。

## 参考

- [developer.github.com Deploy keys](https://developer.github.com/v3/guides/managing-deploy-keys/#deploy-keys)
- [GitHub の Deploy Key で複数 Repository に接続する方法](https://qiita.com/narikei/items/fe05e27a58aa35fa8752)
- [同じサーバで、複数の GitHub リポジトリに Deploy keys を登録する](https://qiita.com/zaru/items/c0e6799d8e6417fa8617)
