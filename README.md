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
static/          # 旧サイトのフォールバック(Firebase Hosting配信元、Epic4完了まで維持)
```

本番はCloudflare Workers Static AssetsのWorker `bluemoon`から、`src/`のAstroビルド成果物(`dist/`)を配信します。Firebase Hostingと`static/`はFirestoreデータ移行(Epic4)が完了するまでフォールバック用に残します。

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

### Cloudflare本番

`main`ブランチにpushすると、`.github/workflows/main.yml`が次の順で実行され、Cloudflare Workersの`bluemoon`へデプロイします。

```text
npm ci → npm run check → npm run build → wrangler deploy
```

初回だけ、GitHubリポジトリのActions Secretに`CLOUDFLARE_API_TOKEN`を登録してください。CloudflareダッシュボードでAccount → Workers Scripts → Editだけを許可したAPIトークンを作成し、値をGitHubのSettings → Secrets and variables → Actionsに保存します。アカウントIDは`wrangler.toml`の`account_id`を使用します。

ローカルからデプロイする場合は、Cloudflare OAuthログイン済みの環境で次を実行します。

```bash
npm ci
npm run check
npm run build
wrangler deploy
```

### Pull Requestプレビュー

Pull Requestを作成または更新すると、`.github/workflows/pr-preview.yml`がPR番号ごとに`bluemoon-pr-<番号>`というWorkerを作成し、workers.devのプレビューURLをPRへコメントします。PRをクローズすると、そのプレビューWorkerを削除します。

Firebase Hostingのプレビューは使用しませんが、Firebase関連設定と`static/`はフォールバック用に保持します。

## 関連リンク

- [新システム構想 設計ドキュメント (Issue #212)](https://github.com/azumag/bluemoon/issues/212)
- [Cloudflare移行 (Issue #263)](https://github.com/azumag/bluemoon/issues/263)
- [Workers Static Assets移行PR #279](https://github.com/azumag/bluemoon/pull/279)
- [本番Worker](https://bluemoon.tsubasa-azumagakito.workers.dev)
- [旧Nuxt.jsコード (archive/nuxt-legacy)](https://github.com/azumag/bluemoon/tree/archive/nuxt-legacy)
