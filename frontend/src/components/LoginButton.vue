<template>
  <v-dialog v-model="dialog" persistent max-width="290">
    <template v-slot:activator="{ on, attrs }">
      <v-btn class="mx-3" color="secondary" alt v-bind="attrs" v-on="on">
        Login
      </v-btn>
    </template>
    <v-card>
      <v-form v-on:submit.prevent="authenticate">
        <v-card-title class="headline">
          Login
        </v-card-title>
        <v-card-text>
          <v-text-field label="Username" v-model="username"></v-text-field>
          <v-text-field type="password" label="Password" v-model="password"></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text @click="dialog = false">
            Cancel
          </v-btn>
          <v-btn type="submit" color="primary" text>
            Submit
          </v-btn>
        </v-card-actions>
      </v-form>
    </v-card>
  </v-dialog>
</template>

<script>
import axios from 'axios';

export default {
  data: () => {
    return {
      username: '',
      password: '',
      dialog: null,
    }
  },
  methods: {
    authenticate () {
      const payload = {
        username: this.username,
        password: this.password
      }
      this.$http.post(this.$store.state.endpoints.obtainJWT, payload)
        .then((response) => {
          this.$store.commit('updateToken', response.data.token)
          // get and set auth user
          const base = {
            baseURL: this.$store.state.endpoints.baseUrl,
            headers: {
            // Set your Authorization to 'JWT', not Bearer!!!
              Authorization: `JWT ${this.$store.state.jwt}`,
              'Content-Type': 'application/json'
            },
            xhrFields: {
                withCredentials: true
            }
          }
          // Even though the authentication returned a user object that can be
          // decoded, we fetch it again. This way we aren't super dependant on
          // JWT and can plug in something else.
          const axiosInstance = axios.create(base)
          axiosInstance({
            url: "/channels/current/",
            method: "get",
            params: {}
          })
          .then((response) => {
            this.$store.commit("setAuthUser",
              {authUser: response.data, isAuthenticated: true}
            )
          })
        })
        .catch((error) => {
          console.log(error);
          console.debug(error);
          console.dir(error);
        })
        .finally(() => {
          this.dialog = false;
        })
    }
  }
}
</script>