<template>
 <div class="container">
        <v-header></v-header>

        <v-result></v-result>

        <v-recipe></v-recipe>

        <v-shop-list></v-shop-list>         
    </div>
</template>

<script>
import vHeader from './components/header';
import vResult from './components/result';
import vRecipe from './components/recipe';
import vShopList from './components/shopList';

export default {
  components:{
    vHeader,
    vResult,
    vRecipe,
    vShopList,
  }
}
</script>

<style lang="scss">

  .container {
  max-width: 120rem;
  margin: 4vw auto;
  background-color: #fff;
  border-radius: 6px;
  overflow: hidden;
  box-shadow: 0 2rem 6rem 0.5rem rgba(101, 90, 86, 0.2);
  display: grid;
  grid-template-rows: 10rem minmax(100rem, auto);
  grid-template-columns: 1.1fr 2fr 1.1fr;
  grid-template-areas: "head head head" "list recipe shopping"; }
  @media only screen and (max-width: 68.75em) {
    .container {
      width: 100%;
      margin: 0;
      border-radius: 0; } }

</style>
