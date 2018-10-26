import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

//import api food
import { api } from './apiConfig';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    results : null,
    isLoading : false,
  },

  mutations: {
    getResult: (state, payload)=>{
      state.results = payload;
      console.log(payload);      
    },
    Loading(state){
      state.isLoading = true;
    },
    noneLoading(state){
      state.isLoading = false;
    }
  },

  actions: {
    fetchData: async ({commit}, search)=>{
      commit('Loading');
      const data = await axios.get(`${api.proxy}https://www.food2fork.com/api/search?key=${api.key}&q=${search}`);
      commit('getResult', data.data.recipes);
      commit('noneLoading');
    }
  },
  getters:{
  }
})
