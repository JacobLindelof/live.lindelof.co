(function(e){function t(t){for(var a,r,o=t[0],c=t[1],u=t[2],l=0,h=[];l<o.length;l++)r=o[l],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&h.push(s[r][0]),s[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);m&&m(t);while(h.length)h.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,r=1;r<n.length;r++){var o=n[r];0!==s[o]&&(a=!1)}a&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var a={},r={app:0},s={app:0},i=[];function o(e){return c.p+"js/"+({about:"about"}[e]||e)+"."+{about:"e0583367"}[e]+".js"}function c(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={about:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var a="css/"+({about:"about"}[e]||e)+"."+{about:"12c5d5b0"}[e]+".css",s=c.p+a,i=document.getElementsByTagName("link"),o=0;o<i.length;o++){var u=i[o],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===a||l===s))return t()}var h=document.getElementsByTagName("style");for(o=0;o<h.length;o++){u=h[o],l=u.getAttribute("data-href");if(l===a||l===s)return t()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=t,m.onerror=function(t){var a=t&&t.target&&t.target.src||s,i=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=a,delete r[e],m.parentNode.removeChild(m),n(i)},m.href=s;var f=document.getElementsByTagName("head")[0];f.appendChild(m)})).then((function(){r[e]=0})));var a=s[e];if(0!==a)if(a)t.push(a[2]);else{var i=new Promise((function(t,n){a=s[e]=[t,n]}));t.push(a[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=o(e);var h=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(m);var n=s[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;h.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",h.name="ChunkLoadError",h.type=a,h.request=r,n[1](h)}s[e]=void 0}};var m=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=a,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(n,a,function(t){return e[t]}.bind(null,a));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var h=0;h<u.length;h++)t(u[h]);var m=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},1:function(e,t){},"14c3c":function(e,t,n){"use strict";n("c8f0")},"4dd7":function(e,t,n){e.exports=n.p+"img/taystone.80925bd7.png"},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",{attrs:{id:"inspire"}},[a("v-app-bar",{attrs:{app:"","clipped-right":"","clipped-left":""}},[a("v-btn",{staticClass:"px-0",attrs:{text:"",to:"/",ripple:!1}},[a("v-img",{staticClass:"mr-2",attrs:{src:n("4dd7"),"max-height":"40","max-width":"40",contain:""}}),e._v(" TayStone.TV ")],1)],1),a("v-navigation-drawer",{attrs:{app:"",clipped:""}},[a("ChannelList")],1),a("v-main",[a("router-view")],1),a("v-navigation-drawer",{attrs:{app:"",clipped:"",right:"",width:"20rem"},model:{value:e.showChat,callback:function(t){e.showChat=t},expression:"showChat"}},[a("Chat")],1)],1)},s=[],i=n("5530"),o=n("2f62"),c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-list",{attrs:{dense:""}},e._l(e.channels,(function(t){return n("v-list-item",{key:t.username,attrs:{to:{name:"Channel",params:{username:t.username}},ripple:!1},on:{click:function(n){return e.setCurrentChannelInfo(t)}}},[n("v-list-item-avatar",{attrs:{color:"primary"}},[e._v(e._s(e.getChannelAbbreviation(t.username)))]),n("v-list-item-content",[n("v-list-item-title",[e._v(e._s(t.username))]),t.isLive?n("v-list-item-subtitle",[e._v("🔴 Live")]):n("v-list-item-subtitle",[e._v("Offline")])],1)],1)})),1)},u=[],l=(n("ac1f"),n("a1f0"),n("1276"),n("2909")),h={name:"ChannelList",methods:Object(i["a"])({getChannelAbbreviation:function(e){var t=/([A-Z])/g,n=Object(l["a"])(e.matchAll(t));if(e.split(" ").length>1){var a=e.split(" "),r=a[0][0]+a[a.length-1][0];return r}if(2===n.length)return n[0][0]+n[1][0];var s=e[0];return s}},Object(o["b"])(["setCurrentChannel","setCurrentChannelInfo"])),computed:{channels:function(){return this.$store.state.channels}}},m=h,f=n("2877"),d=n("6544"),p=n.n(d),g=n("8860"),v=n("da13"),C=n("8270"),b=n("5d23"),y=Object(f["a"])(m,c,u,!1,null,null,null),w=y.exports;p()(y,{VList:g["a"],VListItem:v["a"],VListItemAvatar:C["a"],VListItemContent:b["a"],VListItemSubtitle:b["b"],VListItemTitle:b["c"]});var x=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-layout",{attrs:{"justify-space-between":"",column:"","fill-height":""}},[n("v-dialog",{attrs:{"max-width":"400"},model:{value:e.usernameDialog,callback:function(t){e.usernameDialog=t},expression:"usernameDialog"}},[n("v-card",[n("v-form",{on:{submit:function(t){return t.preventDefault(),e.setUsername(t)}}},[n("v-card-title",{staticClass:"headline"},[e._v(" Username Required ")]),n("v-card-text",[e._v(" Please set a username to use the stream chat. "),n("v-text-field",{attrs:{required:"",placeholder:"Username","hide-details":""},model:{value:e.usernameDialogUsername,callback:function(t){e.usernameDialogUsername=t},expression:"usernameDialogUsername"}})],1),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{color:"red darken-1",text:""},on:{click:function(t){e.usernameDialog=!1}}},[e._v(" Cancel ")]),n("v-btn",{attrs:{color:"darken-1",submit:"",text:"",disabled:null==e.usernameDialogUsername||""==e.usernameDialogUsername},on:{click:e.setUsername}},[e._v(" OK ")])],1)],1)],1)],1),n("div",{ref:"messageContainer",staticClass:"messageContainer"},e._l(e.messages,(function(e,t){return n("Message",{key:t,class:{alt:t%2===0},attrs:{message:e}})})),1),n("v-container",{staticClass:"sendContainer elevation-10",attrs:{"justify-end":""}},[n("form",{on:{submit:function(t){return t.preventDefault(),e.sendMessage(t)}}},[n("v-text-field",{attrs:{solo:"",exact:"",icon:"",placeholder:"Send a message","hide-details":""},on:{click:e.checkUsername},model:{value:e.chatMessage,callback:function(t){e.chatMessage=t},expression:"chatMessage"}})],1)])],1)},_=[],k=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"chatMessage px-2 py-1"},[n("span",{staticClass:"username"},[e._v(e._s(e.message.username)+": ")]),n("span",{staticClass:"message"},[e._v(e._s(e.message.message))])])},U=[],j={data:function(){return{}},props:["message"]},O=j,M=(n("f87e"),Object(f["a"])(O,k,U,!1,null,null,null)),V=M.exports,D={name:"Chat",components:{Message:V},data:function(){return{usernameDialog:null,usernameDialogUsername:null,chatMessage:null,messages:[],currentChatChannel:null}},computed:{currentChannel:function(){return this.$store.state.currentChannelInfo},myUsername:{get:function(){return this.$store.state.myUsername},set:function(e){this.$store.commit("setUsername",e)}}},methods:{reloadChat:function(){this.messages=[],null!=this.currentChatChannel&&this.$socket.emit("leave",{room:this.currentChatChannel}),this.currentChatChannel!=this.currentChannel.username&&(this.currentChatChannel=this.currentChannel.username,this.$socket.emit("join",{room:this.currentChatChannel}))},setUsername:function(){null!=this.usernameDialogUsername&&""!=this.usernameDialogUsername&&(this.myUsername=this.usernameDialogUsername,null!=this.chatMessage&&""!=this.chatMessage&&(this.$socket.emit("chatMessage",{username:this.$store.state.myUsername,message:this.chatMessage,room:this.currentChatChannel}),this.chatMessage=null),this.usernameDialog=!1)},checkUsername:function(){null==this.myUsername|""==this.myUsername&&(this.usernameDialog=!0)},sendMessage:function(){null!=this.chatMessage&&""!=this.chatMessage&&(null!=this.myUsername&&""!=this.myUsername?(this.$socket.emit("chatMessage",{username:this.$store.state.myUsername,message:this.chatMessage,room:this.currentChatChannel}),this.chatMessage=null):this.usernameDialog=!0)}},mounted:function(){this.reloadChat()},watch:{currentChannel:function(){this.reloadChat()}},sockets:{connect:function(){},newChatMessage:function(e){e.room===this.currentChatChannel&&this.messages.push(e),this.$nextTick((function(){this.$refs.messageContainer.scrollTop=this.$refs.messageContainer.scrollHeight}))}}},I=D,A=(n("14c3c"),n("8336")),$=n("b0af"),L=n("99d9"),T=n("a523"),E=n("169a"),S=n("4bd4"),P=n("a722"),R=n("2fa4"),B=n("8654"),N=Object(f["a"])(I,x,_,!1,null,null,null),q=N.exports;p()(N,{VBtn:A["a"],VCard:$["a"],VCardActions:L["a"],VCardText:L["b"],VCardTitle:L["c"],VContainer:T["a"],VDialog:E["a"],VForm:S["a"],VLayout:P["a"],VSpacer:R["a"],VTextField:B["a"]});var H={name:"App",components:{ChannelList:w,Chat:q},computed:{currentChannel:function(){return this.$store.state.currentChannel}},methods:Object(i["a"])({},Object(o["b"])(["getChannelsAndUpdate"])),created:function(){this.getChannelsAndUpdate(),this.timer=setInterval(this.getChannelsAndUpdate,3e3)},beforeDestroy:function(){clearInterval(this.timer)},watch:{currentChannel:function(){this.currentChannel?this.showChat=!0:this.showChat=!1}},data:function(){return{timer:"",showChat:!1}}},F=H,J=(n("034f"),n("7496")),K=n("40dc"),Z=n("adda"),z=n("f6c4"),G=n("f774"),Q=Object(f["a"])(F,r,s,!1,null,null,null),W=Q.exports;p()(Q,{VApp:J["a"],VAppBar:K["a"],VBtn:A["a"],VImg:Z["a"],VMain:z["a"],VNavigationDrawer:G["a"]});n("d3b7");var X=n("8c4f"),Y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{staticClass:"home",attrs:{"fill-height":""}})},ee=[],te={name:"Home",mounted:function(){this.$store.commit("setCurrentChannel",null)}},ne=te,ae=(n("cccb"),Object(f["a"])(ne,Y,ee,!1,null,null,null)),re=ae.exports;p()(ae,{VContainer:T["a"]}),a["a"].use(X["a"]);var se=[{path:"/",name:"Home",component:re},{path:"/:username",name:"Channel",props:!0,component:function(){return n.e("about").then(n.bind(null,"92d6"))}}],ie=new X["a"]({routes:se,mode:"history",linkActiveClass:null,linkExactActiveClass:null}),oe=ie,ce=n("f309");a["a"].use(ce["a"]);var ue=new ce["a"]({theme:{dark:!0}}),le=(n("96cf"),n("1da1"));a["a"].use(o["a"]);var he=new o["a"].Store({state:{myUsername:null,channels:[],currentChannel:null,currentChannelInfo:{username:null,stream_title:null}},mutations:{updateChannels:function(e,t){e.channels=t.channels},updateCurrentChannelInfo:function(e,t){e.currentChannelInfo=t.channelInfo},setUsername:function(e,t){e.myUsername=t},setCurrentChannel:function(e,t){e.currentChannel=t}},actions:{getChannelsAndUpdate:function(e){return Object(le["a"])(regeneratorRuntime.mark((function t(){var n,a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,fetch("/api/channels/");case 3:return a=t.sent,t.next=6,a.json();case 6:r=t.sent,n("updateChannels",{channels:r});case 8:case"end":return t.stop()}}),t)})))()},setCurrentChannelInfo:function(e,t){return Object(le["a"])(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:a=e.commit,a("updateCurrentChannelInfo",{channelInfo:t}),a("setCurrentChannel",t.username);case 3:case"end":return n.stop()}}),n)})))()},getCurrentChannelInfo:function(e,t){return Object(le["a"])(regeneratorRuntime.mark((function n(){var a,r,s,i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=e.commit,r=t.toLowerCase(),n.next=4,fetch("/api/channels/"+r+"/");case 4:return s=n.sent,n.next=7,s.json();case 7:i=n.sent,a("updateCurrentChannelInfo",{channelInfo:i}),a("setCurrentChannel",t);case 10:case"end":return n.stop()}}),n)})))()}},modules:{}}),me=n("5132"),fe=n.n(me),de=n("8055"),pe=n.n(de),ge=n("666c");n("373e");a["a"].config.productionTip=!1,a["a"].use(ge["a"],{plyr:{}}),a["a"].use(new fe.a({connection:pe()("/",{transports:["websocket"]})})),new a["a"]({router:oe,vuetify:ue,store:he,render:function(e){return e(W)}}).$mount("#app")},"5ced":function(e,t,n){},"85ec":function(e,t,n){},afbc:function(e,t,n){},c8f0:function(e,t,n){},cccb:function(e,t,n){"use strict";n("5ced")},f87e:function(e,t,n){"use strict";n("afbc")}});
//# sourceMappingURL=app.600e3d3e.js.map