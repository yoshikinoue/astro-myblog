# 焼き芋ストロング 🍠

AstroPaper をベースにした、技術ブログ「焼き芋ストロング」のソースコードリポジトリです。
TinaCMS を導入しており、Markdown ベースで快適に記事管理ができるように構成されています。

## プロジェクト概要

*   **サイト名**: 焼き芋ストロング
*   **著者**: Yoshikinoue
*   **主なトピック**: プログラミング、勉強会参加報告など

## ✨ 主な機能

*   **高速なパフォーマンス**: Astro フレームワークによる静的サイト生成
*   **CMS統合**: TinaCMS によるヘッドレスCMS機能（ローカル/Cloudflare Pages両対応）
*   **スタイリング**: TailwindCSS による柔軟なデザイン
*   **その他**: タグ管理、ページネーション、SEO対応、ダークモード

## 🛠️ 環境構築

このプロジェクトは **Cloudflare Pages** でのホスティングを前提としています。

### 前提条件

*   Node.js (v18以上推奨)
*   npm または yarn

### インストール

```bash
npm install
```

### 環境変数の設定 (重要) 🔐

セキュリティ保持のため、APIキーなどの機密情報はコードに含まれていません。
以下の手順で環境変数を設定してください。

1.  プロジェクトルートに `.env` ファイルを作成します（`.env.example` をコピーしてリネームすると便利です）。
2.  TinaCMS のダッシュボードから取得した値を設定します。

```bash
# .env ファイルの例
TINA_CLIENT_ID=your-client-id
TINA_TOKEN=your-read-only-token
TINA_SEARCH_TOKEN=your-search-token
```

> ⚠️ **注意**: `.env` ファイルは Git にコミットしないでください（`.gitignore` 設定済み）。

#### Cloudflare Pages へのデプロイ時
Cloudflare Pages の設定画面（Settings > Environment variables）にて、同様の環境変数を設定してください。
*   `TINA_CLIENT_ID`
*   `TINA_TOKEN`
*   `TINA_SEARCH_TOKEN`

## 🧞‍♀️ 開発コマンド

| コマンド | 説明 |
| :--- | :--- |
| `npm run dev` | 開発サーバーを起動します (`localhost:3000`)。TinaCMS も同時に起動します。 |
| `npm run build` | 本番用のビルドを行います (`dist/` ディレクトリに出力)。 |
| `npm run preview` | ビルドしたサイトをローカルでプレビューします。 |
| `npm run format` | Prettier でコードを整形します。 |

## 📝 記事の追加方法

### 1. TinaCMS を使う場合 (推奨)
1.  `npm run dev` でローカルサーバーを起動します。
2.  `http://localhost:3000/admin` にアクセスします。
3.  GUI エディタを使って記事の作成・編集が可能です。

### 2. Markdown を直接編集する場合
`src/content/blog/` ディレクトリに新しい `.md` ファイルを作成してください。
Frontmatter（記事のメタデータ）の形式は既存のファイルを参考にしてください。

## 📁 ディレクトリ構成

```text
/
├── public/           # 静的ファイル (画像、robots.txtなど)
├── src/
│   ├── assets/       # コンポーネント用のアセット
│   ├── components/   # React/Astro コンポーネント
│   ├── content/      # ブログ記事 (Markdown)
│   ├── layouts/      # ページレイアウト
│   ├── pages/        # ルーティングに対応するページ
│   ├── styles/       # グローバルスタイル
│   └── utils/        # ユーティリティ関数
├── tina/             # TinaCMS の設定
└── package.json
```

## 📜 ライセンス

MIT License
