<template>
  <v-app id="inspire">
    <v-app-bar app clipped-right clipped-left>
      <v-btn text to="/" :ripple="false" class="px-0">
        Live
      </v-btn>
      <v-spacer />
      <LoginButton v-if="isAuthenticated === false"/>
      <SignupButton v-if="isAuthenticated === false"/>
      <UserDialog v-if="isAuthenticated === true"/>
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
import LoginButton from '@/components/LoginButton.vue'
import SignupButton from '@/components/SignupButton.vue'
import UserDialog from '@/components/UserDialog.vue'
import Chat from '@/components/Chat.vue'

export default {
  name: "App",

  components: {
    SignupButton,
    LoginButton,
    UserDialog,
    ChannelList,
    Chat,
  },

  computed: {
    currentChannel() {
      return this.$store.state.currentChannel;
    },
    currentChannelInfo() {
      return this.$store.state.currentChannelInfo;
    },
    authUser() {
      return this.$store.state.authUser;
    },
    isAuthenticated() {
      return this.$store.state.isAuthenticated;
    },
  },
  methods: {
    ...mapActions(["getChannelsAndUpdate", "getUserInfo"]),
  },

  created() {
    this.getChannelsAndUpdate();
    this.getUserInfo();
    this.timer = setInterval(this.getChannelsAndUpdate, 3000);
  },

  beforeDestroy() {
    clearInterval(this.timer);
  },

  watch: {
    currentChannel() {
      if (this.currentChannelInfo && this.currentChannelInfo.username) {
        this.showChat = true;
      } else {
        this.showChat = false;
      }
    },
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
