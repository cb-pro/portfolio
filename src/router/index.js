import Vue from 'vue'
import Router from 'vue-router'
import Intro from '@/views/Intro.vue'
import Identitet from '@/views/Identitet.vue'
import OmMeg from '@/views/About.vue'
import Portfolio from '@/views/Portfolio.vue'
import Ullernklinikken from '@/components/Portfolio-ullernklinikken.vue'
import mInvoice from '@/components/Portfolio-minvoice.vue'
import FraUngdommen from '@/components/Portfolio-fra_ungdommen.vue'
import Busemannen from '@/components/Portfolio-busemannen.vue'
import Kollektivbryggeriet from '@/components/Portfolio-kollektivbryggeriet.vue'

// import Test from '@/views/Test.vue'

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
      path: '/identitet',
      name: 'Identitet',
      component: Identitet
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
      path: '/portfolio/ullernklinikken',
      name: 'Ullernklinikken',
      component: Ullernklinikken
    },
    {
      path: '/portfolio/minvoice',
      name: 'mInvoice',
      component: mInvoice
    },
    {
      path: '/portfolio/fra-ungdommen',
      name: 'Fra Ungdommen',
      component: FraUngdommen
    },
    {
      path: '/portfolio/busemannen',
      name: 'Busemannen',
      component: Busemannen
    },
    {
      path: '/portfolio/kollektivbryggeriet',
      name: 'Kollektivbryggeriet',
      component: Kollektivbryggeriet
    }
    // {
    //   path: '/test',
    //   name: 'Test',
    //   component: Test
    // }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
