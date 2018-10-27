<template>
    <li @click="getRecipe(data.recipe_id)">
         <a class="results__link results__link" 
            :href="`#${data.recipe_id}`"
            :class="{'results__link--active': isActive === data.recipe_id}">
            <figure class="results__fig">
                 <img :src="`${data.image_url}`" :alt="`${data.title}`">
             </figure>
            <div class="results__data">
                <h4 class="results__name">{{ data.title | formatTitle }}</h4>
                 <p class="results__author">{{ data.publisher }}</p>
            </div>
        </a>
    </li>
</template>

<script>
import { mixinFilter } from '../../mixinFilter'
export default {  
    
    mixins:[mixinFilter],    
    props:['data', 'isActive'],
    methods:{
        getRecipe(id){
            this.$emit('changeActive', id)
            this.$store.commit('clearData', 'recipe');
            this.$store.dispatch('fetchRecipe',this.data.recipe_id);
        }
    }
}
</script>
