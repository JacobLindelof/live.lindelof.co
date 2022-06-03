<template>
  <v-container class="home" fill-height fill-width>
  </v-container>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: 'Home',
  methods: {
    ...mapActions(['closeChannel']),
  },
  mounted() {
    this.closeChannel();
    this.$store.commit('setCurrentChannel', null)
  }
}
</script>

<style>

</style>