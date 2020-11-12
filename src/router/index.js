import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  // udah ada token mau ke /login harus diarahin ke home
  // kalo blm ada token mau ke home, langsung diarahin ke login
  // kalo udh ada token dan bukan ke login, langsung ke router tujuan

  if (to.path === '/login' && localStorage.getItem('username')) next({ name: 'Home' })
  else if (to.path === '/' && !localStorage.getItem('username')) next({ name: 'Login' })
  else next()

  // if (to.path !== '/' && !localStorage.access_token) next({ name: 'Home' })
  // else if (to.path === '/' && localStorage.access_token) next({ name: 'Dashboard' })
  // else next()
})

export default router
