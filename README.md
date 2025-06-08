# Bluemoon
今最もクールな ブルーグラスサイトとして 注目されているのが Bluemoon だ

## 開発方法
お知らせ用に`static`ディレクトリ以下のhtmlを編集する。

詳細については以下のIssueを参照してください：
https://github.com/azumag/bluemoon/issues/212

## Run with docker-compose
### for local development
setup
```
docker-compose build dev
```

<!-- ```
docker-compose up dev firebase-emulator
``` -->

### lint fix
```
docker-compose run --rm yarn
```

### code-server editor
```
docker-compose up editor
```
then access http://localhost:283

# deploy
```
docker-compose run --rm yarn yarn build
firebase deploy
```
