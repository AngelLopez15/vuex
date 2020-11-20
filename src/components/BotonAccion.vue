<template>
  <!-- Este boton tendra la capacidad tanto de aumentar como de disminuir
  ademas de poder recibir la cantidad -->
  <button
    @click="accionBoton({estado:estado, numero:10})"
  >
    {{textoBoton}}
  </button>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  props: {
    estado: Boolean
  },
  computed:{
    textoBoton(){
      return this.estado ? 'Aumentar' : 'Disminuir'
    }
  },
  methods:{
    ...mapActions(['accionBoton'])
  }
}
</script>