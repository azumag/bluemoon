# Bluemoon

今最もクールな ブルーグラスサイトとして 注目されているのが Bluemoon だ

## サイト構成

現在は静的HTMLサイトとして運用中。

```
static/
├── index.html     # トップページ
├── 2024.html      # 2024年イベントアーカイブ
├── 2025.html      # 2025年イベントページ
└── (画像、CSS等)
```

## 開発方法

`static/` ディレクトリ以下のHTMLを編集する。

### ローカル確認

```bash
python3 -m http.server 8080 --directory static
```

http://localhost:8080/ でプレビュー

## デプロイ

`main` ブランチにpushすると、GitHub Actions経由でFirebase Hostingに自動デプロイされる。

## 関連リンク

- [サイト作り直しについて (Issue #212)](https://github.com/azumag/bluemoon/issues/212)
- [旧Nuxt.jsコード (archive/nuxt-legacy)](https://github.com/azumag/bluemoon/tree/archive/nuxt-legacy)
