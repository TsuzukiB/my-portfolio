(function(t){function e(e){for(var n,a,s=e[0],c=e[1],u=e[2],l=0,p=[];l<s.length;l++)a=s[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&p.push(o[a][0]),o[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);h&&h(e);while(p.length)p.shift()();return i.push.apply(i,u||[]),r()}function r(){for(var t,e=0;e<i.length;e++){for(var r=i[e],n=!0,a=1;a<r.length;a++){var s=r[a];0!==o[s]&&(n=!1)}n&&(i.splice(e--,1),t=c(c.s=r[0]))}return t}var n={},a={app:0},o={app:0},i=[];function s(t){return c.p+"js/"+({}[t]||t)+".js"}function c(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.e=function(t){var e=[],r={"chunk-5b430069":1,"chunk-e679e778":1};a[t]?e.push(a[t]):0!==a[t]&&r[t]&&e.push(a[t]=new Promise((function(e,r){for(var n="css/"+({}[t]||t)+".css",o=c.p+n,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var u=i[s],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===n||l===o))return e()}var p=document.getElementsByTagName("style");for(s=0;s<p.length;s++){u=p[s],l=u.getAttribute("data-href");if(l===n||l===o)return e()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=e,h.onerror=function(e){var n=e&&e.target&&e.target.src||o,i=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=n,delete a[t],h.parentNode.removeChild(h),r(i)},h.href=o;var d=document.getElementsByTagName("head")[0];d.appendChild(h)})).then((function(){a[t]=0})));var n=o[t];if(0!==n)if(n)e.push(n[2]);else{var i=new Promise((function(e,r){n=o[t]=[e,r]}));e.push(n[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=s(t);var p=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(h);var r=o[t];if(0!==r){if(r){var n=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;p.message="Loading chunk "+t+" failed.\n("+n+": "+a+")",p.name="ChunkLoadError",p.type=n,p.request=a,r[1](p)}o[t]=void 0}};var h=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},c.m=t,c.c=n,c.d=function(t,e,r){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(r,n,function(e){return t[e]}.bind(null,n));return r},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="",c.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var p=0;p<u.length;p++)e(u[p]);var h=l;i.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"0b34":function(t,e,r){t.exports=r.p+"img/clock_second_hand.svg"},"16f8":function(t,e,r){t.exports=r.p+"img/clock_hour_hand.svg"},"1d33":function(t,e,r){t.exports=r.p+"img/MonoGames.png"},"20a9":function(t,e,r){t.exports=r.p+"img/works.svg"},"2fc1":function(t,e,r){t.exports=r.p+"img/evening.svg"},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",[r("v-app-bar",{attrs:{app:""},scopedSlots:t._u([{key:"extension",fn:function(){return[r("v-tabs",{class:t.useDisplaySP?"justify-center":"",attrs:{centered:!t.useDisplaySP,vertical:t.useDisplaySP,"hide-slider":t.useDisplaySP},model:{value:t.tabModel,callback:function(e){t.tabModel=e},expression:"tabModel"}},t._l(t.tabContents,(function(e,n){return r("v-tab",{key:e.tabName,on:{click:function(r){return t.changeComponents(e.componentPath,n)}}},[t._v(" "+t._s(e.tabName)+" ")])})),1)]},proxy:!0}])},[r("v-spacer"),r("v-toolbar-title",{staticClass:"headline text-uppercase"},[t._v(" S.T PortFolio Site ")]),r("v-spacer")],1),r("v-content",{staticClass:"align-center d-flex"},[r("v-container",[r("router-view",{attrs:{displaySP:t.useDisplaySP}})],1)],1),r("v-footer",{attrs:{dark:""}},[r("v-card",{attrs:{width:"100%",color:"transparent",flat:""}},[r("v-card-text",{staticClass:"text-center"},[t._v(" Copyrigth © S.T PortFolio Site, "),t.useDisplaySP?r("br"):t._e(),t._v("All Rights Reserved. ")])],1)],1)],1)},o=[],i=(r("fb6a"),r("ac1f"),r("1276"),{name:"App",data:function(){return{tabModel:"",tabContents:[{tabName:"Home",componentPath:"/"},{tabName:"Made Contents",componentPath:"/contents"},{tabName:"About Me",componentPath:"/about"}]}},computed:{useDisplaySP:function(){var t=window.innerWidth<=768;return t}},created:function(){this.firstTabModel()},methods:{changeComponents:function(t,e){this.tabModel!=e&&this.$router.push(t)},firstTabModel:function(){var t=window.location.href,e=t.split("/").slice(-1)[0];switch(e){case"contents":this.tabModel=1;break;case"about":this.tabModel=2;break;default:this.tabModel=0}}}}),s=i,c=r("2877"),u=r("6544"),l=r.n(u),p=r("7496"),h=r("40dc"),d=r("b0af"),f=r("99d9"),m=r("a523"),g=r("a75b"),v=r("553a"),b=r("2fa4"),y=r("71a3"),S=r("fe57"),k=r("2a7f"),w=Object(c["a"])(s,a,o,!1,null,null,null),x=w.exports;l()(w,{VApp:p["a"],VAppBar:h["a"],VCard:d["a"],VCardText:f["a"],VContainer:m["a"],VContent:g["a"],VFooter:v["a"],VSpacer:b["a"],VTab:y["a"],VTabs:S["a"],VToolbarTitle:k["a"]});r("d3b7");var C=r("8c4f"),P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",{staticClass:"home",class:t.displaySP?"flex-column":"",attrs:{"justify-center":""}},[n("v-flex",{staticClass:"home-flex-min-width"},[n("v-card",{staticClass:"clock pa-2 mx-auto",attrs:{"max-width":"650"}},[n("img",{staticClass:"clock-face",attrs:{src:r("c739")}}),n("img",{staticClass:"clock-second-hand",attrs:{src:r("0b34")}}),n("img",{staticClass:"clock-minute-hand",attrs:{src:r("a54f")}}),n("img",{staticClass:"clock-hour-hand",attrs:{src:r("16f8")}})])],1),n("v-flex",[n("v-card",{staticClass:"fill-height d-flex flex-column justify-space-around carousel",class:t.displaySP?"mt-3":"ml-3"},[n("v-card-title",{staticClass:"justify-center mb-5"},[t._v(" What are you doing ? ")]),n("v-card-text",[n("img",{staticClass:"carousel-image",attrs:{src:t.thisTimeImg}})])],1)],1)],1)},T=[],_=(r("0d03"),{name:"home",props:{displaySP:Boolean},data:function(){return{time:new Date,carouselImages:{morning:r("b265"),works:r("20a9"),lunch:r("c757"),goHome:r("f7f7"),evening:r("2fc1"),night:r("861f")}}},computed:{hour:function(){return this.time.getHours()},minute:function(){return this.time.getMinutes()},second:function(){return this.time.getSeconds()},thisTimeImg:function(){var t="";return 6<=this.hour&&this.hour<9?t=this.carouselImages.morning:9<=this.hour&&this.hour<12||13<=this.hour&&this.hour<18?t=this.carouselImages.works:12<=this.hour&&this.hour<13?t=this.carouselImages.lunch:18<=this.hour&&this.hour<20?t=this.carouselImages.goHome:20<=this.hour&&this.hour<23?t=this.carouselImages.evening:(0<=this.hour&&this.hour<6||23<=this.hour)&&(t=this.carouselImages.night),t}},mounted:function(){this.refresh()},methods:{clockWalk:function(){var t=document.querySelector(".clock-second-hand"),e=document.querySelector(".clock-minute-hand"),r=document.querySelector(".clock-hour-hand");t.style.transform="rotate("+6*this.second+"deg)",e.style.transform="rotate("+6*this.minute+"deg)",r.style.transform="rotate("+30*this.hour+"deg)"},refresh:function(){var t=this;t.time=new Date,document.querySelector(".home")&&(t.clockWalk(),setTimeout((function(){t.refresh()}),1e3))}}}),M=_,j=(r("921d"),r("0e8f")),O=r("a722"),D=Object(c["a"])(M,P,T,!1,null,"fcbe2970",null),L=D.exports;l()(D,{VCard:d["a"],VCardText:f["a"],VCardTitle:f["b"],VFlex:j["a"],VLayout:O["a"]}),n["a"].use(C["a"]);var V=[{path:"/",name:"home",component:L},{path:"/about",name:"about",component:function(){return r.e("chunk-e679e778").then(r.bind(null,"59e7"))}},{path:"/contents",name:"contents",component:function(){return r.e("chunk-5b430069").then(r.bind(null,"e934"))}}],H=new C["a"]({base:"",routes:V}),E=H,I=r("2f62");n["a"].use(I["a"]);var J=new I["a"].Store({state:{siteList:[{id:1,title:"Chiba Peanut",imgsrc:r("a7ad"),url:"http://chibapeanut.webcrow.jp/",days:"5日",count:"1名",target:"10~20代の若年層",skill:"Brackets HTML5 CSS",description:"・HOMEおよびCOMMODITIESのページのみ作成。<br>・サイトイメージを表すキャラクターを自作し使用している。<br>・開閉タブを使用し、見るだけでなく操作性を導入。<br>・リンクにtitle属性を使用し、サイト間の移動をわかりやすく考慮した。"},{id:2,title:"Cafe de PetiteLumière",imgsrc:r("5f85"),url:"http://plumiere.wpblog.jp/",days:"6日",count:"1名",target:"10~30代までの女学生及び主婦層",skill:"Dreamweaver HTML5 CSS JavaScript jQuery",description:"・JQueryプラグインによる画像の切り替え及び、モーダルウィンドウの実装を行う。<br>・ドロワーメニューをJQueryを使用し自作。<br>・レスポンシブ対応を実装。"},{id:3,title:"コーポレートサイト",imgsrc:r("a5cb"),url:"http://hheart.jp/",days:"4か月",count:"1名",target:"指定なし",skill:"Wordpress Dreamweaver HTML5 SCSS JavaScript PHP",description:"・デザイナーよりデザインと要望を受け取り、出来る限り要望に沿うようコーディングを実施。<br>・レスポンシブ画面や顧客要望からのデザイン変更などはこちら側で考え対応する。<br>(掲載許可は頂いております。)"},{id:4,title:"北海道 Going!!",imgsrc:r("cc99"),url:"http://hokkaigoing.webcrow.jp/",days:"5日間",count:"4名",target:"40~60代の旅行を趣味とする層",skill:"Dreamweaver HTML5 CSS jQuery",description:"・宿泊施設紹介およびグルメ案内のページを担当し作成。<br>・JQueryプラグインによる画像の切り替え及び、モーダルウィンドウの実装。<br>・LanguageメニューをJQueryを使用し自作。<br>・JQueryプラグインをグループ内で導入しやすいよう一部改変。"},{id:5,title:"MONO Games",imgsrc:r("1d33"),url:"http://monogames.webcrow.jp/index.html",days:"1か月",count:"1名",target:"20代~30代のドット絵のゲームに馴染みある世代",skill:"Dreamweaver HTML5 CSS JavaScript",description:"・自作したキャラクターをJavaScriptでページ内を動くよう実装。<br>・JavaScriptでミニゲームを作成し、HTML5のキャンバス要素で表示。"}]},mutations:{},actions:{},modules:{}}),A=r("f309");n["a"].use(A["a"]);var N=new A["a"]({icons:{iconfont:"mdi"}});n["a"].config.productionTip=!1,new n["a"]({router:E,store:J,vuetify:N,render:function(t){return t(x)}}).$mount("#app")},"5f85":function(t,e,r){t.exports=r.p+"img/PetiteLumière.png"},"861f":function(t,e,r){t.exports=r.p+"img/night.svg"},"921d":function(t,e,r){"use strict";var n=r("e2d9"),a=r.n(n);a.a},a54f:function(t,e,r){t.exports=r.p+"img/clock_minute_hand.svg"},a5cb:function(t,e,r){t.exports=r.p+"img/hheart.png"},a7ad:function(t,e,r){t.exports=r.p+"img/ChibaPeanut.png"},b265:function(t,e,r){t.exports=r.p+"img/morning.svg"},c739:function(t,e,r){t.exports=r.p+"img/clock_dial.svg"},c757:function(t,e,r){t.exports=r.p+"img/lunch.svg"},cc99:function(t,e,r){t.exports=r.p+"img/HokkaidoGoing.png"},e2d9:function(t,e,r){},f7f7:function(t,e,r){t.exports=r.p+"img/goHome.svg"}});