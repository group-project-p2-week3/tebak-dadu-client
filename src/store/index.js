import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    answers: [],
    usersJoined: [],
    username: '',
    img: '',
    theWinnerIs: [],
    hiddenForm: false
  },
  mutations: {
    SOCKET_userLogin (state, usersJoined) {
      state.username = localStorage.getItem('username')
      state.usersJoined = usersJoined
    },
    SOCKET_insertAnswers (state, answers) {
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
      state.hiddenForm = false
    },
    hideForm (state, payload) {
      state.hiddenForm = payload
    }
  },
  actions: {
  },
  modules: {
  }

})
