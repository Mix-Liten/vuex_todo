import Vue from 'vue'
import App from './App.vue'
import axios from './_axios'
import store from './store'
import router from './router'

Vue.config.productionTip = false

new Vue({
  axios,
  store,
  router,
  render: h => h(App)
}).$mount('#app')
