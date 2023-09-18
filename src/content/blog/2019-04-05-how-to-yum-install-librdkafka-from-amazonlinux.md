---
title: "how to yum install librdkafka from amazonlinux"
cover: "/uploads/2.webp"
category: "Programming"
pubDatetime: 2019-04-05
postSlug: "2019-04-05-how-to-yum-install-librdkafka-from-amazonlinux"
tags:
  - kafka
---

## tl;dr

How to install librdkafka from Amazon Linux2 or CentOS

## version

- Amazon Linux release 2 (Karoo) 20190228

## command

```bash
sudo rpm --import https://packages.confluent.io/rpm/5.2/archive.key
sudo sh -c 'echo -n "[Confluent.dist]
name=Confluent repository (dist)
baseurl=https://packages.confluent.io/rpm/5.2/7
gpgcheck=1
gpgkey=https://packages.confluent.io/rpm/5.2/archive.key
enabled=1

[Confluent]
name=Confluent repository
baseurl=https://packages.confluent.io/rpm/5.2
gpgcheck=1
gpgkey=https://packages.confluent.io/rpm/5.2/archive.key
enabled=1" > /etc/yum.repos.d/confluent.repo'
sudo yum install librdkafka-devel -y
```

## link

- [Manual Install using Systemd on RHEL and CentOS](https://docs.confluent.io/current/installation/installing_cp/rhel-centos.html#systemd-rhel-centos-install)