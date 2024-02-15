<script>
import { store } from '../../store';
    export default{
        name:'CardsContent',
        props:{
            propsElement:Object
        },
        data(){
            return{
                store,
            }
        },
        methods:{
            changeStrFlag(language){
                if(language==='en'){
                    return 'gb'
                }else if(language==='ja'){
                    return 'jp'
                }else if(language==='fr'){
                    return 'fr'
                }else if(language==='ro'){
                    return 'ro'
                }else if(language==='it'){
                    return 'it'
                }else if(language==='pt'){
                    return 'pt'
                }
            },
            getVote(element){
                let stars
                stars=parseInt(element / 2)
                let arrayStars=Array(stars).fill(0).map(( index) => index +1)
                return arrayStars.length
            },
        }
    }

</script>

<template>
    <div class="card col-3 bg-dark text-light">
        <img :src="`${store.urlImg}/w342${propsElement.poster_path || propsElement.backdrop_path }`" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">{{ propsElement.title || propsElement.name }}</h5>
            <figure>
                <img :src="`https://flagsapi.com/${changeStrFlag(propsElement.original_language).toUpperCase()}/flat/64.png`"
                style="width: 75px;
                height: 50px;"
                alt="">
                <p>voto:{{getVote(propsElement.vote_average)}}
                    <i class=" text-warning fa-solid fa-star"
                    v-for="(element, index) in getVote(propsElement.vote_average)">

                    </i>
                </p>
            </figure>
         </div>
    </div>

</template>

<style lang="scss" scoped>


</style>