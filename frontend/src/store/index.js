import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    channels: [],
  },
  mutations: {
    updateChannels (state, payload) {
      state.channels = payload.channels
    }
  },
  actions: {
    async getChannelsAndUpdate ({ commit }) {
      const res = await fetch('/api/users');
      const data = await res.json();
      commit('updateChannels', {
        channels: data
      })
    }
  },
  modules: {
  }
})
