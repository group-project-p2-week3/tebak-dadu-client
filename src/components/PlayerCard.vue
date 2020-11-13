<template>
  <div class="col-3">
    <div class="card">
      <div class="card-body">
        <div class="card-title">{{player.username}}</div>
        <div class="card-text">
          <p>Score: {{player.score}}</p> <br />
          <form v-if="!hiddenForm" @submit.prevent="insertAnswers" :class="hideForm">
            <div class="form-group">
              <label for="answer">try your luck</label>
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
      this.$store.commit('hideForm')
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
