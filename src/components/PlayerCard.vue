<template>
  <div class="col-3">
    <div class="card rounded shadow card-bordered bg-dark text-light" style="height: 240px">
      <div class="card-body">
        <div class="card-title name rainbow"><strong>{{player.username}}</strong></div>
        <div class="card-text">
          <p class="score">Score: {{player.score}}</p> <br />
          <form v-if="!hiddenForm" @submit.prevent="insertAnswers" :class="hideForm">
            <div class="form-group">
              <label for="answer">TRY YOUR LUCK</label>
              <input v-model="answer" type="number" id="answer" class="form-control" min="1" max="6" required/>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PlayerCard',
  data () {
    return {
      answer: ''
    }
  },
  methods: {
    insertAnswers () {
      const username = localStorage.getItem('username')
      const payload = {
        username,
        answer: this.answer
      }
      this.$socket.emit('insertAnswers', payload)
      this.answer = ''
      this.$store.commit('hideForm', true)
    }
  },
  computed: {
    hiddenForm () {
      return this.$store.state.hiddenForm
    },
    hideForm () {
      const username = localStorage.getItem('username')
      if (username !== this.player.username) {
        return 'hidden'
      } else {
        return ''
      }
    }
  },
  props: ['player']
}
</script>

<style>
.hidden {
  display: none;
}
</style>
