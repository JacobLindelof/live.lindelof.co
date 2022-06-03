<template>
  <v-layout justify-space-between column fill-height>
    <v-card class="chatHeading">
      <v-card-title class="justify-center">Stream Chat</v-card-title>
    </v-card>
    <v-layout justify-space-between column fill-height>
      <v-layout justify-space-between column fill-height class="messageLayout">
        <div></div>
        <v-container justify-end ref="messageContainer" class="messageContainer pa-0">
          <div class="chatMessage px-2 py-1 alt">
            <span>Welcome to TayStone.TV say hi!</span>
          </div>
          <Message
            v-for="(message, index) in messages"
            v-bind:class="{ alt: index % 2 === 1 }"
            :key="index"
            :message="message"
          />
        </v-container>
      </v-layout>
      <v-container justify-end class="sendContainer elevation-10">
        <form v-on:submit.prevent="sendMessage">
          <v-text-field
            solo
            exact
            icon
            v-model="chatMessage"
            placeholder="Send a message"
            hide-details
            :disabled="!isAuthenticated"
          ></v-text-field>
        </form>
      </v-container>
    </v-layout>
  </v-layout>
</template>

<script>
import Message from "../components/Message.vue";
export default {
  name: "Chat",
  components: { Message },
  data: () => ({
    usernameDialog: null,
    usernameDialogUsername: null,
    chatMessage: null,
    messages: [],
    currentChatChannel: null,
    chatSocket: null,
    usernameColor: `hsla(${~~(360 * Math.random())},70%,70%,0.8)`
  }),
  computed: {
    isAuthenticated() {
      return this.$store.state.isAuthenticated;
    },
    currentChannel() {
      return this.$store.state.currentChannel;
    },
    myUsername() {
      return this.$store.state.authUser.username;
    },
    currentUser() {
      return this.$store.state.authUser;
    },
  },
  methods: {
    reloadChat() {
      if (this.chatSocket){
        this.chatSocket.close();
        this.chatSocket = null;
      }
      this.messages = [];
      
      let wsProtocol = null;
      if (window.location.protocol == 'https:') {
        wsProtocol = 'wss://'
      } else {wsProtocol = 'ws://'}

      this.chatSocket = new WebSocket(
        wsProtocol  + window.location.host + '/ws/chat/' + encodeURIComponent(this.currentChannel) + '/'
      );

      this.chatSocket.onmessage = (e) => {
        const message = JSON.parse(e.data);
        this.messages.push(message);
      };
    },
    sendMessage() {
      this.chatSocket.send(JSON.stringify({
        username: this.myUsername,
        message: this.chatMessage,
        usernameColor: this.currentUser.chatColor,
      }));
      this.chatMessage = null;
    },
  },
  mounted() {
    if (this.currentChannel != null) {
      this.reloadChat();
    }
  },
  watch: {
    currentChannel() {
      if (this.currentChannel != null) {
        this.reloadChat();
      }
    },
  },
};
</script>

<style>
.messageLayout { 
  background: rgba(0,0,0,.1);
}
.messageContainer {
  overflow-y: scroll;
  word-break: break-all;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
/* Hide scrollbar for Chrome, Safari and Opera */
.messageContainer::-webkit-scrollbar {
  display: none;
}
.alt {
  background: rgba(0,0,0,.1);
}
.sendContainer {
  height: 72px;
  background-color: #282828;
}
.chatHeading {
  background-color: #282828;
}
</style>
