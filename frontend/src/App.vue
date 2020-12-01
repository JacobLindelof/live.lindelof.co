<template>
  <v-app id="inspire">
    <v-app-bar app clipped-right clipped-left>
      <v-btn text to="/" :ripple="false" class="px-0">
        <v-img
          class="mr-2"
          :src="require('./assets/taystone.png')"
          max-height="40"
          max-width="40"
          contain
        ></v-img>
        TayStone.TV
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer app clipped>
      <ChannelList />
    </v-navigation-drawer>

    <v-main>
      <router-view></router-view>
    </v-main>

    <v-navigation-drawer app clipped right width="20rem" v-model="showChat">
      <Chat />
    </v-navigation-drawer>
  </v-app>
</template>

<script>
import { mapActions } from "vuex";
import ChannelList from "./components/ChannelList.vue";
import Chat from "./views/Chat";

export default {
  name: "App",

  components: {
    ChannelList,
    Chat,
  },

  computed: {
    currentChannel() {
      return this.$store.state.currentChannel;
    },
  },
  methods: {
    ...mapActions(["getChannelsAndUpdate"]),
  },

  created() {
    this.getChannelsAndUpdate();
    this.timer = setInterval(this.getChannelsAndUpdate, 3000);
  },

  beforeDestroy() {
    clearInterval(this.timer);
  },

  watch: {
    currentChannel() {
      if (this.currentChannel) {
        this.showChat = true;
      } else {
        this.showChat = false;
      }
    }
  },

  data: () => ({
    timer: "",
    showChat: false,
  }),
};
</script>

<style>
.theme--dark.v-btn--active:hover::before,
.theme--dark.v-btn--active::before {
  opacity: 0 !important;
}
.theme--dark.v-list-item--active::before {
  opacity: 0;
}
.theme--dark.v-list-item:hover::before {
  opacity: 0.05;
}
.theme--dark.v-btn:hover::before,
.theme--dark.v-btn::before {
  opacity: 0 !important;
}

body::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
body {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
</style>
