<template>
  <div class="chatMessage px-2 py-1">
    <span class="username" v-bind:style="{'color': message.usernameColor}">{{message.username}}: </span><span class="message">{{message.message}}</span>
  </div>
</template>

<script>
  export default {
    data () {
      return {}
    },
    props: [
      'message',
    ],
  }
</script>

<style>
.username {
  font-weight: bold;
}
</style>