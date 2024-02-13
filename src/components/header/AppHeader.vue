<script>
import { store } from '../../store';
  export default{
    name:'AppHeader',
    data(){
        return{
            store
        }
    },
    components:{
        
    }
  }
</script>

<template>
   <header class="p-3 bg-dark">
 
        <div class="input-group mb-3">
            <input v-model="store.cerca" type="text" class="form-control" placeholder="Cerca" aria-describedby="button-addon2">
            <button @click="$emit('cercaFilm')" class="btn btn-outline-secondary" type="button" id="button-addon2">Cerca</button>
        </div>

   </header>
</template>

<style>


</style>