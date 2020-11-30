<template>
  <v-layout column fill-height>
    <v-list>
      <v-list-item v-for="(message, index) in messages" :key="index" dense>
        <v-list-item-content><strong>{{ message.username }}:</strong>
          {{ message.message }}
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <form v-on:submit.prevent="sendMessage">
      <v-text-field flat exact icon v-model="message"></v-text-field>
    </form>
  </v-layout>
</template>

<script>
export default {
  name: "Chat",
  data: () => ({
    message: null,
    messages: [],
    currentChatChannel: null,
  }),
  computed: {
    currentChannel() {
      return this.$store.state.currentChannelInfo;
    },
  },
  methods: {
    reloadChat() {
      this.messages = [];
      if (this.currentChatChannel != null) {
        this.$socket.emit("leave", {
          room: this.currentChatChannel,
        });
      }
      this.currentChatChannel = this.currentChannel.username;
      this.$socket.emit("join", {
        room: this.currentChatChannel,
      });
    },
    sendMessage() {
      this.$socket.emit("chatMessage", {
        username: this.$store.state.myUsername,
        message: this.message,
        room: this.currentChatChannel,
      });
      this.message = null;
    },
  },
  watch: {
    currentChannel() {
      this.reloadChat();
    },
  },
  sockets: {
    connect() {},
    newChatMessage(message) {
      if (message.room === this.currentChatChannel) {
        this.messages.push(message);
      }
      console.log(message);
    },
  },
};
</script>
