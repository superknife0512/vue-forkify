import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

//import api food
import { api } from './apiConfig';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    results : null,
    recipe: null,
    isLoading : false,
    loadingRec :false,
  },

  mutations: {
    getResult: (state, payload)=>{
      state.results = payload;  
    },
    getRecipe(state,payload){
      state.recipe = payload;
    },
    Loading(state,stateLoading){
      state[stateLoading] = true;
    },
    noneLoading(state,stateLoading){
      state[stateLoading] = false;
    },
    clearData(state, whatData){
      state[whatData] = '';
    }
  },

  actions: {
    fetchData: async ({commit}, search)=>{
      try{
        commit('Loading','isLoading');
        const data = await axios.get(`${api.proxy}https://www.food2fork.com/api/search?key=${api.key}&q=${search}`);
        commit('getResult', data.data.recipes);
        commit('noneLoading','isLoading');
      } catch(err){
        console.log(err);
        commit('noneLoading','isLoading');
      }
    },

    fetchRecipe: async ({commit}, recipeID) => {
      try{
        commit('Loading','loadingRec');
        const recipe = await axios.get(`${api.proxy}https://www.food2fork.com/api/get?key=${api.key}&rId=${recipeID}`);
        commit('getRecipe', recipe.data.recipe);
        commit('noneLoading', 'loadingRec');

      } catch(err){
        console.log(err);
        commit('noneLoading','loadingRec');

      }
    }
  },
  getters:{
  }
})
