import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '@/views/Login.vue'

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
  },
  {
    path: '/:username',
    name: 'Channel',
    props: true,
    component: () => import(/* webpackChunkName: "about" */ '../views/Channel.vue')
  }
]

const router = new VueRouter({
  routes,
  mode: 'history',
  linkActiveClass: null,
  linkExactActiveClass: null,
})

export default router
