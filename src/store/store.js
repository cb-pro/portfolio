import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    showNav: false,
    breadcrumbsMain: 'Velkommen'
  },
  getters: {
    showNav (state) {
      return state.showNav
    }
  },
  mutations: {
    setNav (state, payload) {
      state.showNav = payload
    }
  },
  actions: {
    toggleNav (store) {
      store.commit('setNav', !store.state.showNav)
    }
  }
})
