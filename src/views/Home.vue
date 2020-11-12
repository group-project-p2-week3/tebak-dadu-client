<template>
  <div class="home">
    <div class="container">
      <h1>Disini tempat gambar dice gitu</h1>
    </div>
    <br>
    <div class="container bg-light shadow" style="height:30vh">
      <div>
        <ul v-for="(answer, i) in answers" :key="i">
          <li>{{answer.username}}</li>
          <li>{{answer.answer}}</li>
        </ul>
      </div>
    </div>
    <br>
    <div class="row">
      <PlayerCard
        v-for="(player, i) in players"
        :key="i"
        :player="player"
      />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import PlayerCard from '../components/PlayerCard'

export default {
  name: 'Home',
  computed: {
    players () {
      return this.$store.state.players
    },
    answers () {
      return this.$store.state.answers
    }
  },
  components: {
    PlayerCard
  }
}

</script>
