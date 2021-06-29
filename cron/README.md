# データを取得し、GAS に POST する

## セットアップ

### 必要なパッケージのインストール

```bash
$ make setup
```

### 設定ファイル

`.env.example` を `.env` としてコピーし、必要な項目を埋めてください

### cron の設定

毎事 36 分毎にスクリプトが実行されるようにする（時間はお好きなタイミングで）

```
# piユーザーで行う
$ crontab -e

36 * * * * /home/pi/aggregate-home-network-speed/cron/speedtest.sh > /home/pi/myjob.log 2>&1
```

## 備考

グラフにする場合は 125000 で割って Mbps で表示するようにしたほうがいいかもしれない

## 参考

- https://zenn.dev/tomioka/articles/497077a2a4688e
- https://www.speedtest.net/ja/apps/cli
