import Vue from 'vue'
import Vuex from 'vuex'

import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // Authentication Information
    authUser: null,
    isAuthenticated: null,
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


    updateChatColor (state, payload) {
      state.authUser.chatColor = payload.chatColor
    },
    updateChannels (state, payload) {
      state.channels = payload.channels.results
    },
    updateCurrentChannelInfo (state, payload) {
      if (!payload) {
        state.currentChannelInfo = {"username":null,"stream_title":null}
      } else {
        state.currentChannelInfo = payload.channelInfo
      }
    },
    setUsername(state, payload) {
      state.myUsername = payload
    },
    setCurrentChannel(state, payload) {
      if (state.currentChannel !== payload) {
        state.currentChannel = payload
      }
    },
    closeChannel(state) {
      state.currentChannel = null
      state.currentChannelInfo = null
    }
  },
  actions: {
    async getUserInfo ({ commit, state }) {
      const jwt = state.jwt;
      if (jwt) {
        const base = {
          baseURL: state.endpoints.baseUrl,
          headers: {
          // Set your Authorization to 'JWT', not Bearer!!!
            Authorization: `JWT ${state.jwt}`,
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
          commit("setAuthUser",
            {authUser: response.data, isAuthenticated: true}
          )
        })
        .catch(() => {
          commit("setAuthUser",
            {authUser: null, isAuthenticated: false}
          )
          commit("removeToken")
        })
      } else {
        commit("setAuthUser",
          {authUser: null, isAuthenticated: false}
        )
      }
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
      if (channelInfo) {
        commit('setCurrentChannel', channelInfo.username)
      } else {
        commit('setCurrentChannel', null)
      }
    },
    async setChatColor ({ commit }, payload) {
      commit('updateChatColor', {
        chatColor: payload.chatColor
      })
    },
    async getCurrentChannelInfo ({ commit }, username) {
      const slug = username.toLowerCase();
      const res = await fetch('/api/channels/' + slug + '/');
      const data = await res.json();
      commit('updateCurrentChannelInfo', {
        channelInfo: data
      })
      commit('setCurrentChannel', username)
    },
    async closeChannel ({ commit }) {
      commit('closeChannel')
    }
  },
  modules: {
  }
})
