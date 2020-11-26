import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
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
  linkActiveClass: "",
  linkExactActiveClass: "",
})

export default router
