<template>
  <v-container class="home" fill-height fill-width>
  </v-container>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Home',
  mounted() {
    this.$store.commit('setCurrentChannel', null)
  }
}
</script>

<style>

</style>