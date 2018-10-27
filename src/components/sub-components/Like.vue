<template>
    <div>
        <li v-for='like in getLikes' 
            :key="like.id"
            @click="getRecipe(like.id)">
            <a class="likes__link" :href="`#${like.id}`">
                <figure class="likes__fig">
                    <img :src="like.image" :alt="like.title">
                </figure>
                <div class="likes__data">
                    <h4 class="likes__name">{{like.title | formatTitle}}</h4>
                    <p class="likes__author">{{like.author}}</p>
                </div>
            </a>
        </li>
    </div>
</template>

<script>
import { mixinFilter } from '../../mixinFilter'
export default {
    mixins:[mixinFilter],  
    computed:{
        getLikes(){
            return this.$store.state.likes;
        }
    },
    methods:{
        getRecipe(id){
            this.$store.commit('clearData', 'recipe');
            this.$store.dispatch('fetchRecipe', id)
        }
    }
}
</script>

<style lang="scss">

</style>


