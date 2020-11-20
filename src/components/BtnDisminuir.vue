<template>
  <!-- Si lo necesitamos podemos pasarle un parametro a accion diminuir -->
  <!-- Pero tambien debe esta declarado asi en el Storre -->
  <button class="disminuir" @click="accionDecremetar(50)" >Disminuir</button>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  methods: {
    ...mapActions(['accionDecremetar'])
  },
}
</script>

<style scoped>
  .disminuir{
    background-color: red;
    color: azure;
    border-radius: 10px;
    border-color: red;
    cursor: pointer;
  }
  .disminuir:focus{
    outline: none;
  }
</style>