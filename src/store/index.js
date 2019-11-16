import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    siteList: [
      {
        id: 1,
        title: 'Chiba Peanut',
        imgsrc: require('@/assets/ChibaPeanut.png'),
        url: 'http://chibapeanut.webcrow.jp/',
        days: '5日',
        count: '1名',
        target: '10~20代の若年層',
        skill: 'Brackets HTML5 CSS',
        description:
          '・HOMEおよびCOMMODITIESのページのみ作成。<br>・サイトイメージを表すキャラクターを自作し使用している。<br>・開閉タブを使用し、見るだけでなく操作性を導入。<br>・リンクにtitle属性を使用し、サイト間の移動をわかりやすく考慮した。'
      },
      {
        id: 2,
        title: 'Cafe de PetiteLumière',
        imgsrc: require('@/assets/PetiteLumière.png'),
        url: 'http://plumiere.wpblog.jp/',
        days: '6日',
        count: '1名',
        target: '10~30代までの女学生及び主婦層',
        skill: 'Dreamweaver HTML5 CSS JavaScript jQuery',
        description:
          '・JQueryプラグインによる画像の切り替え及び、モーダルウィンドウの実装を行う。<br>・ドロワーメニューをJQueryを使用し自作。<br>・レスポンシブ対応を実装。'
      },
      {
        id: 3,
        title: 'コーポレートサイト',
        imgsrc: require('@/assets/hheart.png'),
        url: 'http://hheart.jp/',
        days: '4か月',
        count: '1名',
        target: '指定なし',
        skill: 'Wordpress Dreamweaver HTML5 SCSS JavaScript PHP',
        description:
          '・デザイナーよりデザインと要望を受け取り、出来る限り要望に沿うようコーディングを実施。<br>・レスポンシブ画面や顧客要望からのデザイン変更などはこちら側で考え対応する。<br>(掲載許可は頂いております。)'
      },
      {
        id: 4,
        title: '北海道 Going!!',
        imgsrc: require('@/assets/HokkaidoGoing.png'),
        url: 'http://hokkaigoing.webcrow.jp/',
        days: '5日間',
        count: '4名',
        target: '40~60代の旅行を趣味とする層',
        skill: 'Dreamweaver HTML5 CSS jQuery',
        description:
          '・宿泊施設紹介およびグルメ案内のページを担当し作成。<br>・JQueryプラグインによる画像の切り替え及び、モーダルウィンドウの実装。<br>・LanguageメニューをJQueryを使用し自作。<br>・JQueryプラグインをグループ内で導入しやすいよう一部改変。'
      },
      {
        id: 5,
        title: 'MONO Games',
        imgsrc: require('@/assets/MonoGames.png'),
        url: 'http://monogames.webcrow.jp/index.html',
        days: '1か月',
        count: '1名',
        target: '20代~30代のドット絵のゲームに馴染みある世代',
        skill: 'Dreamweaver HTML5 CSS JavaScript',
        description:
          '・自作したキャラクターをJavaScriptでページ内を動くよう実装。<br>・JavaScriptでミニゲームを作成し、HTML5のキャンバス要素で表示。'
      }
    ]
  },
  mutations: {},
  actions: {},
  modules: {}
})
