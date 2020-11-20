<template>
  <div class="about">
    <h1>Esta es la página de About</h1>
    <h1>Mi contador: {{contador}}</h1>
    <hr>
    <input type="text" v-model="entrada">
    <h2>{{entrada}}</h2>
  </div>
</template>

<script>
// Importando mapState para poder acceder al Store
import {mapState} from 'vuex'

export default {
  name: 'About',
  components: {
    
  },
  // El mapState se agrega dentro de computed y se agrega con el spred operator
  // Operador de propagacion de JS
  computed:{
    // todos los state que traigamos del store deben ir dentro de un arreglo
    ...mapState(['contador'])
  },
  data(){
    return{
      entrada:''
    }
  }
}
</script>