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
    shopList: [],
    likes: [],
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
    },

    addShopList(state, ingredients){
      state.shopList = ingredients;
    },

    updateCount: (state, payload)=>{
      const record = state.shopList.find( ele=> {
        return ele.id === payload.id;
      })
      record.count = payload.newVal;
    },

    deleteIngre: (state, id)=>{
      const indexItem = state.shopList.findIndex(ele=>ele.id === id);
      state.shopList.splice(indexItem, 1);
    },

    addToLikes: (state, payload)=>{
      const existLike = state.likes.find(ele=> ele.id === payload.id);
      if(!existLike){
        state.likes.push(payload);
      } else {
        state.likes.splice(state.likes.indexOf(existLike),1)
      }
      localStorage.setItem('like', JSON.stringify(state.likes));
    },

    restore(state){
      const resData = localStorage.getItem('like');
      state.likes= JSON.parse(resData);
    },

    addMoreList(state, payload){
      state.shopList.unshift(payload);
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
        //eslint-disable-next-line
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
        //eslint-disable-next-line
        console.log(err);
        commit('noneLoading','loadingRec');

      }
    }
  },
  getters:{
    checkLike: (state)=>id=>{
      return state.likes.find(ele=> ele.id === id);
    }
  }
})
