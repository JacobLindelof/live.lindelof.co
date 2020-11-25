<template>
  <vue-plyr ref="plyr" :options="playerOptions">
    <video
      :id="'video-' + 1"
      data-plyr-config="{'autoplay': true}"
    ></video>
  </vue-plyr>
</template>

<script>
import Hls from "hls.js";

export default {
  name: "Player",

  props: {
    channelName: {
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
          "progress",
          "current-time",
          "mute",
          "volume",
          "settings",
          "fullscreen"
        ],
        settings: ["quality", "speed", "loop"]
      }
    };
  },
  computed: {
    player() {
      console.log(this.$refs.plyr.player);
      return this.$refs.plyr.player;
    },
    channelUrl() {
      return "https://live.lindelof.co/hls/" + this.channelName + "/index.m3u8"
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
