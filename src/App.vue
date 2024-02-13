<script>
import AppHeader from './components/header/AppHeader.vue';
import {store} from './store';
import axios from 'axios';
  export default{
    components:{
      AppHeader
    },
    data(){
      return{
        store
      }
    },
    mounted(){
      this.getFilms()
    },
    methods:{
      getFilms(){
        let apiUrl=''
        if ( store.cerca != ' ' && store.cerca.trim() !== ''){
          apiUrl=`${store.urlTmdbApi}${store.apiKey}&query=${store.cerca}`
       
          axios.get(apiUrl).then((Response)=>{
            store.arrayFilm=Response.data
          })
        }
      }
    }

  }
</script>

<template>

  <AppHeader @cercaFilm="getFilms"/>
  <ul>
    <li 
    v-if="store.arrayFilm.length!== 0"
    v-for="(element, index) in store.arrayFilm.results" 
    :key="index"
    >
    {{ element.title }},{{ element.original_title }},{{ element.original_language }},{{ element.vote_average }}
    </li>
  </ul>
</template>

<style>


</style>
