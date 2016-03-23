<template>
  <div class="row">
    <div class="col-md-6">
      <div class="thumbnail">
        <img :src="url"/>
        <div class="caption">
          <h3>{{ title }}</h3>
          <p>
            {{ body }}
          </p>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <map
          :center.sync="location"
          :zoom.sync="15">
        <marker
          :position.sync="location"
          :clickable.sync="false"
          :draggable.sync="false"
        >
        </marker>
      </map>
    </div>
  </div>
</template>

<style scoped>
  map {
    width:100%;
    height: 400px;
    display: block;
  }
</style>

<script>
  import {Map, Marker} from 'vue-google-maps'

  export default {
    name: 'RoadCard',
    props: ['url', 'title', 'body', 'location'],
    components: {
      map: Map,
      marker: Marker
    }
  }
</script>
