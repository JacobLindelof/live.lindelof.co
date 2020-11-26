<template>
  <v-list dense>
    <v-list-item v-for="channel in channels" :key="channel.username" :to="{ name: 'Channel', params: { username: channel.username }}">
      <v-list-item-avatar color="primary">{{ getChannelAbbreviation(channel.username) }}</v-list-item-avatar>

      <v-list-item-content>
        <v-list-item-title>{{ channel.username }}</v-list-item-title>
        <v-list-item-subtitle v-if="channel.is_live"
          >🔴 Live</v-list-item-subtitle
        >
        <v-list-item-subtitle v-else>Offline</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: "ChannelList",
  methods: {
    getChannelAbbreviation(username) {
      const abbrevationRegex = /([A-Z])/g
      const caps = [...username.matchAll(abbrevationRegex)]
      if (username.split(" ").length > 1) {
        let nameArray = username.split(" ");
        let abbrevation = nameArray[0][0] + nameArray[nameArray.length - 1][0];
        return abbrevation;
      } else if (caps.length === 2) {
        return caps[0][0] + caps[1][0]
      } else {
        let abbrevation = username[0];
        return abbrevation;
      }
    },
    ...mapActions([
      'setCurrentChannel'
    ])
  },
  computed: {
    channels() {
      return this.$store.state.channels;
    },
  },
};
</script>
