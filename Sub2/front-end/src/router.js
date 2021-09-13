import Vue from 'vue'
import Router from 'vue-router'
import Loading from './views/Loading.vue'
import Main from './views/Main.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
  {
    path: '/',
    name: 'Loading',
    component: Loading
  },
  {
    path: '/Main',
    name: 'Main',
    component: Main
  },
  ]
})
