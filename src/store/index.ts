import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isMobile: false
  },
  mutations: {
    'SET_IS_MOBILE' (state, payload: boolean) {
      state.isMobile = payload
    }
  },
  actions: {
    'get-is-mobile' ({ commit }) {
      commit('SET_IS_MOBILE', (window.matchMedia(`(max-width: 960px)`).matches))
    }
  },
  modules: {
  }
})
