(function(t){function e(e){for(var n,r,i=e[0],l=e[1],c=e[2],u=0,h=[];u<i.length;u++)r=i[u],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&h.push(s[r][0]),s[r]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);d&&d(e);while(h.length)h.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],n=!0,r=1;r<a.length;r++){var i=a[r];0!==s[i]&&(n=!1)}n&&(o.splice(e--,1),t=l(l.s=a[0]))}return t}var n={},r={app:0},s={app:0},o=[];function i(t){return l.p+"js/"+({about:"about"}[t]||t)+"."+{about:"49b1581c"}[t]+".js"}function l(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.e=function(t){var e=[],a={about:1};r[t]?e.push(r[t]):0!==r[t]&&a[t]&&e.push(r[t]=new Promise((function(e,a){for(var n="css/"+({about:"about"}[t]||t)+"."+{about:"12c5d5b0"}[t]+".css",s=l.p+n,o=document.getElementsByTagName("link"),i=0;i<o.length;i++){var c=o[i],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===n||u===s))return e()}var h=document.getElementsByTagName("style");for(i=0;i<h.length;i++){c=h[i],u=c.getAttribute("data-href");if(u===n||u===s)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var n=e&&e.target&&e.target.src||s,o=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=n,delete r[t],d.parentNode.removeChild(d),a(o)},d.href=s;var m=document.getElementsByTagName("head")[0];m.appendChild(d)})).then((function(){r[t]=0})));var n=s[t];if(0!==n)if(n)e.push(n[2]);else{var o=new Promise((function(e,a){n=s[t]=[e,a]}));e.push(n[2]=o);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=i(t);var h=new Error;c=function(e){u.onerror=u.onload=null,clearTimeout(d);var a=s[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;h.message="Loading chunk "+t+" failed.\n("+n+": "+r+")",h.name="ChunkLoadError",h.type=n,h.request=r,a[1](h)}s[t]=void 0}};var d=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(e)},l.m=t,l.c=n,l.d=function(t,e,a){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)l.d(a,n,function(e){return t[e]}.bind(null,n));return a},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/",l.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var h=0;h<c.length;h++)e(c[h]);var d=u;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";a("85ec")},"1e3e":function(t,e,a){},"4dd7":function(t,e,a){t.exports=a.p+"img/taystone.80925bd7.png"},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{id:"inspire"}},[n("v-app-bar",{attrs:{app:"","clipped-right":"","clipped-left":""}},[n("v-btn",{staticClass:"px-0",attrs:{text:"",to:"/",ripple:!1}},[n("v-img",{staticClass:"mr-2",attrs:{src:a("4dd7"),"max-height":"40","max-width":"40",contain:""}}),t._v(" TayStone.TV ")],1),n("v-spacer"),!1===t.isAuthenticated?n("LoginButton"):t._e(),!1===t.isAuthenticated?n("SignupButton"):t._e(),!0===t.isAuthenticated?n("UserDialog"):t._e()],1),n("v-navigation-drawer",{attrs:{app:"",clipped:""}},[n("ChannelList")],1),n("v-main",[n("router-view")],1),n("v-navigation-drawer",{attrs:{app:"",clipped:"",right:"",width:"20rem"},model:{value:t.showChat,callback:function(e){t.showChat=e},expression:"showChat"}},[n("Chat")],1)],1)},s=[],o=a("5530"),i=a("2f62"),l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-list",{attrs:{dense:""}},t._l(t.channels,(function(e){return a("v-list-item",{key:e.username,attrs:{to:{name:"Channel",params:{username:e.username}},ripple:!1},on:{click:function(a){return t.setCurrentChannelInfo(e)}}},[a("v-list-item-avatar",{attrs:{color:"primary"}},[t._v(t._s(t.getChannelAbbreviation(e.username)))]),a("v-list-item-content",[a("v-list-item-title",[t._v(t._s(e.username))]),e.isLive?a("v-list-item-subtitle",[t._v("🔴 Live")]):a("v-list-item-subtitle",[t._v("Offline")])],1)],1)})),1)},c=[],u=(a("ac1f"),a("a1f0"),a("1276"),a("2909")),h={name:"ChannelList",methods:Object(o["a"])({getChannelAbbreviation:function(t){var e=/([A-Z])/g,a=Object(u["a"])(t.matchAll(e));if(t.split(" ").length>1){var n=t.split(" "),r=n[0][0]+n[n.length-1][0];return r}if(2===a.length)return a[0][0]+a[1][0];var s=t[0];return s}},Object(i["b"])(["setCurrentChannel","setCurrentChannelInfo"])),computed:{channels:function(){return this.$store.state.channels}}},d=h,m=a("2877"),p=a("6544"),f=a.n(p),v=a("8860"),C=a("da13"),g=a("8270"),b=a("5d23"),w=Object(m["a"])(d,l,c,!1,null,null,null),y=w.exports;f()(w,{VList:v["a"],VListItem:C["a"],VListItemAvatar:g["a"],VListItemContent:b["a"],VListItemSubtitle:b["b"],VListItemTitle:b["c"]});var x=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-dialog",{attrs:{persistent:"","max-width":"290"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,r=e.attrs;return[a("v-btn",t._g(t._b({staticClass:"mx-3",attrs:{color:"secondary",alt:""}},"v-btn",r,!1),n),[t._v(" Login ")])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-form",{on:{submit:function(e){return e.preventDefault(),t.authenticate(e)}}},[a("v-card-title",{staticClass:"headline"},[t._v(" Login ")]),a("v-card-text",[a("v-text-field",{attrs:{label:"Username"},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}}),a("v-text-field",{attrs:{type:"password",label:"Password"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{text:""},on:{click:function(e){t.dialog=!1}}},[t._v(" Cancel ")]),a("v-btn",{attrs:{type:"submit",color:"primary",text:""}},[t._v(" Submit ")])],1)],1)],1)],1)},_=[],k=(a("d3b7"),a("bc3a")),U=a.n(k),j={data:function(){return{username:"",password:"",dialog:null}},methods:{authenticate:function(){var t=this,e={username:this.username,password:this.password};this.$http.post(this.$store.state.endpoints.obtainJWT,e).then((function(e){t.$store.commit("updateToken",e.data.token);var a={baseURL:t.$store.state.endpoints.baseUrl,headers:{Authorization:"JWT ".concat(t.$store.state.jwt),"Content-Type":"application/json"},xhrFields:{withCredentials:!0}},n=U.a.create(a);n({url:"/channels/current/",method:"get",params:{}}).then((function(e){t.$store.commit("setAuthUser",{authUser:e.data,isAuthenticated:!0})}))})).catch((function(t){console.log(t),console.debug(t),console.dir(t)})).finally((function(){t.dialog=!1}))}}},A=j,T=a("8336"),V=a("b0af"),S=a("99d9"),$=a("169a"),O=a("4bd4"),I=a("2fa4"),L=a("8654"),M=Object(m["a"])(A,x,_,!1,null,null,null),D=M.exports;f()(M,{VBtn:T["a"],VCard:V["a"],VCardActions:S["a"],VCardText:S["b"],VCardTitle:S["c"],VDialog:$["a"],VForm:O["a"],VSpacer:I["a"],VTextField:L["a"]});var E=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-dialog",{attrs:{persistent:"","max-width":"290"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,r=e.attrs;return[a("v-btn",t._g(t._b({attrs:{color:"primary",alt:""}},"v-btn",r,!1),n),[t._v(" Sign Up ")])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-form",{on:{submit:function(e){return e.preventDefault(),t.signup(e)}}},[a("v-card-title",{staticClass:"headline"},[t._v(" Sign Up ")]),a("v-card-text",[a("v-text-field",{attrs:{label:"Username",errorMessages:t.errors.username},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}}),a("v-text-field",{attrs:{label:"Email",errorMessages:t.errors.email},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),a("v-text-field",{attrs:{label:"Password",type:"password",errorMessages:t.errors.password},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),a("v-text-field",{attrs:{label:"Confirm Password",type:"password"},model:{value:t.password_confirm,callback:function(e){t.password_confirm=e},expression:"password_confirm"}})],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{text:""},on:{click:function(e){t.dialog=!1}}},[t._v(" Cancel ")]),a("v-btn",{attrs:{type:"submit",color:"primary",text:""}},[t._v(" Submit ")])],1)],1)],1)],1)},F=[],R={data:function(){return{username:"",email:"",password:"",password_confirm:"",dialog:null,errors:{email:[],password:[],username:[]}}},methods:{signup:function(){var t=this,e={username:this.username,email:this.email,password:this.password};this.$http.post("/api/auth/register/",e).then((function(e){t.$store.commit("updateToken",e.data.token);var a={baseURL:t.$store.state.endpoints.baseUrl,headers:{Authorization:"JWT ".concat(t.$store.state.jwt),"Content-Type":"application/json"},xhrFields:{withCredentials:!0}},n=U.a.create(a);n({url:"/channels/current/",method:"get",params:{}}).then((function(e){t.$store.commit("setAuthUser",{authUser:e.data,isAuthenticated:!0}),t.$router.push({name:"Home"})}))})).catch((function(e){t.errors=e.response.data}))}}},P=R,K=Object(m["a"])(P,E,F,!1,null,null,null),B=K.exports;f()(K,{VBtn:T["a"],VCard:V["a"],VCardActions:S["a"],VCardText:S["b"],VCardTitle:S["c"],VDialog:$["a"],VForm:O["a"],VSpacer:I["a"],VTextField:L["a"]});var J=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-menu",{attrs:{bottom:"","offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,r=e.attrs;return[a("v-avatar",t._g(t._b({attrs:{color:"primary"}},"v-avatar",r,!1),n),[t._v(" "+t._s(t.getChannelAbbreviation(t.authUser.username))+" ")])]}}])},[a("v-list",[a("v-list-item",{attrs:{to:"/dashboard"}},[a("v-list-item-title",[t._v("Dashboard")])],1),a("v-list-item",{on:{click:t.logout}},[a("v-list-item-title",[t._v("Logout")])],1)],1)],1)},W=[],N={data:function(){return{}},computed:{authUser:function(){return this.$store.state.authUser}},methods:{getChannelAbbreviation:function(t){var e=/([A-Z])/g,a=Object(u["a"])(t.matchAll(e));if(t.split(" ").length>1){var n=t.split(" "),r=n[0][0]+n[n.length-1][0];return r}if(2===a.length)return a[0][0]+a[1][0];var s=t[0];return s},logout:function(){this.$store.commit("setAuthUser",{authUser:null,isAuthenticated:!1}),this.$store.commit("removeToken")}}},H=N,z=a("8212"),q=a("e449"),Z=Object(m["a"])(H,J,W,!1,null,null,null),G=Z.exports;f()(Z,{VAvatar:z["a"],VList:v["a"],VListItem:C["a"],VListItemTitle:b["c"],VMenu:q["a"]});var Q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-layout",{attrs:{"justify-space-between":"",column:"","fill-height":""}},[a("v-card",{staticClass:"chatHeading"},[a("v-card-title",{staticClass:"justify-center"},[t._v("Stream Chat")])],1),a("v-layout",{attrs:{"justify-space-between":"",column:"","fill-height":""}},[a("v-layout",{staticClass:"messageLayout",attrs:{"justify-space-between":"",column:"","fill-height":""}},[a("div"),a("v-container",{ref:"messageContainer",staticClass:"messageContainer pa-0",attrs:{"justify-end":""}},[a("div",{staticClass:"chatMessage px-2 py-1 alt"},[a("span",[t._v("Welcome to TayStone.TV say hi!")])]),t._l(t.messages,(function(t,e){return a("Message",{key:e,class:{alt:e%2===1},attrs:{message:t}})}))],2)],1),a("v-container",{staticClass:"sendContainer elevation-10",attrs:{"justify-end":""}},[a("form",{on:{submit:function(e){return e.preventDefault(),t.sendMessage(e)}}},[a("v-text-field",{attrs:{solo:"",exact:"",icon:"",placeholder:"Send a message","hide-details":"",disabled:!t.isAuthenticated},model:{value:t.chatMessage,callback:function(e){t.chatMessage=e},expression:"chatMessage"}})],1)])],1)],1)},X=[],Y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"chatMessage px-2 py-1"},[a("span",{staticClass:"username",style:{color:t.message.usernameColor}},[t._v(t._s(t.message.username)+": ")]),a("span",{staticClass:"message"},[t._v(t._s(t.message.message))])])},tt=[],et={data:function(){return{}},props:["message"]},at=et,nt=(a("f87e"),Object(m["a"])(at,Y,tt,!1,null,null,null)),rt=nt.exports,st={name:"Chat",components:{Message:rt},data:function(){return{usernameDialog:null,usernameDialogUsername:null,chatMessage:null,messages:[],currentChatChannel:null,chatSocket:null,usernameColor:"hsla(".concat(~~(360*Math.random()),",70%,70%,0.8)")}},computed:{isAuthenticated:function(){return this.$store.state.isAuthenticated},currentChannel:function(){return this.$store.state.currentChannel},myUsername:function(){return this.$store.state.authUser.username},currentUser:function(){return this.$store.state.authUser}},methods:{reloadChat:function(){var t=this;this.chatSocket&&(this.chatSocket.close(),this.chatSocket=null),this.messages=[];var e=null;e="https:"==window.location.protocol?"wss://":"ws://",this.chatSocket=new WebSocket(e+window.location.host+"/ws/chat/"+encodeURIComponent(this.currentChannel)+"/"),this.chatSocket.onmessage=function(e){var a=JSON.parse(e.data);t.messages.push(a)}},sendMessage:function(){this.chatSocket.send(JSON.stringify({username:this.myUsername,message:this.chatMessage,usernameColor:this.currentUser.chatColor})),this.chatMessage=null}},mounted:function(){null!=this.currentChannel&&this.reloadChat()},watch:{currentChannel:function(){null!=this.currentChannel&&this.reloadChat()}}},ot=st,it=(a("f196"),a("a523")),lt=a("a722"),ct=Object(m["a"])(ot,Q,X,!1,null,null,null),ut=ct.exports;f()(ct,{VCard:V["a"],VCardTitle:S["c"],VContainer:it["a"],VLayout:lt["a"],VTextField:L["a"]});var ht={name:"App",components:{SignupButton:B,LoginButton:D,UserDialog:G,ChannelList:y,Chat:ut},computed:{currentChannel:function(){return this.$store.state.currentChannel},currentChannelInfo:function(){return this.$store.state.currentChannelInfo},authUser:function(){return this.$store.state.authUser},isAuthenticated:function(){return this.$store.state.isAuthenticated}},methods:Object(o["a"])({},Object(i["b"])(["getChannelsAndUpdate","getUserInfo"])),created:function(){this.getChannelsAndUpdate(),this.getUserInfo(),this.timer=setInterval(this.getChannelsAndUpdate,3e3)},beforeDestroy:function(){clearInterval(this.timer)},watch:{currentChannel:function(){this.currentChannelInfo.username?this.showChat=!0:this.showChat=!1}},data:function(){return{timer:"",showChat:!1}}},dt=ht,mt=(a("034f"),a("7496")),pt=a("40dc"),ft=a("adda"),vt=a("f6c4"),Ct=a("f774"),gt=Object(m["a"])(dt,r,s,!1,null,null,null),bt=gt.exports;f()(gt,{VApp:mt["a"],VAppBar:pt["a"],VBtn:T["a"],VImg:ft["a"],VMain:vt["a"],VNavigationDrawer:Ct["a"],VSpacer:I["a"]});var wt=a("8c4f"),yt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"home",attrs:{"fill-height":"","fill-width":""}})},xt=[],_t={name:"Home",mounted:function(){this.$store.commit("setCurrentChannel",null)}},kt=_t,Ut=Object(m["a"])(kt,yt,xt,!1,null,null,null),jt=Ut.exports;f()(Ut,{VContainer:it["a"]});var At=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.userDetails?a("v-container",{attrs:{fluid:""}},[a("v-row",[a("v-col",[a("div",{staticClass:"text-h4"},[t._v("User Dashboard")])])],1),a("v-row",[a("v-col",[a("v-card",[a("v-card-text",[a("v-row",[a("v-col",{staticClass:"col-2 text-h6",attrs:{"align-self":"center"}},[t._v(" Stream Key: ")]),a("v-col",{staticClass:"col-7",attrs:{"align-self":"center"}},[a("v-text-field",{ref:"streamKeyField",attrs:{width:"100px",dense:"",outlined:"",disabled:"",readonly:"","hide-details":"",type:t.streamKeyFieldType},model:{value:t.userDetails.streamKey,callback:function(e){t.$set(t.userDetails,"streamKey",e)},expression:"userDetails.streamKey"}})],1),a("v-col",{staticClass:"col-3",attrs:{"align-self":"center"}},[a("v-btn",{staticClass:"mx-3",attrs:{color:"primary",dense:""},on:{click:t.swapStreamKeyField}},[t._v("Show")]),a("v-btn",{attrs:{dense:""},on:{click:function(e){t.$refs.streamKeyField.type="text"}}},[t._v("Reset")])],1)],1),a("v-row",[a("v-col",{staticClass:"col-2 text-h6 text-white"},[t._v(" Chat Color: ")]),a("v-col",{staticClass:"col-3",attrs:{"align-self":"center"}},[a("v-color-picker",{attrs:{"hide-inputs":""},model:{value:t.chatColor,callback:function(e){t.chatColor=e},expression:"chatColor"}})],1),a("v-col",{staticClass:"col-4"},[t._v(" Preview "),a("v-container",{ref:"messageContainer",staticClass:"messageContainer pa-0",attrs:{"justify-end":""}},t._l(t.testMessages,(function(e,n){return a("Message",{key:n,class:{alt:n%2===1},attrs:{message:e,usernameColor:t.chatColor}})})),1)],1)],1)],1)],1)],1)],1)],1):t._e()},Tt=[],Vt={name:"Dashboard",components:{Message:rt},data:function(){return{currentChatColor:"",chatColorTimeout:"",streamKeyFieldType:"password",testMessages:[{username:"Unholypanda",message:"This is a test chat message.",usernameColor:"hsla(171,70%,70%,0.8)"},{username:"Unholypanda",message:"With fancy username colors.",usernameColor:"hsla(171,70%,70%,0.8)"}]}},watch:{chatColor:function(){this.setCurrentChatColor()}},computed:{userDetails:function(){return this.$store.state.authUser},chatColor:{get:function(){var t;return null===(t=this.$store.state.authUser)||void 0===t?void 0:t.chatColor},set:function(t){this.setChatColor({chatColor:t})}}},methods:Object(o["a"])(Object(o["a"])({},Object(i["b"])(["setChatColor"])),{},{setCurrentChatColor:function(){var t=this;clearTimeout(this.chatColorTimeout),this.chatColorTimeout=setTimeout((function(){var e=t.$store.state.jwt;if(e){var a={baseURL:t.$store.state.endpoints.baseUrl,headers:{Authorization:"JWT ".concat(e),"Content-Type":"application/json"},xhrFields:{withCredentials:!0}},n=U.a.create(a);n({url:"/channels/current/",method:"put",data:{username:t.userDetails.username,chatColor:t.chatColor}})}}),1e3),this.currentChatColor=this.chatColor},swapStreamKeyField:function(){"password"===this.streamKeyFieldType?this.streamKeyFieldType="text":this.streamKeyFieldType="password"}})},St=Vt,$t=a("62ad"),Ot=a("03a4"),It=a("0fd9"),Lt=Object(m["a"])(St,At,Tt,!1,null,null,null),Mt=Lt.exports;f()(Lt,{VBtn:T["a"],VCard:V["a"],VCardText:S["b"],VCol:$t["a"],VColorPicker:Ot["a"],VContainer:it["a"],VRow:It["a"],VTextField:L["a"]}),n["a"].use(wt["a"]);var Dt=[{path:"/",name:"Home",component:jt},{path:"/dashboard",name:"Dashboard",component:Mt},{path:"/:username",name:"Channel",props:!0,component:function(){return a.e("about").then(a.bind(null,"92d6"))}}],Et=new wt["a"]({routes:Dt,mode:"history",linkActiveClass:null,linkExactActiveClass:null}),Ft=Et,Rt=a("f309");n["a"].use(Rt["a"]);var Pt=new Rt["a"]({theme:{dark:!0}}),Kt=(a("96cf"),a("1da1"));n["a"].use(i["a"]);var Bt=new i["a"].Store({state:{authUser:null,isAuthenticated:null,jwt:localStorage.getItem("token"),myUsername:null,channels:[],currentChannel:null,currentChannelInfo:{username:null,stream_title:null},endpoints:{obtainJWT:"/api/auth/obtain-token/",refreshJWT:"/api/auth/refresh-token/",baseUrl:"/api/"}},mutations:{setAuthUser:function(t,e){var a=e.authUser,r=e.isAuthenticated;n["a"].set(t,"authUser",a),n["a"].set(t,"isAuthenticated",r)},updateToken:function(t,e){localStorage.setItem("token",e),t.jwt=e},removeToken:function(t){localStorage.removeItem("token"),t.jwt=null},updateChatColor:function(t,e){t.authUser.chatColor=e.chatColor},updateChannels:function(t,e){t.channels=e.channels.results},updateCurrentChannelInfo:function(t,e){t.currentChannelInfo=e.channelInfo},setUsername:function(t,e){t.myUsername=e},setCurrentChannel:function(t,e){t.currentChannel!==e&&(t.currentChannel=e)}},actions:{getUserInfo:function(t){return Object(Kt["a"])(regeneratorRuntime.mark((function e(){var a,n,r,s,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:a=t.commit,n=t.state,r=n.jwt,r?(s={baseURL:n.endpoints.baseUrl,headers:{Authorization:"JWT ".concat(n.jwt),"Content-Type":"application/json"},xhrFields:{withCredentials:!0}},o=U.a.create(s),o({url:"/channels/current/",method:"get",params:{}}).then((function(t){a("setAuthUser",{authUser:t.data,isAuthenticated:!0})})).catch((function(){a("setAuthUser",{authUser:null,isAuthenticated:!1}),a("removeToken")}))):a("setAuthUser",{authUser:null,isAuthenticated:!1});case 3:case"end":return e.stop()}}),e)})))()},getChannelsAndUpdate:function(t){return Object(Kt["a"])(regeneratorRuntime.mark((function e(){var a,n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=t.commit,e.next=3,fetch("/api/channels/");case 3:return n=e.sent,e.next=6,n.json();case 6:r=e.sent,a("updateChannels",{channels:r});case 8:case"end":return e.stop()}}),e)})))()},setCurrentChannelInfo:function(t,e){return Object(Kt["a"])(regeneratorRuntime.mark((function a(){var n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:n=t.commit,n("updateCurrentChannelInfo",{channelInfo:e}),n("setCurrentChannel",e.username);case 3:case"end":return a.stop()}}),a)})))()},setChatColor:function(t,e){return Object(Kt["a"])(regeneratorRuntime.mark((function a(){var n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:n=t.commit,n("updateChatColor",{chatColor:e.chatColor});case 2:case"end":return a.stop()}}),a)})))()},getCurrentChannelInfo:function(t,e){return Object(Kt["a"])(regeneratorRuntime.mark((function a(){var n,r,s,o;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return n=t.commit,r=e.toLowerCase(),a.next=4,fetch("/api/channels/"+r+"/");case 4:return s=a.sent,a.next=7,s.json();case 7:o=a.sent,n("updateCurrentChannelInfo",{channelInfo:o}),n("setCurrentChannel",e);case 10:case"end":return a.stop()}}),a)})))()}},modules:{}}),Jt=a("666c");a("373e");n["a"].prototype.$http=U.a,n["a"].config.productionTip=!1,n["a"].use(Jt["a"],{plyr:{}}),new n["a"]({router:Ft,vuetify:Pt,store:Bt,render:function(t){return t(bt)}}).$mount("#app")},"85ec":function(t,e,a){},afbc:function(t,e,a){},f196:function(t,e,a){"use strict";a("1e3e")},f87e:function(t,e,a){"use strict";a("afbc")}});
//# sourceMappingURL=app.2f61175b.js.map