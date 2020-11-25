<template>
    <v-list dense>
        <v-list-item
          v-for="channel in channels"
          :key="channel.username"
          link
        >
          <v-list-item-avatar
            color="primary"
            >U
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>{{ channel.username }}</v-list-item-title>
            <v-list-item-subtitle v-if="channel.is_live">🔴 Live</v-list-item-subtitle>
            <v-list-item-subtitle v-else>Offline</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
</template>

<script>
export default {
    name: 'ChannelList',
    computed: {
        channels() {
            return this.$store.state.channels
        }
    }
}
</script>