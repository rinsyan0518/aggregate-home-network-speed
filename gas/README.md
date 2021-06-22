[![clasp](https://img.shields.io/badge/built%20with-clasp-4285f4.svg)](https://github.com/google/clasp)

# スプレッドシートに保存

## 設定

`make push` を実行する前に以下を必ず行ってください。2021/06/22 時点では `clasp deploy`しても webapp として公開されない。

### Web アプリケーションとしてデプロイ

- 次のユーザーとして実行：自分
- アクセスできるユーザー：全員

## .clasp.json

```json
{
  "scriptId": "${SCRIPT_ID}",
  "rootDir": "./src"
}
```

## 参考

- https://qiita.com/ume3003/items/cd9d05dff014952a73f8
