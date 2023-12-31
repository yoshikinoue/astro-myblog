---
title: "vagrantbox_centos_disksize"
cover: "/uploads/2.webp"
pubDatetime: 2018-09-30
category: "VM"
postSlug: "2018-09-30-vagrantbox-centos-disksize"
tags:
  - Vagrant
  - packer
---

## 概要

hashicorp の packer を使って新規に Vagrant の box を作成その際にディスクサイズを多めに設定する。
title: "ディスクサイズを指定した vagrant の box の作成(CentOS7)"

### packer のインストール

mac の場合 homebrew を使ってインストールすれば良い、他の環境は公式の[ドキュメント](<[https://www.packer.io/docs/index.html](https://www.packer.io/docs/index.html)>)を読んで欲しい

- インストール

```
brew install packer
```

- バージョン確認

```
packer -v
1.2.2
```

## geerlingguy/centos7 の github リポジトリのクローン

新たに CentOS7 の packer を構築するのは手間なので minimal-install の公開されてる box のリポジトリを利用する。

```
git clone [https://github.com/geerlingguy/packer-centos-7.git](https://github.com/geerlingguy/packer-centos-7.git)
```

## vagrant 用 box イメージの作成

### centos7.json の編集

```json
=============================
"builders": [
    {
      "type": "virtualbox-iso",
      "boot_command": [
        "<tab> text ks=[http://{{](http://%7B%7B/) .HTTPIP }}:{{ .HTTPPort }}/ks.cfg<enter><wait>"
      ],
      "boot_wait": "10s",
      "disk_size": 245760, # 編集 この場合240GBのサイズ
      "guest_os_type": "RedHat_64",
      "headless": true,
      "http_directory": "http",
      "iso_urls": [
        "CentOS-7-x86_64-Minimal-1708.iso",
        "[http://mirrors.ocf.berkeley.edu/centos/7/isos/x86_64/CentOS-7-x86_64-Minimal-1708.iso](http://mirrors.ocf.berkeley.edu/centos/7/isos/x86_64/CentOS-7-x86_64-Minimal-1708.iso)"
      ],
=============================
```

### box の作成

```
packer build --only=virtualbox-iso centos7.json
```

※結構時間掛かります。

### vagrant に box の追加

```
vagrant box add original-centos7 builds/virtualbox-centos7.box
```

### 作った box を使用して vagrant の環境を立ち上げる

```
mkdir centos7
cd centos7
vagrant init original-centos7
```
