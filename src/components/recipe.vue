<template>
    <div v-if="recipe">            
            <figure class="recipe__fig">
                <img :src="recipe.image_url" alt="Tomato" class="recipe__img">
                <h1 class="recipe__title">
                    <span>{{recipe.title}}</span>
                </h1>
            </figure>
            <div class="recipe__details">
                <div class="recipe__info">
                    
                    <i class="fas fa-stopwatch recipe__info-icon"></i>
                    <span class="recipe__info-data recipe__info-data--minutes">{{time}}</span>
                    <span class="recipe__info-text"> minutes</span>
                </div>
                <div class="recipe__info">
                    <i class="fas fa-users recipe__info-icon"></i>
                    <span class="recipe__info-data recipe__info-data--people">{{serving}}</span>
                    <span class="recipe__info-text"> servings</span>

                    <div class="recipe__info-buttons">
                        <button class="btn-tiny" @click="changeServing('incr')">
                           <i class="fas fa-plus-circle"></i>
                        </button>
                        <button class="btn-tiny" @click="changeServing('decr')">
                            <i class="fas fa-minus-circle"></i>
                        </button>
                    </div>

                </div>
                <button class="recipe__love" @click="addToLikes()">                    
                    <i :class="checkLike? 'fas':'far'" class="fa-heart heart__likes"></i>
                </button>
            </div>



            <div class="recipe__ingredients">
                <ul class="recipe__ingredient-list">
                    <li class="recipe__item" 
                        v-for="ing in parseIngredient" 
                        :key="ing.ingredient">
                        
                        <i class="fas fa-utensils recipe__icon"></i>
                        <div class="recipe__count">{{ing.count | formatCount}}</div>
                        <div class="recipe__ingredient">
                            <span class="recipe__unit">{{ing.unit}}</span>
                            {{ing.ingredient}}
                        </div>
                    </li>

                    
                </ul>

                <button class="btn-small recipe__btn"
                        @click="addShopList()">
                    <i class="fas fa-shopping-cart search__icon"></i>
                    <span>Add to shopping list</span>
                </button>
            </div>

            <div class="recipe__directions">
                <h2 class="heading-2">How to cook it</h2>
                <p class="recipe__directions-text">
                    This recipe was carefully designed and tested by
                    <span class="recipe__by">{{recipe.publisher}}</span>. Please check out directions at their website.
                </p>
                <a class="btn-small recipe__btn" :href="recipe.source_url" target="_blank">
                    <span>Directions</span>
                   <i class="fas fa-caret-right search__icon"></i>

                </a>
            </div>           
        </div>
</template>

<script>
import { Fraction } from 'fractional';

export default {
    /* eslint-disable */ 
    data(){
        return{
            serving: 4
        }
    },

    computed:{
        recipe(){
            const recipeData = this.$store.state.recipe;
            if(recipeData){
                return recipeData
            }
            return;
        },

        time(){
            const ingredients = this.recipe.ingredients;
            return (ingredients.length/3) * 15;
        },

        parseIngredient(){
            const ingredients = this.recipe.ingredients;
            const longUnit = ['tablespoon', 'tablespoons', 'tbsps', 'teaspoon', 'teaspoons', 'tsps', 'cup', 'cups', 'ounces'];
            const shortUnit = ['tbsp', 'tbsp', 'tbsp', 'tsp', 'tsp', 'tsp', 'cup', 'cup', 'oz'];
            const otherUnit = ['gram', 'pound', 'pounds'];
            //standalize
            const newIngredient = ingredients.map( ele => { //each ele is a string
            
            //uniform the unit
            longUnit.forEach( (ele2, i)=>{
                ele = ele.replace(ele2, shortUnit[i]);
            })
            
            ele = ele.replace(/ *\([^)]*\) */g, " ");

            //change it into an object
            let ingreArr = ele.split(' ');//['2', 'cup', 'tomatoes']
            //find index from of the unit
            let indexCount = ingreArr.findIndex( ele3 => {
                return [...shortUnit, ...otherUnit].includes(ele3);
            })

            let objIng;
            //can find out any unit 
            if(indexCount === -1){

                if(isNaN(parseInt(ingreArr[0]))){
                    //1.1 no count no unit indexCount = -1
                    objIng = {
                        count: 1,
                        unit: '',
                        ingredient: ingreArr.join(' ')
                    }
                } else{
                    //1.2 have count but no unit indexCount = -1
                    objIng = {
                        count: parseInt(ingreArr[0]),
                        unit: '',
                        ingredient: ingreArr.slice(1, ingreArr.length).join(' ')
                    }
                }
            } else if (indexCount > 0){
                //2.1 have count and unit
                //2.2 have weird count 1-1/2 and its unit
                //2.3 have weird like 1 1/2 and its unit
                //['2-1/2', 'cup', 'tomatoes']
                //['2', '1/2', 'cup', 'tomatoes'] -> [2, 1/2] -> 2+1/2
                if(indexCount === 2 ){
                    let count = eval((ingreArr.slice(0, indexCount)).join('+'));
                    let unit = ingreArr[indexCount];
                    
                    objIng={
                        count,
                        unit,
                        ingredient: ingreArr.slice(indexCount+1, ingreArr.length).join(' ')
                    }
                } else if (indexCount === 1){
                    let count;
                    if(ingreArr[0].includes('-')){
                        count = eval(ingreArr[0].split('-').join('+'));
                    }
                    count = parseInt(ingreArr[0]);
                    let unit = ingreArr[indexCount];

                    objIng = {  
                        count,
                        unit,
                        ingredient: ingreArr.slice(indexCount+1, ingreArr.length).join(' ')
                    }
                }
            } 
            return objIng;
        })
        return newIngredient

        }, 
        
        checkLike(){
            return this.$store.getters.checkLike(this.recipe.recipe_id);
        }
    },

    methods: {
        //increase serving methods
        changeServing(type){
                let newSering;
                if(type === 'incr'){
                    newSering = this.serving + 1;
                } else if (type === 'decr'){
                    if(this.serving > 1){
                        newSering = this.serving - 1;
                    } else {
                        return false;
                    }
                }
                this.parseIngredient.forEach(ele => {
                    ele.count*=(newSering/this.serving)
                })           
                this.serving = newSering;
        },
        addShopList(){
            const ingre = this.parseIngredient;
            // const shopList = {
            //     count: ingre.count,
            //     unit: ingre.unit,
            //     ingredient: ingre.ingredient,
            //     id: Math.random().toString(35).substr(2,8)
            // }
            const shopList = ingre.map( ele=> {
                return {
                    count: ele.count,
                    unit: ele.unit,
                    ingredient: ele.ingredient,
                    id: Math.random().toString(35).substr(2,8)
                }
            })
            this.$store.commit('clearData', 'shopList');
            this.$store.commit('addShopList', shopList);
        },
        addToLikes(){
            const recipe = this.recipe;
            const like = {
                id: recipe.recipe_id,
                title: recipe.title,
                author: recipe.publisher,
                image: recipe.image_url
            }
            this.$store.commit('addToLikes', like)
        }
    },

    filters:{
        formatCount(value){
            const strCount = value.toString()
            //count = 2 integer
            //1.2 count = 0.5 no integer
            //1.3 count = 2.5 have integer and decimal
            if(strCount.includes('.')){
                let [integer, decimal] = strCount.split('.'); //['0','5']
                if(integer == 0){
                    const newNumber = new Fraction(value);
                    const numerator = Math.round(newNumber.numerator*1000)/1000;
                    const denominator = Math.round(newNumber.denominator*1000)/1000;
                    return `${numerator}/${denominator}`
                } else if (integer != 0){
                    const remainDeci = value - parseInt(integer);
                    const newNumber = new Fraction(remainDeci);
                    const numerator = Math.round(newNumber.numerator*1000)/1000;
                    const denominator = Math.round(newNumber.denominator*1000)/1000;
                    return `${parseInt(integer)} ${numerator}/${denominator}`
                }
            }
            return value;
        }
    }
}
</script>

<style lang="scss">
.recipe {
  background-color: #F9F5F3;
  border-top: 1px solid #fff; }
  .recipe__fig {
    height: 30rem;
    position: relative;
    transform: scale(1.04) translateY(-1px);
    transform-origin: top; }
    .recipe__fig::before {
      content: '';
      display: block;
      height: 100%;
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background-image: linear-gradient(to right bottom, #FBDB89, #F48982);
      opacity: .6; }
  .recipe__img {
    width: 100%;
    display: block;
    height: 100%;
    object-fit: cover; }
  .recipe__title {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 20%) skewY(-6deg);
    color: #fff;
    font-weight: 700;
    font-size: 2.75rem;
    text-transform: uppercase;
    width: 70%;
    line-height: 1.95;
    text-align: center; }
    .recipe__title span {
      -webkit-box-decoration-break: clone;
      box-decoration-break: clone;
      padding: 1.3rem 2rem;
      background-image: linear-gradient(to right bottom, #FBDB89, #F48982); }
  .recipe__details {
    display: flex;
    align-items: center;
    padding: 8rem 3rem 3rem 3rem; }
  .recipe__info {
    font-size: 1.5rem;
    text-transform: uppercase;
    display: flex;
    align-items: center; }
    .recipe__info:not(:last-child) {
      margin-right: 4rem; }
  .recipe__info-icon {
    height: 2rem;
    width: 2rem;
    color: #F59A83;
    margin-right: 1rem; }
  .recipe__info-data {
    margin-right: .4rem;
    font-weight: 600; }
  .recipe__info-buttons {
    display: flex;
    margin-left: 1.5rem;
    visibility: hidden;
    opacity: 0;
    transform: translateY(5px);
    transition: all .4s; }
  .recipe:hover .recipe__info-buttons {
    visibility: visible;
    opacity: 1;
    transform: translateY(0); }
  .recipe__love {
    background-image: linear-gradient(to right bottom, #FBDB89, #F48982);
    border-radius: 50%;
    border: none;
    cursor: pointer;
    height: 4.5rem;
    width: 4.5rem;
    margin-left: auto;
    transition: all .2s;
    display: flex;
    align-items: center;
    justify-content: center; }
    .recipe__love:hover {
      transform: scale(1.07); }
    .recipe__love:focus {
      outline: none; }
    .recipe__love svg {
      height: 2.75rem;
      width: 2.75rem;
      fill: #fff; }
  .recipe__ingredients {
    padding: 4rem 5rem;
    font-size: 1.5rem;
    line-height: 1.4;
    background-color: #F2EFEE;
    display: flex;
    flex-direction: column;
    align-items: center; }
  .recipe__ingredient-list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 1.5rem;
    grid-row-gap: 2.5rem;
    list-style: none;
    margin-bottom: 3rem; }
  .recipe__item {
    display: flex; }
  .recipe__icon {
    height: 1.8rem;
    width: 1.8rem;
    fill: #F59A83;
    border: 1px solid #F59A83;
    border-radius: 50%;
    padding: 2px;
    margin-right: 1rem;
    flex: 0 0 auto;
    margin-top: .1rem; }
  .recipe__count {
    margin-right: .5rem;
    flex: 0 0 auto; }
  .recipe__directions {
    padding: 4rem;
    padding-bottom: 5rem;
    display: flex;
    flex-direction: column;
    align-items: center; }
  .recipe__directions-text {
    font-size: 1.5rem;
    text-align: center;
    width: 90%;
    margin-bottom: 3rem;
    color: #968B87; }
  .recipe__by {
    font-weight: 700; }
    .heart__likes{
        color: white;
        font-size: 2.5rem;
    }
    .recipe__icon{
        color: #F59A83;
        font-size: 1rem;
        display: flex;
        justify-content: center;
    }
</style>

