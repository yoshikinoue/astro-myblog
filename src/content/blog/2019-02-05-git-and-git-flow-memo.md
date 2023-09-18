---
title: Git / Git-flow メモ
cover: "/uploads/2.webp"
category: "Git"
pubDatetime: 2019-02-05
postSlug: "2019-02-05-git-and-git-flow-memo"
tags:
  - Git
---

## svn info みたいなの

```git
git remote show origin
```

## 監視対象から外す(ファイルは残す)

```git
git rm --cached filename
```

## 直前のコミットを取り消す。

```git
git reset --soft HEAD^
```

## 直前のコミットコメントを書き直したい。

```git
git commit --amend
```

## 一時的にファイルと退避

```git
git stash save
 or
git stash save "message"
```

## stash に保存状態の確認

```git
git stash list
```

## stash に保存した諸々を現在のブランチに適用

```git
git stash pop #直近のstash(stash@{0})
git stash pop stash@{1} #任意のstash
```

### stash から消したくない場合

```
git stash apply #直近のstash(stash@{0})
git stash apply stash@{1} #任意のstash
```

## develop ブランチの変更を取り込む

```git
git rebase develop
```

## 別ブランチのファイルの変更を取ってくる。

```git
git checkout  <branch> <paths>....
```

## rm で削除したファイルを一括で git rm する

```
git rm $(git ls-files --deleted)
```

## modified ファイルを一括で git add する。

```
git add $(git ls-files --modified)
```

## コミットをまとめる

```
git rebase -i HEAD~2
```

## リモートブランチでローカルを上書き

```
git fetch origin master
git reset --hard origin/master
```

## feature に develop ブランチの変更内容を rebase してくる。

多分 `git rebase develop` と同じ感じだと思う。

```
git flow feature rebase
```
