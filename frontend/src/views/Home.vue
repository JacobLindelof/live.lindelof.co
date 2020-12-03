<template>
  <v-container class="home" fill-height>
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
  .home {
    background-color: black;
  } 
</style>