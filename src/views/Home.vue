<template>
  <div class="home">
    <div class="container bg-light shadow" style="height:50vh">
      <div class="row">
        <div class="col-6 text-center" style="margin-top: 2em">
          <button @click="getDice" class="btn btn-primary">Shake</button>
          <p>{{ getDiceNumber }}</p>
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

    {{ answers }} <br>
    {{ usersJoined }}
    <div class="container">
      <div class="row">
        <PlayerCard
          v-for="(usersJoin, i) in usersJoined"
          :key="i"
          :usersJoin="usersJoin"
        />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import PlayerCard from '../components/PlayerCard'

export default {
  name: 'Home',
  data () {
    return {
      imglist: [
        '',
        'https://i.imgur.com/MFF46Ba.png',
        'https://i.imgur.com/5YvvV3i.png',
        'https://i.imgur.com/wMBE60f.png'
      ],
      img: '',
      dice: 0
    }
  },
  methods: {
    getDice () {
      const number = Math.ceil(Math.random() * 6)
      this.$socket.emit('getDiceNumber', number)
      this.checkAnswer()
    },
    checkAnswer () {
      console.log(this.answers)
    }
  },
  computed: {
    usersJoined () {
      return this.$store.state.usersJoined
    },
    username () {
      return this.$store.state.username
    },
    players () {
      return this.$store.state.players
    },
    answers () {
      return this.$store.state.answers
    },
    getDiceNumber () {
      return this.$store.state.getDice
    }
  },
  components: {
    PlayerCard
  }
}

</script>
