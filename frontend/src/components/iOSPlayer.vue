<template>
  <video
    ref="iOSVideoPlayer"
    width="100%"
    height="100%"
    :id="'video-' + 1"
    controls
    playsinline
  ></video>
</template>

<script>
export default {
  name: "iOSPlayer",

  props: {
    channelName: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      streamIsLoaded: false,
    };
  },
  computed: {
    player() {
      return this.$refs.iOSVideoPlayer;
    },
    channelUrl() {
      return "https://live.lindelof.co/hls/" + this.channelName + "/index.m3u8";
    },
  },
  methods: {
    loadStream() {
      this.player.src = this.channelUrl;
    },
  },
  watch: {
    channelName() {
      this.loadStream();
    },
  },
  mounted() {
    this.loadStream();
  },
};
</script>
<style></style>
