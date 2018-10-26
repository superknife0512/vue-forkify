<template>
  <header class="header">
            <img src="../assets/logo.png" alt="Logo" class="header__logo">
            <form class="search">
                <input type="text" 
                        class="search__field" 
                        placeholder="Search over 1,000,000 recipes..."
                        v-model="search">

                <button class="btn search__btn" 
                        @click.prevent="fetchData">
                    <svg class="search__icon">
                        <use href="img/icons.svg#icon-magnifying-glass"></use>
                    </svg>
                    <span>Search</span>
                </button>

            </form>
            <div class="likes">
                <div class="likes__field">
                   <i class="fas fa-heart likes__icon"></i>
                </div>
                <div class="likes__panel">
                    <ul class="likes__list">
<!--                         
                        <li>
                            <a class="likes__link" href="#23456">
                                <figure class="likes__fig">
                                    <img src="img/test-1.jpg" alt="Test">
                                </figure>
                                <div class="likes__data">
                                    <h4 class="likes__name">Pasta with Tomato ...</h4>
                                    <p class="likes__author">The Pioneer Woman</p>
                                </div>
                            </a>
                        </li>
                        -->
                    </ul>
                </div>
            </div>
        </header>
</template>

<script>
export default {
  data(){
      return{
          search: null
      }
  },
  methods:{
      fetchData(){
          this.$store.commit('clearData','results');
          this.$store.dispatch('fetchData',this.search);
          this.search = '';
      }
      
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="scss">
  .header {
  grid-area: head;
  background-color: #F9F5F3;
  display: flex;
  align-items: center;
  justify-content: space-between; }
  .header__logo {
    margin-left: 4rem;
    height: 4.5rem;
    display: block; }

.search {
  background-color: #fff;
  border-radius: 10rem;
  display: flex;
  align-items: center;
  padding-left: 3rem;
  transition: all .3s; }
  .search:focus-within {
    transform: translateY(-2px);
    box-shadow: 0 0.7rem 3rem rgba(101, 90, 86, 0.08); }
  .search__field {
    border: none;
    background: none;
    font-family: inherit;
    color: inherit;
    font-size: 1.7rem;
    width: 30rem; }
    .search__field:focus {
      outline: none; }
    .search__field::placeholder {
      color: #DAD0CC; }

.likes {
  position: relative;
  align-self: stretch;
  padding: 0 !important; }
  .likes__field {
    cursor: pointer;
    padding: 0 4rem;
    display: flex;
    align-items: center;
    height: 100%;
    transition: all .3s; }
    .likes__field:hover {
      background-color: #F2EFEE; }
  .likes__panel:hover,
  .likes__field:hover + .likes__panel {
    visibility: visible;
    opacity: 1; }
  .likes__icon {
    color: #F59A83;
    font-size: 3.75rem; }
  .likes__panel {
    position: absolute;
    right: 0;
    top: 10rem;
    z-index: 10;
    padding: 2rem 0;
    width: 34rem;
    background-color: #fff;
    box-shadow: 0 0.8rem 5rem 2rem rgba(101, 90, 86, 0.1);
    visibility: hidden;
    opacity: 0;
    transition: all .5s .2s; }
</style>
