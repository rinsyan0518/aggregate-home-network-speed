# データを取得し、GASにPOSTする

## セットアップ

```bash
# 必要なパッケージの取得
$ make setup
```

30分毎にスクリプトが実行されるようにする

```
$ crontab -e

*/30 * * * * /home/pi/aggregate-home-network-speed/cron/speedtest.sh
```

## 備考

グラフにする場合は 125000 で割ってMbpsで表示するようにしたほうがいいかもしれない

## 参考

* https://zenn.dev/tomioka/articles/497077a2a4688e
* https://www.speedtest.net/ja/apps/cli
