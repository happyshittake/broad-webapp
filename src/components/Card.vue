<template>
  <div class="row container-list">
    <div class="col-md-6 col-md-offset-3">
      <map
          :center="location"
          :zoom="15"
          :options="option"
          >
        <marker
          :position="location"
          :clickable="false"
          :draggable="false"
        >
        </marker>
      </map>
      <div class="thumbnail">
        <img :src="url" class="img-responsive" />
        <div class="caption">
          <h3>{{ title }}</h3>
          <p>
            {{ body }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  map {
    width:100%;
    height: 200px;
    display: block;
  }

  .container-list {
    margin-top: 30px;
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
    },
    data () {
      return {
        option: {
          disableDefaultUI: true,
          draggable: false
        }
      }
    }
  }
</script>
