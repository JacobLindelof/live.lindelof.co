<template>
  <div>
    <Player :channel="username"/>
  </div>
</template>

<script>
import Player from '../components/Player.vue'

export default {
  name: "Channel",
  props: {
    username: {
      type: String,
      required: true
    }
  },
  components: {
    Player
  },
  methods: {

  },
  created() {
   
  },
  computed: {
    currentChannel() {
      return this.$store.state.currentChannel;
    },
  },
}
</script>
