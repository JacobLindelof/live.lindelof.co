<template>
  <v-app id="inspire">
    <v-app-bar app clipped-right clipped-left>
      <v-toolbar-title>Switch.TV</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer app clipped>
      <ChannelList />
    </v-navigation-drawer>

    <v-main>
      <Player channelName="Unholypanda"/>
    </v-main>

    <v-navigation-drawer app clipped right>
    </v-navigation-drawer>
  </v-app>
</template>

<script>
import { mapActions } from 'vuex'
import ChannelList from './components/ChannelList.vue'
import Player from './components/Player.vue'

export default {
  name: 'App',

  components: {
    ChannelList,
    Player
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
    timer: ''
  }),
};
</script>