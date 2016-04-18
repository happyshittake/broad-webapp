<template>
  <div class="row container-list">
    <div class="col-md-4 col-md-offset-4 col-xs-12">
      <map
          :center="data.location"
          :zoom="15"
          :options="option"
          >
        <marker
          :position="data.location"
          :clickable="false"
          :draggable="false"
        >
        </marker>
      </map>
      <div class="thumbnail">
        <img :src="data.imgUrl" class="img-responsive img-jalan" />
        <div class="caption">
          <h3>{{ data.alamat }}</h3>
          <h4>{{ data.nama }}</h4>
          <p>
            {{ data.keterangan }}
          </p>
        </div>
        <div class="status">
          <span class="label label-success" v-if="data.status">
            Telah Dilaporkan <i class="ion-checkmark-round"></i>
          </span>
          <span class="label label-warning" v-else>
            Belum Dilaporkan <i class="ion-alert-circled"></i>
          </span>
          <button class="btn btn-success btn-label" v-if="showLaporkan && !data.status" @click="toggleStatus(key, data)">
            Laporkan!
          </button>
          <button class="btn btn-warning btn-label" v-if="showLaporkan && data.status" @click="toggleStatus(key, data)">
            Undo!
          </button>
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
    z-index: 0;
  }

  .container-list {
    margin-top: 30px;
  }

  .img-jalan {
    max-height: 500px;
  }

  .btn.btn-label {
    padding: .2em .6em .3em;
    margin-left: .5em;
  }
</style>

<script>
  import {Map, Marker} from 'vue-google-maps'

  export default {
    name: 'RoadCard',
    props: ['data', 'showLaporkan', 'key'],
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
    },
    methods: {
      toggleStatus (key, data) {
        this.$dispatch('toggle-status', {key, data})
      }
    }
  }
</script>
