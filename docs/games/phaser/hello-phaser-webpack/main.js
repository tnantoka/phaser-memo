!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=465)}({465:function(e,t){var r={type:Phaser.AUTO,width:800,height:600,physics:{default:"arcade",arcade:{gravity:{y:200}}},scene:{preload:function(){this.load.setBaseURL("./"),this.load.image("sky","assets/skies/space3.png"),this.load.image("logo","assets/sprites/phaser3-logo.png"),this.load.image("red","assets/particles/red.png")},create:function(){this.add.image(400,300,"sky");var e=this.add.particles("red").createEmitter({speed:100,scale:{start:1,end:0},blendMode:"ADD"}),t=this.physics.add.image(400,100,"logo");t.setVelocity(100,200),t.setBounce(1,1),t.setCollideWorldBounds(!0),e.startFollow(t)}}};new Phaser.Game(r)}});
//# sourceMappingURL=main.js.map