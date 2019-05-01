[Phaser](https://github.com/photonstorm/phaser)はJavaScript・HTML5でゲームを作成するためのフレームワークです。

GitHubの[JavaScript Game Engines](https://github.com/collections/javascript-game-engines)によると、[PixiJS](https://github.com/pixijs/pixi.js)と並んで2万以上のスターを獲得しており圧倒的な人気を誇っているようです。

Phaserはバージョン2もメンテが継続されており、公式サイトでも情報が入り混じっている状態ですが、このアドベントカレンダーではバージョン3のみを対象とします。

初回はおなじみHello World!です。

公式サイトのチュートリアル「Getting Started with Phaser 3」の[Part 5](https://phaser.io/tutorials/getting-started-phaser3/part5)に「Hello World!」があるので、そのままコピペして`index.html`としてどこか適当なディレクトリに保存します。

公式のソースコードはインデントが4つで少し気になったので、2つに変換したものを以下に置いておきます。

```
<!DOCTYPE html>
<html>
<head>
  <script src="https://cdn.jsdelivr.net/npm/phaser@3.15.1/dist/phaser-arcade-physics.min.js"></script>
</head>
<body>

  <script>
  var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
      default: 'arcade',
      arcade: {
        gravity: { y: 200 }
      }
    },
    scene: {
      preload: preload,
      create: create
    }
  };

  var game = new Phaser.Game(config);

  function preload ()
  {
    this.load.setBaseURL('http://labs.phaser.io');

    this.load.image('sky', 'assets/skies/space3.png');
    this.load.image('logo', 'assets/sprites/phaser3-logo.png');
    this.load.image('red', 'assets/particles/red.png');
  }

  function create ()
  {
    this.add.image(400, 300, 'sky');

    var particles = this.add.particles('red');

    var emitter = particles.createEmitter({
      speed: 100,
      scale: { start: 1, end: 0 },
      blendMode: 'ADD'
    });

    var logo = this.physics.add.image(400, 100, 'logo');

    logo.setVelocity(100, 200);
    logo.setBounce(1, 1);
    logo.setCollideWorldBounds(true);

    emitter.startFollow(logo);
  }
  </script>

</body>
</html>
```

保存したHTMLをブラウザで開けば、Phaserのロゴがパーティクルと共に動き回るゲームが見れるはずです。

![](hello-phaser.gif)

このソースコードでは画像をPhaserのサイトから取ってきているのでHTMLファイルを直接開いても動きますが、PhaserのゲームはHTTPサーバー上で動かすことが想定されています。

MacやLinuxであれば以下のようなコマンドでサーバーを起動することができます。

```
$ python -m http.server 8080
$ php -S localhost:8080
$ ruby -run -e httpd . -p 8080
```

また、このサイトにも設置しているので、[こちらのリンク](./hello-world/)からも動かすことができます。

Hello World!は以上です。  
コードの中身については今後のカレンダーを読み進めていただければ理解できるようになるはずです！
