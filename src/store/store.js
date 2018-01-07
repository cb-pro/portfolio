import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    showNav: false,
    toggleText: false,
    listenToScroll: false
  },
  getters: {
    showNav (state) {
      return state.showNav
    }
  },
  mutations: {
    toggleNav (state) {
      state.showNav = !state.showNav
    }
  },
  actions: {
    toggleNav (context) {
      context.commit('toggleNav')
    }
  }
})
