import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Dashboard from '@/views/Dashboard.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
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
