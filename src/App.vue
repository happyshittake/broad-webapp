<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  import {load} from 'vue-google-maps'
  import config from './secret.json'

  load(config.maps_api_key, '3.23', ['places'])

  export default {
    name: 'Broad'
  }
</script>

<style>
  #app {
    min-height: 100vh;
    display: flex;
    background: #fff;
    width: 100%;
    flex-direction: column;
  }
</style>
