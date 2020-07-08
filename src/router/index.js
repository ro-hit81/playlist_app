import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Register from '@/components/Register'
import Login from '@/components/Login'
import Songs from '@/components/Songs'
import AddSongs from '@/components/AddSongs'
import ViewSong from '@/components/ViewSong'
import EditSong from '@/components/EditSong'
import UserHome from '@/components/UserHome'


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
    path: '/userhome',
    name: 'UserHome',
    component: UserHome
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
  },
  {
    path:'/songs/:songId',
    name: 'Song',
    component: ViewSong
  },
  {
    path:'/songs/:songId/edit',
    name: 'Song-edit',
    component: EditSong
  },
  {
    path: '*',
    redirect: 'Songs'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
