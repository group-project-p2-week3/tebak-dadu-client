import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    players: [
      {
        username: 'unique',
        score: 0
      },
      {
        username: 'player 2',
        score: 0
      },
      {
        username: 'player 3',
        score: 0
      },
      {
        username: 'player 4',
        score: 0
      }
    ],
    answers: []
  },
  mutations: {
    SOCKET_insetAnswers (state, answers) {
      if (state.answers.length === 4) {
        state.answers = []
      }
      state.answers = answers
    },
    addScore (state, payload) {
      const winner = payload.map(el => el.username)
      console.log(winner)
      state.players.forEach(el => {
        if (winner.includes(el.username)) {
          el.score += 10
        }
      })
    }
  },
  actions: {
  },
  modules: {
  }
})
