<template>
   <div class="results__pages">
                
                <button class="btn-inline results__btn--prev">
                    <svg class="search__icon">
                        <use href="img/icons.svg#icon-triangle-left"></use>
                    </svg>
                    <span>Page 1</span>
                </button>
                <button class="btn-inline results__btn--next">
                    <span>Page 3</span>
                    <svg class="search__icon">
                        <use href="img/icons.svg#icon-triangle-right"></use>
                    </svg>
                </button>
               
            </div>          
</template>

<script>
export default {
    data(){
        return{
            page
        }
    },
    props: ['totalPages', 'page'],
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
