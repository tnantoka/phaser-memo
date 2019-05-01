さて、Phaserを使うとどのようなゲームが作れるのでしょうか。

まずは公式のサンプルが以下のサイトにあります。

<http://labs.phaser.io/index.html?dir=games/&q=>

このサイトはライブエディターが付いているのでブラウザ上でいじりながら試すことができます。
また、ソースコードはGitHub上にも置いてあります。

<https://github.com/photonstorm/phaser3-examples/tree/master/public/src/games>

いろいろ用意されていますが、Phaser 3への対応がまだ終わっておらず、動かないものも多いです。

名前 | 概要
--- | ---
kout | ブロック崩し
Cannon | 対応を打つゲーム？（エラーで動かない）
Defenda | 仮面を打つシューティングゲーム？（当たり判定が動いていないっぽい）
Firstgame | 「Making your first Phaser 3 game」で作るゲーム
Flood | https://play.google.com/store/apps/details?id=com.labpixies.flood こういうパズルゲーム
Mass Attack | 長押しで大きさの違う玉を作ってバランスを取るゲーム？元ネタわからず。
Multi | スペースインベーダー。マルチ？
Pacman | パックマンと思われる（動かない）
Snake | スネークゲーム
TopdownShooter | トップダウンシューティング。うまく動いてないっぽい。

公式以外にも、GitHubで「Phaser 3」と検索すればいろいろ出てきます。

repo | 概要
--- | ---
<https://github.com/pierpo/phaser3-simple-rpg> | ゼルダや聖剣伝説みたいなサンプル
<https://github.com/IKStreamIvo/Bubble-Bobble-Clone> | バブルボブル
<https://github.com/taliove/phaser3-flappy-bird> | Flappy Bird
<https://github.com/mikebrucker/Tower-Defense> | タワーディフェンス
<https://github.com/rblopes/phaser-3-snake-game> | スネークゲーム

また（残念ながらPhasre 2ですが）Mozillaの[BrowserQuest](https://github.com/mozilla/BrowserQuest)を移植した力作もあります。

Herokuにアップされているので触ってみることができます。

<https://phaserquest.herokuapp.com/>

また、Docker for Macなどがインストールされていれば、ローカルでも簡単に動かすことができます。

## 起動

```
$ git clone git@github.com:Jerenaux/phaserquest.git
$ cd phaserquest/
$ docker-compose build
$ docker-compose up -d
$ open http://localhost/
```

こんな感じでプレイできます。

![](phaserquest.gif)

## 終了

```
$ docker-compose down
```

このレベルのものが作れれば、少なくとも個人で開発する分には困ることはないでしょう。
