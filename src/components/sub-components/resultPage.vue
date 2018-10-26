<template>
   <div class="results__pages">
                
                <button class="btn-inline results__btn--prev" 
                        v-show="page-1 !== 0"
                        @click="back">
                    <span>Page {{ page - 1 }}</span>
                    <i class="fas fa-caret-left search__icon"></i>
                </button>
                <button class="btn-inline results__btn--next" 
                        v-show="page+1 <= totalPages"
                        @click="front">
                    <span>Page {{page + 1}}</span>
                    <i class="fas fa-caret-right search__icon"></i>
                </button>
               
            </div>          
</template>

<script>
export default {
    data(){
        return{
            
        }
    },
    props: ['totalPages', 'page'],

    methods:{
        front(){
            this.$emit('goFront');
        },
        back(){
            this.$emit('goBack');
        }
    }
}
</script>

<style lang="scss">
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
