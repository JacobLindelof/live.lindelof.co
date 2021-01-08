<template>
  <v-menu bottom offset-y>
    <template v-slot:activator="{ on, attrs }">
      <v-avatar color="primary" v-bind="attrs" v-on="on">
        {{ getChannelAbbreviation(authUser.username) }}
      </v-avatar>
    </template>
    <v-list>
      <v-list-item to="/dashboard">
        <v-list-item-title>Dashboard</v-list-item-title>
      </v-list-item>
      <v-list-item @click="logout">
        <v-list-item-title>Logout</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
export default {
  data: () => {
    return {};
  },
  computed: {
    authUser() {
      return this.$store.state.authUser;
    },
  },
  methods: {
    getChannelAbbreviation(username) {
      const abbrevationRegex = /([A-Z])/g;
      const caps = [...username.matchAll(abbrevationRegex)];
      if (username.split(" ").length > 1) {
        let nameArray = username.split(" ");
        let abbrevation = nameArray[0][0] + nameArray[nameArray.length - 1][0];
        return abbrevation;
      } else if (caps.length === 2) {
        return caps[0][0] + caps[1][0];
      } else {
        let abbrevation = username[0];
        return abbrevation;
      }
    },
    logout() {
      this.$store.commit("setAuthUser",
        {authUser: null, isAuthenticated: false}
      )
      this.$store.commit("removeToken")
    }
  },
};
</script>
