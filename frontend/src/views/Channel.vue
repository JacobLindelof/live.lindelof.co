<template>
  <div>
    <div class="playerContainer">
      <div class="videoContainer">
        <Player :channelName="username"/>
      </div>
    </div>
    <v-list-item>
      <v-list-item-avatar color="primary">{{ getChannelAbbreviation(channelInfo.username) }}</v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title>{{ channelInfo.username }}</v-list-item-title>
        <v-list-item-subtitle>
          {{ channelInfo.stream_title }}
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import Player from "../components/Player.vue";

export default {
  name: "Channel",
  props: {
    username: {
      type: String,
      required: true,
    },
  },
  components: {
    Player,
  },
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
    ...mapActions(["getCurrentChannelInfo"]),
  },
  mounted() {
    this.getCurrentChannelInfo(this.username);
  },
  watch: {
    username() {
      this.getCurrentChannelInfo(this.username);
    },
  },
  computed: {
    channelInfo() {
      return this.$store.state.currentChannelInfo;
    },
  },
};
</script>

<style>
.playerContainer {
  width: 100%;
  height: 0px;
  position: relative;
  padding-top: 56.25%;
}

.videoContainer {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
</style>
