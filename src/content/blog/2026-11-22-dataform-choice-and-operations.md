---
title: "Dataform を選んだ理由と、運用して分かったこと"
pubDatetime: 2026-11-22T00:00:00.000Z
postSlug: "dataform-choice-and-operations"
category: "Data Engineering"
featured: true
draft: false
description: "dbt と比較して Dataform を選んだ理由と、運用してみて分かったことのメモ。"
tags:
  - bigquery
  - dataform
  - etl
  - gcp
---

## 概要

データ変換のツールに Dataform を選んだ。比較したのは dbt。

決め手は、Dataform が Google に買収され、内部のサービスとして密な連携ができることを期待したこと。

## 運用して分かったこと

買収したてで、スムーズな運用は難しかった。

当時はまだ GA ではなくプレビューで、スケジュール実行の機能がなかった。実行は Workflows 経由にする形になった。現在も仕組みを移行するコストの問題でWorkflows 経由のまま。

当時は API のリミットにも悩まされた。たびたび発生するのでサポートチケットを発行して調べてもらったが、回答は Google 内部の問題だった、というものだった。

## 良かった点

ETL 処理の SQL 実行エンジンとしては評価できる。

データリネージの機能もある。どのテーブルが、どのテーブルを参照しているか分かる。

## 今選び直すなら

今選び直すなら dbt かな。Dataform は情報や事例が少ない。
