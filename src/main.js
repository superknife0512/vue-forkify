import Vue from 'vue'
import App from './App.vue'
import store from './store'
import loader from './components/loader'
import { create } from 'domain';
import { createDecipher } from 'crypto';

Vue.config.productionTip = false;

Vue.component('loader', loader)

new Vue({
  store,
  render: h => h(App),
  created(){
    const id = window.location.hash.replace('#','');
    if(id){      
      ['hashchange', 'load'].forEach( event=> {
        window.addEventListener(event, this.$store.dispatch('fetchRecipe', id))
    })     
    }
    //restore like list when we reload pages
    if(localStorage.length > 2){

      window.addEventListener('load', ()=>{
        this.$store.commit('restore')
      })
    }
  }
}).$mount('#app')
