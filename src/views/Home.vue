<template>
  <div class="home container">
    <div class="container bg-light shadow" style="height:50vh">
      <div class="row">
        <div class="col-6 text-center" style="margin-top: 2em">
          <h3 v-show="!img" class="mt-5">Submit your answers first</h3>
          <img v-show="img" :src="img" alt="#" height="200px"> <br> <br>
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
      dice: 0,
      winner: this.$store.state.theWinnerIs
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
          html: '<p>Game can start if there are <b>4 players</b> & all player have <b>submitted their answer</b></p>'
        })
      }
    },
    checkAnswer () {
      const correct = this.answers.filter(el => +el.answer === this.dice)
      this.$socket.emit('addScore', correct)
    }
  },
  watch: {
    theWinners () {
      console.log(this.theWinners)
      if (this.theWinners.length > 0) {
        if (this.theWinners.includes(localStorage.username)) {
          Swal.fire({
            icon: 'success',
            title: 'You are the champs!!!',
            text: 'JACKPOTTT $10.000.000.000'
          })
            .then((res) => {
              localStorage.clear()
              this.$router.push({ name: 'Login' })
            })
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Such a loser!!! :((('
          })
            .then((res) => {
              localStorage.clear()
              this.$router.push({ name: 'Login' })
            })
        }
      }
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
    },
    theWinners () {
      return this.$store.state.theWinnerIs
    }
  },
  components: {
    PlayerCard
  },
  created () {
    Swal.fire({
      icon: 'info',
      title: '<strong>How To Play<strong>',
      width: '70%',
      html: `
      <ul class="text-left border px-5 py-3">
        <li>Game bisa dimulai jika ada <b>4 orang</b> di dalam game</li>
        <li>Setelah game dimulai, nanti akan diminta input angka yang dari <b>1 sampai 6</b> dan dadu akan dikocok</li>
        <li>Angka yang dipilih bisa sama antar pemain</li>
        <li>Jika angka pada dadu dan jawaban kalian sama, maka score akan bertambah 10</li>
        <li>Game akan berhenti jika ada player yang mendapatkan <b>score 50</b></li>
      </ul>
      `,
      confirmButtonText: 'OK'
    })
  }
}
</script>

<style>
* {
  font-family: 'Poppins', sans-serif;
}
</style>
