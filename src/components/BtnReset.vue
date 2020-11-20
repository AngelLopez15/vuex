<template>
  <button class="reset" @click="accionReset">Reset</button>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  methods: {
    ...mapActions(['accionReset'])
  },
}
</script>

<style>
  .reset{
    background-color: blue;
    color: azure;
    border-radius: 10px;
    border-color: blue;
    cursor: pointer;
  }
  .reset:focus{
    outline: none;
  }
</style>