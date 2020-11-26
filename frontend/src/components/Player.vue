<template>
  <v-container class="pa-0" ref="videoContainer">
    <vue-plyr ref="plyr" :options="playerOptions">
      <video
        :id="'video-' + 1"
        data-plyr-config="{'autoplay': true}"
      ></video>
    </vue-plyr>
  </v-container>
</template>

<script>
import Hls from "hls.js";

export default {
  name: "Player",

  props: {
    channel: {
      type: String,
      required: true
    }
  },

  data() {
    return {
      playerOptions: {
        controls: [
          "play-large",
          "play",
          "mute",
          "volume",
          "fullscreen"
        ],
      }
    };
  },
  computed: {
    player() {
      console.log(this.$refs.plyr.player);
      return this.$refs.plyr.player;
    },
    channelUrl() {
      return "https://live.lindelof.co/hls/" + this.channel + "/index.m3u8"
    }
  },
  mounted() {
    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(this.channelUrl);
      hls.attachMedia(this.player.media);

      window.hls = hls;
    }
  }
};
</script>

<style>
</style>