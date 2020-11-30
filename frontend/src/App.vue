<template>
  <v-app id="inspire">
    <v-app-bar app clipped-right clipped-left>
      <v-btn text to="/">
        <v-img
          class="mx-2"
          :src="require('./assets/taystone.png')"
          max-height="40"
          max-width="40"
          contain
          
        ></v-img>
          TayStone.TV
      </v-btn>
      <v-spacer/>
      <v-text-field dense label='Username' v-model="myUsername"></v-text-field>
    </v-app-bar>

    <v-navigation-drawer app clipped>
      <ChannelList />
    </v-navigation-drawer>

    <v-main>
      <router-view></router-view>
    </v-main>

    <v-navigation-drawer app clipped right width="20rem" v-if="this.currentChannel">
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
    myUsername: {
      get() {
        return this.$store.state.myUsername;
      },
      set(value) {
        this.$store.commit("setUsername", value);
      },
    },
    currentChannel() {
      return this.$store.state.currentChannel
    }
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

  data: () => ({
    timer: "",
  }),
};
</script>
