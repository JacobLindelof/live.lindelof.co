<template>
  <v-dialog v-model="dialog" persistent max-width="290">
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="primary" alt v-bind="attrs" v-on="on">
        Sign Up
      </v-btn>
    </template>
    <v-card>
      <v-form v-on:submit.prevent="signup">
        <v-card-title class="headline">
          Sign Up
        </v-card-title>
        <v-card-text> 
          <v-text-field label="Username" v-model="username" :errorMessages="errors.username"></v-text-field>
          <v-text-field label="Email" v-model="email" :errorMessages="errors.email"></v-text-field>
          <v-text-field label="Password" type="password" v-model="password" :errorMessages="errors.password"></v-text-field>
          <v-text-field label="Confirm Password" type="password" v-model="password_confirm"></v-text-field>
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
import axios from 'axios'
export default {
  data: () => {
    return {
      username: '',
      email: '',
      password: '',
      password_confirm: '',
      dialog: null,
      errors: {
        email: [],
        password: [],
        username: []
      }
    }
  },
  methods: {
    signup() {
      const payload = {
        username: this.username,
        email: this.email,
        password: this.password
      }
      this.$http.post("/api/auth/register/", payload)
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
              this.$router.push({name: 'Home'})
            })
      })
      .catch((error) => {
        this.errors = error.response.data;
      })
    }
  }
}
</script>