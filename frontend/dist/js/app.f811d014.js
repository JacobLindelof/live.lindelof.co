(function(t){function e(e){for(var a,o,i=e[0],l=e[1],u=e[2],c=0,m=[];c<i.length;c++)o=i[c],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&m.push(r[o][0]),r[o]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);h&&h(e);while(m.length)m.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],a=!0,o=1;o<n.length;o++){var l=n[o];0!==r[l]&&(a=!1)}a&&(s.splice(e--,1),t=i(i.s=n[0]))}return t}var a={},r={app:0},s=[];function o(t){return i.p+"js/"+({about:"about"}[t]||t)+"."+{about:"60380698"}[t]+".js"}function i(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(t){var e=[],n=r[t];if(0!==n)if(n)e.push(n[2]);else{var a=new Promise((function(e,a){n=r[t]=[e,a]}));e.push(n[2]=a);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=o(t);var u=new Error;s=function(e){l.onerror=l.onload=null,clearTimeout(c);var n=r[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),s=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+a+": "+s+")",u.name="ChunkLoadError",u.type=a,u.request=s,n[1](u)}r[t]=void 0}};var c=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(e)},i.m=t,i.c=a,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var h=u;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"4dd7":function(t,e,n){t.exports=n.p+"img/taystone.80925bd7.png"},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{attrs:{id:"inspire"}},[a("v-app-bar",{attrs:{app:"","clipped-right":"","clipped-left":""}},[a("v-img",{staticClass:"mx-2",attrs:{src:n("4dd7"),"max-height":"40","max-width":"40",contain:""}}),a("router-link",{attrs:{to:"/"}},[a("v-toolbar-title",[t._v("TayStone.TV")])],1),a("v-spacer"),a("v-text-field",{attrs:{dense:"",label:"Username"},model:{value:t.myUsername,callback:function(e){t.myUsername=e},expression:"myUsername"}})],1),a("v-navigation-drawer",{attrs:{app:"",clipped:""}},[a("ChannelList")],1),a("v-main",[a("router-view")],1),this.currentChannel?a("v-navigation-drawer",{attrs:{app:"",clipped:"",right:"",width:"20rem"}},[a("Chat")],1):t._e()],1)},s=[],o=n("5530"),i=n("2f62"),l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-list",{attrs:{dense:""}},t._l(t.channels,(function(e){return n("v-list-item",{key:e.username,attrs:{to:{name:"Channel",params:{username:e.username}}}},[n("v-list-item-avatar",{attrs:{color:"primary"}},[t._v(t._s(t.getChannelAbbreviation(e.username)))]),n("v-list-item-content",[n("v-list-item-title",[t._v(t._s(e.username))]),e.is_live?n("v-list-item-subtitle",[t._v("🔴 Live")]):n("v-list-item-subtitle",[t._v("Offline")])],1)],1)})),1)},u=[],c=(n("ac1f"),n("a1f0"),n("1276"),n("2909")),h={name:"ChannelList",methods:Object(o["a"])({getChannelAbbreviation:function(t){var e=/([A-Z])/g,n=Object(c["a"])(t.matchAll(e));if(t.split(" ").length>1){var a=t.split(" "),r=a[0][0]+a[a.length-1][0];return r}if(2===n.length)return n[0][0]+n[1][0];var s=t[0];return s}},Object(i["b"])(["setCurrentChannel"])),computed:{channels:function(){return this.$store.state.channels}}},m=h,f=n("2877"),p=n("6544"),d=n.n(p),v=n("8860"),g=n("da13"),b=n("8270"),C=n("5d23"),y=Object(f["a"])(m,l,u,!1,null,null,null),x=y.exports;d()(y,{VList:v["a"],VListItem:g["a"],VListItemAvatar:b["a"],VListItemContent:C["a"],VListItemSubtitle:C["b"],VListItemTitle:C["c"]});var _=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",{attrs:{column:"","fill-height":""}},[n("v-list",t._l(t.messages,(function(e,a){return n("v-list-item",{key:a,attrs:{dense:""}},[n("v-item-text",[n("strong",[t._v(t._s(e.username)+":")]),t._v(" "+t._s(e.message))])],1)})),1),n("form",{on:{submit:function(e){return e.preventDefault(),t.sendMessage(e)}}},[n("v-text-field",{attrs:{flat:"",exact:"",icon:""},model:{value:t.message,callback:function(e){t.message=e},expression:"message"}})],1)],1)},w=[],j={name:"Chat",data:function(){return{message:null,messages:[],currentChatChannel:null}},computed:{currentChannel:function(){return this.$store.state.currentChannelInfo}},methods:{reloadChat:function(){this.messages=[],null!=this.currentChatChannel&&this.$socket.emit("leave",{room:this.currentChatChannel}),this.currentChatChannel=this.currentChannel.username,this.$socket.emit("join",{room:this.currentChatChannel})},sendMessage:function(){this.$socket.emit("chatMessage",{username:this.$store.state.myUsername,message:this.message,room:this.currentChatChannel}),this.message=null}},watch:{currentChannel:function(){this.reloadChat()}},sockets:{connect:function(){},newChatMessage:function(t){t.room===this.currentChatChannel&&this.messages.push(t),console.log(t)}}},k=j,V=n("a722"),O=n("8654"),I=Object(f["a"])(k,_,w,!1,null,null,null),A=I.exports;d()(I,{VLayout:V["a"],VList:v["a"],VListItem:g["a"],VTextField:O["a"]});var L={name:"App",components:{ChannelList:x,Chat:A},computed:{myUsername:{get:function(){return this.$store.state.myUsername},set:function(t){this.$store.commit("setUsername",t)}},currentChannel:function(){return this.$store.state.currentChannel}},methods:Object(o["a"])({},Object(i["b"])(["getChannelsAndUpdate"])),created:function(){this.getChannelsAndUpdate(),this.timer=setInterval(this.getChannelsAndUpdate,3e3)},beforeDestroy:function(){clearInterval(this.timer)},data:function(){return{timer:""}}},$=L,U=n("7496"),T=n("40dc"),E=n("adda"),M=n("f6c4"),S=n("f774"),P=n("2fa4"),W=n("2a7f"),D=Object(f["a"])($,r,s,!1,null,null,null),H=D.exports;d()(D,{VApp:U["a"],VAppBar:T["a"],VImg:E["a"],VMain:M["a"],VNavigationDrawer:S["a"],VSpacer:P["a"],VTextField:O["a"],VToolbarTitle:W["a"]});n("d3b7");var R=n("8c4f"),q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},F=[],N=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-row",{staticClass:"text-center"},[a("v-col",{attrs:{cols:"12"}},[a("v-img",{staticClass:"my-3",attrs:{src:n("9b19"),contain:"",height:"200"}})],1),a("v-col",{staticClass:"mb-4"},[a("h1",{staticClass:"display-2 font-weight-bold mb-3"},[t._v(" Welcome to Vuetify ")]),a("p",{staticClass:"subheading font-weight-regular"},[t._v(" For help and collaboration with other Vuetify developers, "),a("br"),t._v("please join our online "),a("a",{attrs:{href:"https://community.vuetifyjs.com",target:"_blank"}},[t._v("Discord Community")])])]),a("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[a("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" What's next? ")]),a("v-row",{attrs:{justify:"center"}},t._l(t.whatsNext,(function(e,n){return a("a",{key:n,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1),a("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[a("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" Important Links ")]),a("v-row",{attrs:{justify:"center"}},t._l(t.importantLinks,(function(e,n){return a("a",{key:n,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1),a("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[a("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" Ecosystem ")]),a("v-row",{attrs:{justify:"center"}},t._l(t.ecosystem,(function(e,n){return a("a",{key:n,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1)],1)],1)},J=[],B={name:"HelloWorld",data:function(){return{ecosystem:[{text:"vuetify-loader",href:"https://github.com/vuetifyjs/vuetify-loader"},{text:"github",href:"https://github.com/vuetifyjs/vuetify"},{text:"awesome-vuetify",href:"https://github.com/vuetifyjs/awesome-vuetify"}],importantLinks:[{text:"Documentation",href:"https://vuetifyjs.com"},{text:"Chat",href:"https://community.vuetifyjs.com"},{text:"Made with Vuetify",href:"https://madewithvuejs.com/vuetify"},{text:"Twitter",href:"https://twitter.com/vuetifyjs"},{text:"Articles",href:"https://medium.com/vuetify"}],whatsNext:[{text:"Explore components",href:"https://vuetifyjs.com/components/api-explorer"},{text:"Select a layout",href:"https://vuetifyjs.com/getting-started/pre-made-layouts"},{text:"Frequently Asked Questions",href:"https://vuetifyjs.com/getting-started/frequently-asked-questions"}]}}},Q=B,Y=n("62ad"),Z=n("a523"),z=n("0fd9"),G=Object(f["a"])(Q,N,J,!1,null,null,null),K=G.exports;d()(G,{VCol:Y["a"],VContainer:Z["a"],VImg:E["a"],VRow:z["a"]});var X={name:"Home",components:{HelloWorld:K},mounted:function(){this.$store.commit("setCurrentChannel",null)}},tt=X,et=Object(f["a"])(tt,q,F,!1,null,null,null),nt=et.exports;a["a"].use(R["a"]);var at=[{path:"/",name:"Home",component:nt},{path:"/:username",name:"Channel",props:!0,component:function(){return n.e("about").then(n.bind(null,"92d6"))}}],rt=new R["a"]({routes:at,mode:"history",linkActiveClass:"",linkExactActiveClass:""}),st=rt,ot=n("f309");a["a"].use(ot["a"]);var it=new ot["a"]({theme:{dark:!0}}),lt=(n("96cf"),n("1da1"));a["a"].use(i["a"]);var ut=new i["a"].Store({state:{myUsername:null,channels:[],currentChannel:null,currentChannelInfo:{username:null,stream_title:null}},mutations:{updateChannels:function(t,e){t.channels=e.channels},updateCurrentChannelInfo:function(t,e){t.currentChannelInfo=e.channelInfo},setUsername:function(t,e){t.myUsername=e},setCurrentChannel:function(t,e){t.currentChannel=e}},actions:{getChannelsAndUpdate:function(t){return Object(lt["a"])(regeneratorRuntime.mark((function e(){var n,a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,e.next=3,fetch("/api/channels/");case 3:return a=e.sent,e.next=6,a.json();case 6:r=e.sent,n("updateChannels",{channels:r});case 8:case"end":return e.stop()}}),e)})))()},getCurrentChannelInfo:function(t,e){return Object(lt["a"])(regeneratorRuntime.mark((function n(){var a,r,s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=t.commit,n.next=3,fetch("/api/channels/"+e+"/");case 3:return r=n.sent,n.next=6,r.json();case 6:s=n.sent,a("updateCurrentChannelInfo",{channelInfo:s}),a("setCurrentChannel",e);case 9:case"end":return n.stop()}}),n)})))()}},modules:{}}),ct=n("5132"),ht=n.n(ct),mt=n("666c");n("373e");a["a"].config.productionTip=!1,a["a"].use(mt["a"],{plyr:{}}),a["a"].use(new ht.a({debug:!0,connection:"http://localhost:8081"})),new a["a"]({router:st,vuetify:it,store:ut,render:function(t){return t(H)}}).$mount("#app")},"9b19":function(t,e,n){t.exports=n.p+"img/logo.63a7d78d.svg"}});
//# sourceMappingURL=app.f811d014.js.map