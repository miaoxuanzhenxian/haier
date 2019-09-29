import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import store from './store.js'
import './assets/css/layout.css'
import './assets/css/font/iconfont.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
