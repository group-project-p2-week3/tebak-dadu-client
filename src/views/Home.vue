<template>
  <div class="home container">
    <button @click="logout" class="btn btn-outline-danger">Logout</button>
    <div class="container-fluid bg-light shadow" style="height:40vh">
      <div class="row">
        <div class="col-6 text-center" style="margin-top: 2em">
          <h3 v-show="!img" class="mt-5">Submit your answers first</h3>
          <img v-show="img" :src="img" alt="#" height="200px"> <br>
          <button @click="getDice" class="btn btn-primary">Shake</button>
        </div>
        <div class="col-6" style="margin-top: 4em">
          <ul v-for="(answer, i) in answers" :key="i">
            <li>
              {{answer.username}}: {{answer.answer}}
            </li>
          </ul>
        </div>
      </div>
    </div>
    <br>
    <div class="row">
      <PlayerCard
        v-for="(player, i) in usersJoined"
        :key="i"
        :player="player"
      />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Swal from 'sweetalert2'
import PlayerCard from '../components/PlayerCard'

export default {
  name: 'Home',
  data () {
    return {
      dice: 0
    }
  },
  methods: {
    getDice () {
      if (this.answers.length === 4) {
        const number = Math.ceil(Math.random() * 6)

        this.dice = number
        this.$socket.emit('changeDice', number)
        this.checkAnswer()
      } else {
        Swal.fire({
          icon: 'warning',
          title: 'Wait a minute',
          text: 'All players must submit their answer first'
        })
      }
    },
    checkAnswer () {
      const correct = this.answers.filter(el => +el.answer === this.dice)
      this.$socket.emit('addScore', correct)
    },
    logout () {
      const username = localStorage.getItem('username')
      this.$socket.emit('logout', username)
      localStorage.clear()
    }
  },
  computed: {
    usersJoined () {
      return this.$store.state.usersJoined
    },
    username () {
      return this.$store.state.username
    },
    answers () {
      return this.$store.state.answers
    },
    img () {
      return this.$store.state.img
    }
  },
  components: {
    PlayerCard
  },
  created () {
    
  }
}

</script>
