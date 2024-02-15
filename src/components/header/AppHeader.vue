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
   <header class="p-3 bg-dark d-flex justify-content-between align-items-center">
    <h1 class="text-danger">Boolfix</h1>
    <div class="input-group mb-3 w-25">
        <input v-model="store.cerca" type="text" class="form-control" placeholder="Cerca" aria-describedby="button-addon2">
        <button @click="$emit('cercaFilm')" class="btn btn-outline-secondary" type="button" id="button-addon2">Cerca</button>
    </div>

   </header>
</template>

<style lang="scss" scoped>


</style>