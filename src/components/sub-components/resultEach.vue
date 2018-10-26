<template>
    <li @click="getRecipe">
         <a class="results__link results__link" :href="`#${data.recipe_id}`">
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
export default {
    props:['data'],
    filters:{
        formatTitle(value){
            if(value.length > 17){
                const strArr = value.split(' ');
                let count = 0;
                let newTitle = [];

                strArr.forEach(word => {
                    if(word.length + count < 17){
                        count+=word.length;
                        newTitle.push(word);
                    }
                });
                return `${newTitle.join(' ')}...`
            } else {
                return value
            }
        }
    },
    methods:{
        getRecipe(){
            this.$store.dispatch('fetchRecipe',this.data.recipe_id);
        }
    }
}
</script>
