import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    myUsername: null,
    channels: [],
    currentChannel: null,
    currentChannelInfo: {
      username: null,
      stream_title: null
    }
  },
  mutations: {
    updateChannels (state, payload) {
      state.channels = payload.channels
    },
    updateCurrentChannelInfo (state, payload) {
      state.currentChannelInfo = payload.channelInfo
    },
    setUsername(state, payload) {
      state.myUsername = payload
    },
    setCurrentChannel(state, payload) {
      state.currentChannel = payload
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
    async setCurrentChannelInfo ({ commit }, channelInfo) {
      commit('updateCurrentChannelInfo', {
        channelInfo: channelInfo
      })
      commit('setCurrentChannel', channelInfo.username)
    },
    async getCurrentChannelInfo ({ commit }, username) {
      const slug = username.toLowerCase();
      const res = await fetch('/api/channels/' + slug + '/');
      const data = await res.json();
      commit('updateCurrentChannelInfo', {
        channelInfo: data
      })
      commit('setCurrentChannel', username)
    }
  },
  modules: {
  }
})
