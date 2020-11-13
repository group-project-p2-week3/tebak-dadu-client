<template>
  <section id="login-page" class="container mt-5 pt-5">
    <div class="row mt-5 pt-5">
      <div class="col-5 m-auto">
        <div class="card card-login">
          <div class="card-body shadow">
            <h5 class="card-title text-center">LET'S PLAY</h5>
            <form @submit.prevent="login()" class="form-login">
              <div class="form-group">
                <input v-model="dataUser.username" type="text" id="username" class="form-control rounded-pill" placeholder="Input Your Username" required autofocus autocomplete="off">
              </div>
              <hr class="bg-light">
              <button class="btn btn-lg btn-primary btn-block mt-4 p-2 rounded-pill" type="submit">SUBMIT</button>
              <hr class="bg-light">
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      dataUser: {
        username: '',
        score: 0
      }
    }
  },
  methods: {
    login () {
      localStorage.setItem('username', this.dataUser.username)
      this.$socket.emit('userLogin', this.dataUser)
      this.$router.push({ path: '/' })
    }
  }
}
</script>

<style>

</style>
