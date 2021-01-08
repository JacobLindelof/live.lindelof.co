<template>
  <v-layout justify-space-between column fill-height>
    <v-card class="chatHeading">
      <v-card-title class="justify-center">Stream Chat</v-card-title>
    </v-card>
    <v-layout justify-space-between column fill-height>
      <v-dialog v-model="usernameDialog" max-width="400">
        <v-card>
          <v-form v-on:submit.prevent="setUsername">
            <v-card-title class="headline">
              Username Required
            </v-card-title>
            <v-card-text>
              Please set a username to use the stream chat.
              <v-text-field
                required
                v-model="usernameDialogUsername"
                placeholder="Username"
                hide-details
              ></v-text-field>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="red darken-1" text @click="usernameDialog = false">
                Cancel
              </v-btn>
              <v-btn color="darken-1" submit text @click="setUsername" :disabled="usernameDialogUsername == null || usernameDialogUsername == ''">
                OK
              </v-btn>
            </v-card-actions>
          </v-form>
        </v-card>
      </v-dialog>
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
            :usernameColor="currentUser.chatColor"
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
            @click="checkUsername"
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
    usernameColor: `hsla(${~~(360 * Math.random())},70%,70%,0.8)`
  }),
  computed: {
    isAuthenticated() {
      return this.$store.state.isAuthenticated;
    },
    currentChannel() {
      return this.$store.state.currentChannelInfo;
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
      if (this.currentChatChannel != this.currentChannel.username) {
        if (this.currentChatChannel != null) {
          this.$socket.emit("leave", {
            room: this.currentChatChannel,
          });
        }
        this.messages = [];
        this.currentChatChannel = this.currentChannel.username;
        this.$socket.emit("join", {
          room: this.currentChatChannel,
        });
      }
    },
    setUsername() {
      if(this.usernameDialogUsername != null && this.usernameDialogUsername != "") {
        this.myUsername = this.usernameDialogUsername;
        if (this.chatMessage != null && this.chatMessage != "") {
          this.$socket.emit("chatMessage", {
            username: this.$store.state.myUsername,
            message: this.chatMessage,
            room: this.currentChatChannel,
          });
          this.chatMessage = null;
        }
        this.usernameDialog = false;
      }
    },
    checkUsername() {
      if ((this.myUsername == null) | (this.myUsername == "")) {
        this.usernameDialog = true;
      }
    },
    sendMessage() {
      if (this.chatMessage != null && this.chatMessage != "") {
        if (this.myUsername != null && this.myUsername != "") {
          this.$socket.emit("chatMessage", {
            username: this.myUsername,
            message: this.chatMessage,
            usernameColor: this.usernameColor,
            room: this.currentChatChannel,
          });
          this.chatMessage = null;
        } else {
          this.usernameDialog = true;
        }
      }
    },
  },
  mounted() {
    this.reloadChat();
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
      this.$nextTick(function() {
        this.$refs.messageContainer.scrollTop = this.$refs.messageContainer.scrollHeight;
      });
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
