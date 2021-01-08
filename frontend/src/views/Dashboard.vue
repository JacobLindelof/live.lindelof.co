<template>
  <v-container fluid v-if="userDetails">
    <v-row>
      <v-col>
        <div class="text-h4">User Dashboard</div>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card>
          <v-card-text>
            <v-row>
              <v-col class="col-2 text-h6" align-self="center">
                Stream Key:
              </v-col>
              <v-col class="col-7" align-self="center">
                <v-text-field
                  width="100px"
                  ref="streamKeyField"
                  dense
                  outlined
                  disabled
                  readonly
                  hide-details
                  v-model="userDetails.streamKey"
                  :type="streamKeyFieldType"
                ></v-text-field>
              </v-col>
              <v-col class="col-3" align-self="center">
                <v-btn
                  color="primary"
                  dense
                  @click="swapStreamKeyField"
                  class="mx-3"
                  >Show</v-btn
                >
                <v-btn dense @click="$refs.streamKeyField.type = 'text'"
                  >Reset</v-btn
                >
              </v-col>
            </v-row>
            <v-row>
              <v-col class="col-2 text-h6 text-white">
                Chat Color:
              </v-col>
              <v-col align-self="center" class="col-3">
                <v-color-picker
                  hide-inputs
                  v-model="chatColor"
                ></v-color-picker>
              </v-col>
              <v-col class="col-4">
                Preview
                <v-container
                  justify-end
                  ref="messageContainer"
                  class="messageContainer pa-0"
                >
                  <Message
                    v-for="(message, index) in testMessages"
                    v-bind:class="{ alt: index % 2 === 1 }"
                    :message="message"
                    :key="index"
                    :usernameColor="chatColor"
                  />
                </v-container>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";
import { mapActions } from "vuex";
import Message from "@/components/Message.vue";

export default {
  name: "Dashboard",
  components: {
    Message,
  },
  data: () => {
    return {
      currentChatColor: "",
      chatColorTimeout: "",
      streamKeyFieldType: "password",
      testMessages: [
        {
          username: "Unholypanda",
          message: "This is a test chat message.",
          usernameColor: "hsla(171,70%,70%,0.8)",
        },
        {
          username: "Unholypanda",
          message: "With fancy username colors.",
          usernameColor: "hsla(171,70%,70%,0.8)",
        },
      ],
    };
  },
  watch: {
    chatColor() {
      this.setCurrentChatColor();
    },
  },
  computed: {
    userDetails() {
      return this.$store.state.authUser;
    },
    chatColor: {
      get() {
        return this.$store.state.authUser?.chatColor;
      },
      set(value) {
        this.setChatColor({
          chatColor: value,
        });
      },
    },
  },
  methods: {
    ...mapActions(["setChatColor"]),
    setCurrentChatColor() {
      clearTimeout(this.chatColorTimeout);

      this.chatColorTimeout = setTimeout(() => {
        const jwt = this.$store.state.jwt;
        if (jwt) {
          const base = {
            baseURL: this.$store.state.endpoints.baseUrl,
            headers: {
              // Set your Authorization to 'JWT', not Bearer!!!
              Authorization: `JWT ${jwt}`,
              "Content-Type": "application/json",
            },
            xhrFields: {
              withCredentials: true,
            },
          };
          // Even though the authentication returned a user object that can be
          // decoded, we fetch it again. This way we aren't super dependant on
          // JWT and can plug in something else.
          const axiosInstance = axios.create(base);
          axiosInstance({
            url: "/channels/current/",
            method: "put",
            data: {
              username: this.userDetails.username,
              chatColor: this.chatColor,
            },
          });
        }
      }, 1000);

      this.currentChatColor = this.chatColor;
    },
    swapStreamKeyField() {
      if (this.streamKeyFieldType === "password") {
        this.streamKeyFieldType = "text";
      } else {
        this.streamKeyFieldType = "password";
      }
    },
  },
};
</script>
