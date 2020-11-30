<template>
  <div>
    <Player :channel="username" />
    <v-list-item>
      <v-list-item-avatar size="56">
        <img
          alt="user"
          src="https://cdn.pixabay.com/photo/2020/06/24/19/12/cabbage-5337431_1280.jpg"
        />
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title>{{ channelInfo.username }}</v-list-item-title>
        <v-list-item-subtitle>
          {{ channelInfo.stream_title }}
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import Player from "../components/Player.vue";

export default {
  name: "Channel",
  props: {
    username: {
      type: String,
      required: true,
    },
  },
  components: {
    Player,
  },
  methods: {
    ...mapActions(["getCurrentChannelInfo"]),
  },
  mounted() {
    this.getCurrentChannelInfo(this.username);
  },
  watch: {
    username() {
      this.getCurrentChannelInfo(this.username);
    },
  },
  computed: {
    channelInfo() {
      return this.$store.state.currentChannelInfo;
    },
  },
};
</script>
