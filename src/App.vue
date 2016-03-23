<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  import {load} from 'vue-google-maps'

  load('AIzaSyBIGd93g6aZjz1HMHW--VVPwsdvHNF2dkw', '3.23')

  export default {
    name: 'App'
  }
</script>

<style>
  #app {
    min-height: 100vh;
    display: flex;
    background: #43BCEA;
    width: 100%;
    flex-direction: column;
  }
</style>
