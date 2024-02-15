<script>
import AppHeader from './components/header/AppHeader.vue';
import AppMain from './components/main/AppMain.vue'
import {store} from './store';
import axios from 'axios';
  export default{
    components:{
      AppHeader,
      AppMain
    },
    data(){
      return{
        store
      }
    },
    mounted(){
      this.search()
    },
    methods:{
      search(){
        if ( store.cerca != ' ' && store.cerca.trim() !== ''){
          let apiUrlFilm=`${store.urlFilm}${store.apiKey}&query=${store.cerca}`
          axios.get(apiUrlFilm).then((res)=>{
            store.arrayFilm=res.data.results
          })
          let apiUrlSeries=`${store.urlSeries}${store.apiKey}&query=${store.cerca}`
          axios.get(apiUrlSeries).then((res)=>{
            store.arraySeries=res.data.results
            // console.log(apiUrlSeries)
          })
        }
      }
    }

  }
</script>

<template>

  <AppHeader @cercaFilm="search"/>
  <AppMain/>

</template>

<style lang="scss">


</style>
