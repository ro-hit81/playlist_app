import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Register from '@/components/Register'
import Login from '@/components/Login'
import Songs from '@/components/Songs'
import AddSongs from '@/components/AddSongs'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path:'/songs',
    name: 'Songs',
    component: Songs
  },
  {
    path:'/songs/add',
    name: 'Songs-add',
    component: AddSongs
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
