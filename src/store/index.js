import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    answers: [],
    usersJoined: [],
    username: '',
    img: '',
    theWinnerIs: ''
  },
  mutations: {
    SOCKET_userLogin (state, usersJoined) {
      state.username = localStorage.getItem('username')
      state.usersJoined = usersJoined
    },
    SOCKET_insetAnswers (state, answers) {
      if (state.answers.length === 4) {
        state.answers = []
      }
      state.answers = answers
    },
    SOCKET_updateScore (state, data) {
      state.usersJoined = data
    },
    SOCKET_changeDice (state, data) {
      state.img = data
    },
    SOCKET_getWinners (state, data) {
      state.theWinnerIs = data
    }
  },
  actions: {
  },
  modules: {
  }

})
