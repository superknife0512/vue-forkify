<template>
    <div class="shopping">
            <h2 class="heading-2">My Shopping List</h2>

            <div class="shopping__add">
                <div class="shopping__group">

                    <input type="number" 
                            class="shopping__input-count" 
                            placeholder="count"
                            v-model="count">

                    <!-- <input type="text" 
                        class="shopping__input-unit" 
                        placeholder="unit"
                        v-model="unit"> -->
                    <select name="unit" 
                            id="unit" 
                            class="shopping__input-unit"
                            v-model="unit"
                            >
                        <option :value="unit" 
                                v-for="unit in allUnits"
                                :key="unit">
                                {{ unit }}
                        </option>
                    </select>

                </div>

                <input type="text" 
                        class="shopping__input-ingredient" 
                        placeholder="ingredient"
                        v-model="ingredient">

                <button class="shopping__add-btn"
                        @click="addMoreList">Add Item</button>
            </div>

            <ul class="shopping__list">

                
                <li class="shopping__item" 
                    v-for="list in shopList"
                    :key="list.ingredient">
                    <div class="shopping__count">
                        <input type="number"                                   
                                :step="list.count"
                                :value="list.count"
                                @input="updateCount(list.id)">
                        <p>{{list.unit}}</p>
                    </div>
                    <p class="shopping__description">{{list.ingredient}}</p>
                    <button class="shopping__delete btn-tiny"
                            @click="deleteIngre(list.id)">
                       <i class="fas fa-times-circle"></i>
                    </button>
                </li>

                
            </ul>

            <button class="shopping__clear-all btn-small"
                    @click="clearAll"
                    v-if="shopList != [] && shopList != ''">
                Clear all list
            </button>

            <div class="copyright">
                &copy;Design by Jonas Schmedtmann. Powered by
                <a href="http://food2fork.com" target="_blank" class="link">Food2Fork.com</a>.
            </div>

        </div>
</template>

<script>
export default {
    data(){
        return{
            count: '',
            unit:'tsp',
            ingredient:'',
            allUnits: ['tsp', 'tbsp', 'cup', 'oz', 'gram']
        }
    },

    computed:{
        shopList(){            
            return this.$store.state.shopList ;
        }
    },
    methods:{
        updateCount(id){
            const newVal = event.target.value;
            const payloadObj = {
                id,
                newVal
            }
            this.$store.commit('updateCount',payloadObj);
        },
        deleteIngre(id){
            this.$store.commit('deleteIngre', id);
        },
        clearAll(){
            this.$store.commit('clearData', 'shopList')
        },

        addMoreList(){
            if(this.count !== '' && this.ingredient!== ''){
               
                let count= this.count;
                let unit= this.unit;
                let ingredient= this.ingredient;
                const id = Math.random().toString(35).substr(2,8);

                let objList = {
                    id,
                    count,
                    unit,
                    ingredient                    
                }

                this.$store.commit('addMoreList', objList);
                this.count = '';
                this.ingredient = '';
            } else {
                alert('you must add full field first')
            }
        }
    }
}
</script>

<style lang="scss">
.shopping {
  padding: 3rem 4rem;
  display: flex;
  flex-direction: column; }
  .shopping__list {
    list-style: none;
    max-height: 77rem;
    overflow: scroll; }
  .shopping__item {
    display: flex;
    align-items: flex-start;
    padding: 1.3rem 0;
    border-bottom: 1px solid #F2EFEE;
    position: relative; }
  .shopping__count {
    flex: 0 0 7.5rem;
    padding: .4rem .5rem;
    border: 1px solid #F2EFEE;
    border-radius: 3px;
    margin-right: 2rem;
    cursor: pointer;
    display: flex;
    justify-content: space-between; }
    .shopping__count input {
      color: inherit;
      font-family: inherit;
      font-size: 1.2rem;
      text-align: center;
      border: none;
      width: 3.7rem;
      border-radius: 3px; }
      .shopping__count input:focus {
        outline: none;
        background-color: #F2EFEE; }
    .shopping__count p {
      font-size: 1.2rem; }
  .shopping__description {
    flex: 1;
    font-size: 1.3rem;
    margin-top: .4rem;
    margin-right: 1.5rem; }
  .shopping__delete {
    margin-top: .5rem;
    position: absolute;
    right: 0;
    background-image: linear-gradient(to right, transparent 0%, #fff 40%, #fff 100%);
    width: 3.75rem;
    padding-left: 2rem;
    visibility: hidden;
    opacity: 0;
    transition: all .5s; }
  .shopping__item:hover .shopping__delete {
    opacity: 1;
    visibility: visible; }
.shopping__clear-all{
    align-self: center;
    margin-top: 3rem;
}
.shopping{
    &__add{
        display: flex;
        flex-direction: column;
        // justify-content: space-between;
        input, .shopping__input-unit{
            
            border-radius: 4px;
            border: 1px solid rgb(218, 218, 218);
            margin-bottom: 1.2rem;
            height: 3.4rem;
            padding: .5rem;     
            color: rgb(100, 100, 100);       

            &:focus{
                outline: none;
                background-color: #eee;
            }
            &::placeholder{
                color: rgb(170, 170, 170);
            }
        }
    }
    &__input-count{
        width: 50%;
        margin-right: .5rem; 
    }
    &__group{
        display: flex;
        align-items: center;
       
    }
    &__input-unit{
        width: 50%;

    }
    &__input-ingredient{
        width: 100%;
    }
    &__add-btn{
        background-color: #f59a83;
        color: white;
        border-radius: 200px;
        border: none;
        padding: .5rem 1rem;
        align-self: center;
        transition: all .3s;
        margin-bottom: 1rem;
        cursor: pointer;

        &:hover{
            background-color: rgb(251, 188, 137);
        }
    }
}
</style>
