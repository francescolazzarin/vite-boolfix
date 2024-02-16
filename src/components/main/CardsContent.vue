<script>
import { store } from '../../store';
    export default{
        name:'CardsContent',
        components:{
        
        },
        props:{
            propsElement:Object
        },
        data(){
            return{
                store,
                visibile:false
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
                stars=Math.ceil(element / 2)
                let arrayStars=Array(stars).fill(0).map(( index) => index +1)
                return arrayStars.length
            },
            info(){
                this.visibile=true
                console.log('mouse')
            },
            nascondi(){
                this.visibile=false
            }
        }
    }

</script>

<template>
    <div class="card col-3 bg-dark text-light position-relative"  @mouseover="info()" @mouseleave="nascondi()" >
        <div v-if="propsElement.poster_path !== null || propsElement.backdrop_path !== null">
            <img :src="`${store.urlImg}/w342${propsElement.poster_path || propsElement.backdrop_path }`" class="card-img-top" alt="..." style="height: 350px;">
        </div>
        <div v-else>
            <img class="card-img-top" alt="..." src="../../assets/img/non_presente.jpg" style="height: 350px;">
        </div>
        
        <div  class="position-absolute" v-show="visibile">
            <h5 class="card-title">{{ propsElement.title || propsElement.name }}</h5>
            <p>voto:{{getVote(propsElement.vote_average)}}
                <i class=" text-warning fa-solid fa-star"
                v-for="(element, index) in getVote(propsElement.vote_average)">
                </i>
            </p>
            <p>overview:<span>{{ propsElement.overview.slice(0, 100) }}...</span></p>
        </div>
        <div class="card-body">
            <figure>
                <img :src="`https://flagsapi.com/${changeStrFlag(propsElement.original_language).toUpperCase()}/flat/64.png`"
                style="width: 75px;
                height: 50px;"
                alt="">
            </figure>
         </div>
        <!-- <CardsContent/> -->
    </div>

</template>

<style lang="scss" scoped>
  .card:hover img{
    opacity: 0;
  }  

</style>