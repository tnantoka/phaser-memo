[Hello World!](../2018-12-03/)の書き方は古き良きJavaScriptという感じで、とりあえず試してみたい場合には手軽で良いです。

しかし、2018年も終わろうとしているこの時期、できればモダンなJSの記法を使っていきたいところです。
というわけでwebpackの登場です。

GitHubを検索するといろいろとボイラープレートがありました。

repo | 感想
--- | ---
<https://github.com/photonstorm/phaser3-project-template> | [公式サイトで紹介されている](https://phaser.io/phaser3/gettingstarted)もの。その割にはあまりメンテされていない
<https://github.com/simiancraft/create-phaser-app> | ボイラープレートとしてはでかい気がするが、ロボットを動かすゲームのサンプルが大変良い。
<https://github.com/snowbillr/phaser3-webpack-es6-dev-starter> | [ブログ](https://snowbillr.github.io/blog/2018-04-09-a-modern-web-development-setup-for-phaser-3/)で解説記事を書いてくれているのが良い。
<https://github.com/nkholski/phaser3-es6-webpack> | でかい。スター多い。サンプルがマリオなせいか？
<https://github.com/lean/phaser-es6-webpack/tree/phaser3> | Phaser 3時代からある老舗。スター的には圧倒的人気。

他の人がwebpack、この設定必要なの？とか結局試してしまって時間がかかるので、自分で最低限のボイラープレートを作ってみました。

<https://github.com/tnantoka/hello-phaser-webpack>

[webpackのGetting Started](https://webpack.js.org/guides/getting-started/)に従って設定を作成。
lintがないとコードを書く気がしないので、`yarn lint, yarn fix`でESLintを実行できるようにしています。

Phaserはグローバルに`Phaser`を追加するため`dist/index.html`から直接読むだけでもいいのですが、npmで管理したいのと、mapファイルを生成したかったので、webpackで処理しています。

以降はこのプロジェクトをテンプレートとして使っていきます。
