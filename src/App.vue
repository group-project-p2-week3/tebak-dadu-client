<template>
  <div id="app " class="mt-5">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  created () {
    if (!localStorage.username) {
      this.$router.push({ name: 'Login' })
    } else {
      this.$router.push({ name: 'Home' })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Nova Round', cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
