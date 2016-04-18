<template>
  <div class="form-container">
    <form v-on:submit.prevent="saveForm">
      <div class="form-group">
        <label for="nama">
          Nama
        </label>
        <input type="text" class="form-control" v-model="nama" id="nama" v-el:nama>
      </div>
      <div class="form-group">
        <label for="alamat">
          Alamat
        </label>
        <input type="text" class="form-control" v-model="alamat" v-el:alamat>
      </div>
      <div class="form-group">
        <label for="keterangan">
          Keterangan
        </label>
        <textarea v-model="keterangan" class="form-control" rows="8" cols="40" v-el:keterangan></textarea>
      </div>
      <div class="form-group">
        <div class="row">
          <div class="col-xs-12">
            <label for="image" class="image-label">
              Pilih Gambar
            </label>
            <input type="file" class="form-control" accept="image/*" v-el:image id="image">
          </div>
        </div>
      </div>
      <div class="form-group">
        <div class="row">
          <div class="col-xs-12">
            <map
                :center.sync="center"
                :zoom.sync="15"
                @g-click="mapClicked">
              <marker
                :position.sync="location"
                :clickable.sync="true"
                :draggable.sync="true"
                @g-click="center=location"
              >
              </marker>
            </map>
          </div>
        </div>
      </div>
      <div class="form-group">
        <div class="row">
          <div class="col-xs-12 col-md-9">
            <button type="submit" class="btn btn-primary">
              Save
            </button>
            <a v-link="{path: '/'}" class="btn btn-warning">Kembali</a>
          </div>
          <div class="col-xs-12 col-md-3">
            <h6 v-show="saving">
              Submitting...
            </h6>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
  import {Map, Marker} from 'vue-google-maps'
  import { uploadImage } from '../services/api'
  import { getLocation } from '../services/location'
  import { persistRoad } from '../services/firebase'
  import { broadRef } from '../constants'
  import Firebase from 'firebase'

  export default {
    name: 'NewRoadForm',
    data () {
      return {
        nama: '',
        keterangan: '',
        alamat: '',
        location: {
          lat: 10,
          lng: 10
        },
        center: {
          lat: 10,
          lng: 10
        },
        saving: false
      }
    },
    methods: {
      saveForm () {
        const newRoad = {
          nama: this.nama,
          alamat: this.alamat,
          keterangan: this.keterangan,
          image: this.$els.image.files[0],
          location: this.location
        }

        this.saving = true
        let self = this

        uploadImage(newRoad.image)
          .then(res => res.json())
          .then(body => {
            const data = {
              nama: newRoad.nama,
              alamat: newRoad.alamat,
              keterangan: newRoad.keterangan,
              imgUrl: body.url,
              location: newRoad.location,
              status: false,
              timestamp: Firebase.ServerValue.TIMESTAMP
            }

            persistRoad(data)
            self.saving = false
            window.alert('data berhasil disimpan')
            self.$router.go('/')
          })
      },
      mapClicked (arg) {
        this.location.lat = this.center.lat = arg.LatLng.lat()
        this.location.lng = this.center.lng = arg.LatLng.lng()
      }
    },
    ready () {
      let self = this
      getLocation(pos => {
        self.center.lat = self.location.lat = pos.coords.latitude || 10
        self.center.lng = self.location.lng = pos.coords.longitude || 10
      })
    },
    attached () {
      const authData = broadRef.getAuth()
      authData.provider === 'password' ? this.nama = '' : this.nama = authData[authData.provider].displayName
    },
    detached () {
      this.nama = ''
    },
    components: {
      map: Map,
      marker: Marker
    }
  }
</script>

<style scoped>
  .form-container {
    max-width: 400px;
    margin: 0 auto;
    margin-top: 1em;
    padding: 1.3rem;
  }

  map {
    width:100%;
    height: 400px;
    display: block;
  }
</style>
