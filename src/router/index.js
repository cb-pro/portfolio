import Vue from 'vue'
import Router from 'vue-router'
import Intro from '@/views/Intro.vue'
import Hjem from '@/views/Home.vue'
import OmMeg from '@/views/About.vue'
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
      path: '/Hjem',
      name: 'Hjem',
      component: Hjem
    },
    {
      path: '/om-meg',
      name: 'Om meg',
      component: OmMeg
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
