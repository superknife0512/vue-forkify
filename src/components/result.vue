<template>
    <div class="results">
        <loader v-if="isLoadingRes"></loader>
            <ul class="results__list">
                <!--
                export thing here       
                -->
                <result-each v-for="result in getResults"
                            :key="result.recipe_id"
                            :data="result">

                </result-each>
            </ul>

           <result-page :totalPages="allPages" 
                        :page="page"
                        @goFront="goFront"
                        @goBack="goBack"
                        ></result-page>
            
        </div>
</template>

<script>
import resultEach from './sub-components/resultEach'
import resultPage from './sub-components/resultPage'
export default {
    data(){
        return{
            page: 1
        }
    },
    components:{
        resultEach,
        resultPage,
    },
    computed:{
        allPages(){
            const allResult = this.$store.state.results;
            if(allResult){

                return Math.ceil(allResult.length/10);
            }
            return;
        },

        getResults(){
            let start = (this.page - 1)*9;
            let end = (this.page)*9;            
            const allResults = this.$store.state.results;
            if(allResults){
                return allResults.slice(start,end);
            }
            return ;
        },

        isLoadingRes(){
            return this.$store.state.isLoading;
        },

    },
    methods:{
        goFront(){
            this.page++
        },
        goBack(){
            this.page--
        }
    }
}
</script>

<style lang="scss">
.results,
.likes {
  padding: 3rem 0; }
  .results__list,
  .likes__list {
    list-style: none; }
  .results__link:link, .results__link:visited,
  .likes__link:link,
  .likes__link:visited {
    display: flex;
    align-items: center;
    padding: 1.5rem 3rem;
    transition: all .3s;
    border-right: 1px solid #fff;
    text-decoration: none; }
  .results__link:hover,
  .likes__link:hover {
    background-color: #F9F5F3;
    transform: translateY(-2px); }
  .results__link--active,
  .likes__link--active {
    background-color: #F9F5F3; }
  .results__fig,
  .likes__fig {
    flex: 0 0 5.5rem;
    border-radius: 50%;
    overflow: hidden;
    height: 5.5rem;
    margin-right: 2rem;
    position: relative;
    backface-visibility: hidden; }
    .results__fig::before,
    .likes__fig::before {
      content: '';
      display: block;
      height: 100%;
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background-image: linear-gradient(to right bottom, #FBDB89, #F48982);
      opacity: .4; }
    .results__fig img,
    .likes__fig img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: all .3s; }
  .results__name,
  .likes__name {
    font-size: 1.3rem;
    color: #F59A83;
    text-transform: uppercase;
    font-weight: 600;
    margin-bottom: .3rem; }
  .results__author,
  .likes__author {
    font-size: 1.1rem;
    color: #968B87;
    text-transform: uppercase;
    font-weight: 600; }
  .results__pages,
  .likes__pages {
    margin-top: 3rem;
    padding: 0 3rem; }
    .results__pages::after,
    .likes__pages::after {
      content: "";
      display: table;
      clear: both; }
  .results__btn--prev,
  .likes__btn--prev {
    float: left;
    flex-direction: row-reverse; }
  .results__btn--next,
  .likes__btn--next {
    float: right; }
</style>
