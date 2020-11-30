<template>
  <v-container class="pa-0" ref="videoContainer">
    <vue-plyr :poster="require('../assets/poster.png')" ref="plyr" :options="playerOptions">
      <video
        :id="'video-' + 1"
        data-plyr-config="{'autoplay': true}"
        height="1080px"
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
      return this.$refs.plyr.player;
    },
    channelUrl() {
      return "https://live.lindelof.co/hls/" + this.channel + "/index.m3u8"
    }
  },
  methods: {
    loadStream() {
      if (Hls.isSupported()) {
        const hls = new Hls();
        hls.loadSource(this.channelUrl);
        hls.attachMedia(this.player.media);

        window.hls = hls;
      }
    }
  },
  mounted() {
    this.loadStream()
  },
  watch: {
    channel: function() {
      this.loadStream();
    },
  },
};
</script>

<style>
</style>