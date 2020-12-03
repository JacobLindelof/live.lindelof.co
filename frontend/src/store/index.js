import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // Authentication Information
    authUser: null,
    isAuthenticated: false,
    jwt: localStorage.getItem('token'),

    myUsername: null,
    channels: [],
    currentChannel: null,
    currentChannelInfo: {
      username: null,
      stream_title: null
    },

    endpoints: {
      // TODO: Remove hardcoding of dev endpoints
      obtainJWT: '/api/auth/obtain-token/',
      refreshJWT: '/api/auth/refresh-token/',
      baseUrl: '/api/'
    }
  },
  mutations: {
    // Authentication Mutatiions
    setAuthUser(state, { authUser, isAuthenticated }) {
      Vue.set(state, 'authUser', authUser)
      Vue.set(state, 'isAuthenticated', isAuthenticated)
    },
    updateToken(state, newToken) {
      // TODO: For security purposes, take localStorage out of the project.
      localStorage.setItem('token', newToken);
      state.jwt = newToken;
    },
    removeToken(state) {
      // TODO: For security purposes, take localStorage out of the project.
      localStorage.removeItem('token');
      state.jwt = null;
    },


    updateChannels (state, payload) {
      state.channels = payload.channels.results
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
    async getUserInfo ({ commit }) {
      commit('updateCurrentChannelInfo', {
        channelInfo: channelInfo
      })
      commit('setCurrentChannel', channelInfo.username)
    },

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
