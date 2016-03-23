<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12" v-for="c in listJalan">
        <card :url="c.imgUrl" :title="c.nama" :body="c.keterangan" :location="c.location"></card>
      </div>
    </div>
  </div>
</template>

<script>
  import { firebaseUrl } from '../constants'
  import Firebase from 'firebase'
  import card from './Card'

  const jalanRef = new Firebase(firebaseUrl + 'jalan')

  export default {
    name: 'CardList',
    data () {
      return {
        listJalan: []
      }
    },
    ready () {
      jalanRef.limitToLast(10).on('child_added', snap => {
        this.listJalan.push(snap.val())
      })
    },
    components: {
      card
    }
  }
</script>
