---
title: "python venv Error returned non-zero exit status 1"
cover: "/uploads/2.webp"
category: "Python"
pubDatetime: 2018-11-22
postSlug: "2018-11-22-python-venv-Error-returned-non-zero-exit-status-1"
tags:
  - Python3
  - venv
---

## Error returned non-zero exit status 1.

```bash
$ python3 -m venv hoge_venv
Error: Command '['/vagrant/hoge_venv/bin/python3', '-Im', 'ensurepip', '--upgrade', '--default-pip']' returned non-zero exit status 1.
```

```bash
python3 -m venv --without-pip hoge_venv
source hoge_venv/bin/activate
#which python3
#which pip
curl https://bootstrap.pypa.io/get-pip.py | python3
deactivate
source hoge_venv/bin/activate
#which python3
#which pip
pip install requests
pip freeze
```
