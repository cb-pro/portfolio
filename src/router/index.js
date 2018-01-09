import Vue from 'vue'
import Router from 'vue-router'
import Intro from '@/views/Intro.vue'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Portfolio from '@/views/Portfolio.vue'

import Test from '@/views/Test.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Intro',
      component: Intro
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/portfolio',
      name: 'Portfolio',
      component: Portfolio
    },
    {
      path: '/test',
      name: 'Test',
      component: Test
    }
  ]
})
