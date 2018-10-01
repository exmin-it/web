import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    lang: navigator.language.startsWith('es') ? 'es' : 'en'
  },
  mutations: {
    change (state, language) {
      state.lang = language
    }
  }
})

export default store
