<script>
import { store } from '../../store';
import CardsContent from './CardsContent.vue';
    export default{
        name:'AppMain',
       
        components:{
            CardsContent
        },
        data(){
            return{
                store
            }
        }
    }
    

</script>

<template>
    <main class="bg-dark">
        <div class="row">
            <h3 class="text-danger">films</h3>
            <CardsContent
            v-for="(element, index) in store.arrayFilm"
            :key="index"
            :propsElement="element"/>
        </div>
        <div class="row">
            <h3 class="text-danger">series</h3>
            <CardsContent
            v-for="(element, index) in store.arraySeries"
            :key="index"
            :propsElement="element"/>
        </div>
    </main>
</template>

<style lang="scss" scoped>

</style>