# Bluemoon

今最もクールな ブルーグラスサイトとして 注目されているのが Bluemoon だ

## サイト構成

新システム構想(#212)に基づき、Astro + Content Collectionsで構築中。

```
src/
├── pages/
│   ├── index.astro       # トップページ
│   └── events/[slug].astro  # 年度イベントページ(コンテンツコレクションから生成)
├── content/events/        # 年度ごとのイベント内容(Markdown/MDX)
├── layouts/                # BaseLayout / EventLayout
├── components/              # SiteNav, InfoCard, ScheduleTable 等
├── assets/                  # ビルド時最適化される画像
└── styles/global.css

public/          # そのまま配信される静的ファイル(favicon等)
static/          # 現行の本番サイト(Firebase Hosting配信元、移行完了まで維持)
```

本番の実配信は現時点でもまだ `static/` 配下のHTMLです(Cloudflare移行 #263/#264 完了までの間、`main`ブランチへのpushは引き続き`static/`をFirebase Hostingへデプロイします)。`src/`配下のAstroサイトはこのブランチ上で開発中の新システムで、mainへのデプロイにはまだ組み込まれていません。

## 開発方法

### 新システム(Astro)

```bash
npm install
npm run dev       # http://localhost:4321 でプレビュー
npm run check     # 型・テンプレートチェック
npm run build     # dist/ に静的ビルド
npm run preview   # ビルド結果をローカルで確認
```

新しい年度イベントページを追加する場合は `src/content/events/` に `.mdx` ファイルを1つ追加するだけで `/events/<slug>` に自動生成されます。

### 現行サイト(static/)

```bash
python3 -m http.server 8080 --directory static
```

http://localhost:8080/ でプレビュー

## デプロイ

`main` ブランチにpushすると、GitHub Actions経由で `static/` がFirebase Hostingに自動デプロイされる(`.github/workflows/main.yml`)。

Pull Request作成時には、Astroビルドの型チェック・ビルド検証を行い、Firebase Hostingのプレビューチャンネルへデプロイしてプレビュー用URLをPRにコメントする(`.github/workflows/pr-preview.yml`)。

## 関連リンク

- [新システム構想 設計ドキュメント (Issue #212)](https://github.com/azumag/bluemoon/issues/212)
- [旧Nuxt.jsコード (archive/nuxt-legacy)](https://github.com/azumag/bluemoon/tree/archive/nuxt-legacy)
