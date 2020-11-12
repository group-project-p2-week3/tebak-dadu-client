import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    usersJoined: [],
    username: ''
  },
  mutations: {
    SOCKET_userLogin (state, usersJoined) {
      state.username = localStorage.getItem('username')
      state.usersJoined = usersJoined
    }
  },
  actions: {
  },
  modules: {
  }
})
