import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null
  },
  getters: {
    authenticated(state) {
      return !!state.user; /** This returns the user state as a boolean */
    }
  },
  mutations: {
    setUser(state, user) {
      state.user = user
    }
  },
  actions: {
  },
  modules: {
  }
})
