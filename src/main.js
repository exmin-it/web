import Vue from 'vue'
import App from './App.vue'
import VueScrollTo from 'vue-scrollto'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import store from '@/store'

library.add(fas, fab)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(VueScrollTo)

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
