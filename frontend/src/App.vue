<template>
  <v-app id="inspire">
    <v-app-bar app clipped-right clipped-left>
      <v-toolbar-title>Switch.TV</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer app clipped>
      <ChannelList />
    </v-navigation-drawer>

    <v-main>
      <router-view></router-view>
    </v-main>

    <v-navigation-drawer app clipped right width="20rem">
    </v-navigation-drawer>
  </v-app>
</template>

<script>
import { mapActions } from 'vuex'
import ChannelList from './components/ChannelList.vue'

export default {
  name: 'App',

  components: {
    ChannelList,
  },

  methods: {
    ...mapActions([
      'getChannelsAndUpdate'
    ])
  },

  created () {
    this.getChannelsAndUpdate();
    this.timer = setInterval(this.getChannelsAndUpdate, 3000)
  },

  beforeDestroy () {
    clearInterval(this.timer)
  },

  data: () => ({
    timer: '',
  }),
};
</script>