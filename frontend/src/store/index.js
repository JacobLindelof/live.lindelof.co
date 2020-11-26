import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    channels: [],
    currentChannelInfo: null
  },
  mutations: {
    updateChannels (state, payload) {
      state.channels = payload.channels
    },
    updateCurrentChannelInfo (state, payload) {
      state.currentChannelInfo = payload.channelInfo
    }
  },
  actions: {
    async getChannelsAndUpdate ({ commit }) {
      const res = await fetch('/api/channels/');
      const data = await res.json();
      commit('updateChannels', {
        channels: data
      })
    },
    async getCurrentChannelInfo ({ commit }, username) {
      const res = await fetch('/api/channels/' + username + '/');
      const data = await res.json();
      commit('updateCurrentChannelInfo', {
        channelInfo: data
      })
    }
  },
  modules: {
  }
})
