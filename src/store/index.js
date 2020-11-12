import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    players: [
      {
        username: 'hai',
        score: 0
      }
    ],
    answers: [
      {
        username: 'hai',
        answer: 1
      }
    ]
  },
  mutations: {
    SOCKET_SET_ANSWERS (state, answers) {
      state.answers = answers
    }
  },
  actions: {
  },
  modules: {
  }
})
