import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import store from "./store";

import VueSocketIO from "vue-socket.io";
import io from "socket.io-client";

import VuePlyr from "vue-plyr";
import "vue-plyr/dist/vue-plyr.css";

import axios from "axios";

Vue.prototype.$http = axios;

Vue.config.productionTip = false;

Vue.use(VuePlyr, {
  plyr: {},
});

Vue.use(
  new VueSocketIO({
    connection: io("/", { transports: ["websocket"] }),
  })
);

new Vue({
  router,
  vuetify,
  store,
  render: (h) => h(App),
}).$mount("#app");
