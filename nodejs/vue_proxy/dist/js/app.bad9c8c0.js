(function(){"use strict";var t={843:function(t,e,n){var r=n(144),i=function(){var t=this,e=t._self._c;return e("div",{staticStyle:{"margin-top":"20px","margin-left":"20px","margin-right":"20px"},attrs:{align:"center"}},[t._m(0),e("h3",[t._v("NFT 발행을 위해서는 다음의 단계를 거쳐야 한다.")]),e("h4",[t._v("1. 이미지 파일을 IPFS에 올려 해시 값을 얻어야 한다.")]),e("h4",[t._v("2. 해시 값이 이미 NFT로 발행되었는지 유효성 검사가 필요하다.")]),e("h4",[t._v("3. 유효성 검사가 끝난 해시 값은 ERC-721 토큰 발행시 사용한다.")]),e("div",{staticClass:"container"},[e("input",{staticClass:"upload-name",attrs:{type:"text",value:"이미지를 업로드 하세요",disabled:""}}),e("label",{attrs:{for:"upload-file"}},[t._v("파일선택")]),e("input",{ref:"image",attrs:{multiple:"",id:"upload-file",type:"file",accept:"image/*"},on:{change:function(e){return t.onInputImage()}}})]),e("h4",[t._v(t._s(t.text))]),e("div",[e("a",{attrs:{href:t.url,target:"_black"}},[t._v(t._s(t.cid))])]),t.cid?e("button",{on:{click:function(e){return t.copy()}}},[t._v(t._s(t.buttontext))]):t._e()])},o=[function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"main-text"}},[e("h2",{attrs:{id:"main-text-highlight"}},[t._v("NFT 발행하기")])])}],a=n(594),u={name:"App",created(){},data(){return{cid:"",url:"https://ipfs.io/ipfs/",text:"",buttontext:"해시 값 복사하기"}},create(){},methods:{onInputImage(){this.Callimage()},async Callimage(){const t=document.querySelector(".upload-name");t.value="해시 값 생성중";const e=this.$refs.image.files[0];let n=new FormData;n.append("image",e),console.log(n);const r=await a.Z.post("https://pz9ucukztk.execute-api.ap-northeast-1.amazonaws.com/default/image",n,{headers:{"Content-Type":"multipart/form-data;charset=utf8"}});console.log(r);const i=await a.Z.get("https://cy2i3m8fz0.execute-api.ap-northeast-2.amazonaws.com/test?"+r.data.cid);console.log(i),i.data?this.text="업로드한 이미지는 중복된 해시가 존재합니다.":this.text="해시값을 출력합니다.",this.cid=r.data.cid,this.url+=this.cid,t.value="해시 값 생성완료"},copy(){window.navigator.clipboard.writeText(this.cid),this.buttontext="복사 완료"},proxyRequest(){a.Z.get("/api/getList").then((t=>{console.log("proxyRequest res",t)})).catch((t=>{console.log("proxyRequest error",t)}))}}},c=u,s=n(1),l=(0,s.Z)(c,i,o,!1,null,null,null),p=l.exports;r.ZP.config.productionTip=!1,new r.ZP({render:t=>t(p)}).$mount("#app")}},e={};function n(r){var i=e[r];if(void 0!==i)return i.exports;var o=e[r]={exports:{}};return t[r](o,o.exports,n),o.exports}n.m=t,function(){var t=[];n.O=function(e,r,i,o){if(!r){var a=1/0;for(l=0;l<t.length;l++){r=t[l][0],i=t[l][1],o=t[l][2];for(var u=!0,c=0;c<r.length;c++)(!1&o||a>=o)&&Object.keys(n.O).every((function(t){return n.O[t](r[c])}))?r.splice(c--,1):(u=!1,o<a&&(a=o));if(u){t.splice(l--,1);var s=i();void 0!==s&&(e=s)}}return e}o=o||0;for(var l=t.length;l>0&&t[l-1][2]>o;l--)t[l]=t[l-1];t[l]=[r,i,o]}}(),function(){n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,r){var i,o,a=r[0],u=r[1],c=r[2],s=0;if(a.some((function(e){return 0!==t[e]}))){for(i in u)n.o(u,i)&&(n.m[i]=u[i]);if(c)var l=c(n)}for(e&&e(r);s<a.length;s++)o=a[s],n.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return n.O(l)},r=self["webpackChunkvue_proxy"]=self["webpackChunkvue_proxy"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(843)}));r=n.O(r)})();
//# sourceMappingURL=app.bad9c8c0.js.map