import Vue from 'vue'
import App from './App.vue'
import store from './store'
import loader from './components/loader'

Vue.config.productionTip = false;

Vue.component('loader', loader)

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
