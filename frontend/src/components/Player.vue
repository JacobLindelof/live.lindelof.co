<template>
  <vue-plyr ref="plyr" :options="playerOptions">
    <video :id="'video-' + 1" data-plyr-config="{'autoplay': true}"></video>
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
      streamIsLoaded: false,
      playerOptions: {
        controls: [
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
      return "https://live.lindelof.co/hls/" + this.channelName + "/index.m3u8"
    }
  },
  methods: {
    loadStream() {
      if (Hls.isSupported()) {
        const hls = new Hls({
          "enableWorker": true,
          "maxBufferLength": 1,
          "liveBackBufferLength": 0,
          "liveSyncDuration": 0,
          "liveMaxLatencyDuration": 5,
          "liveDurationInfinity": true,
          "highBufferWatchdogPeriod": 1,
        });
        hls.loadSource(this.channelUrl);
        hls.attachMedia(this.player.media);
      }
    }
  },
  watch: {
    channelName() {
      this.loadStream();
    }
  },
  mounted() {
    this.loadStream()
  }
};
</script>
<style>
</style>