import Vue from 'vue'
import App from './App'
import router from './router'

// ADD BOOTSTRAP / BOOTSTRAP-VUE
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
