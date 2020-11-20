<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- Esta es la fomra correcta de acceder a un state del store
    para eso debemos ya haber traido el state con mapState -->
    <h1
      :style="colorContador"
    >
      {{titulo}} : {{contador}}
    </h1>
    <button class="aumentar" @click="accionIncrementar(50)" >Aumentar</button>
    <BtnDisminuir />
    <BtnReset />
    <hr>
    <!-- Para que el boton pueda aumentar y disminuir se puede uilizar las props -->
    <BotonAccion :estado="true" />
    <BotonAccion :estado="false" />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

// Importando mapState para poder acceder al Store
import {mapActions, mapMutations, mapState} from 'vuex'
import BtnDisminuir from '../components/BtnDisminuir'
import BtnReset from '../components/BtnReset'
import BotonAccion from '../components/BotonAccion'


export default {
  name: 'Home',
  components: {
    BtnDisminuir,
    BtnReset,
    BotonAccion
  },
  data() {
    return {
      titulo: "Mi contador con  Vuex"
    }
  },
  // El mapState se agrega dentro de computed y se agrega con el spred operator
  // Operador de propagacion de JS
  computed:{
    // todos los state que traigamos del store deben ir dentro de un arreglo
    // los datos que traigamos del store NO debemos de pasarlos a data() 
    ...mapState(['contador']),
    colorContador(){
      return [this.contador < 100 ? {'color': 'red'} : {'color': 'green'}]
    }
  },
  methods: {
    // tanto las mutaciones como las acciones e mapean en metodos
    // Aunque se puede muy rara vez se pude ver el mapMutations ya que no es comendable
    // ejecutar la mutacion directamente. Para eso estan las acciones
      ...mapMutations(['incrementar']),
      ...mapActions(['accionIncrementar'])
  },
}
</script>

<style scoped>
  .aumentar{
    background-color: green;
    color: azure;
    border-radius: 10px;
    border-color: green;
    cursor: pointer;
  }
  .aumentar:focus{
    outline: none;
  }
</style>