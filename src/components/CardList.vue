<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12" v-for="c in listJalan">
        <card :data="c.data" :show-laporkan="showLaporkan" :key="c.key"></card>
      </div>
    </div>
    <div class="row">
      <div class="col-md-4 col-md-offset-4">
        <button class="btn btn-default btn-block" @click="loadMore">
          Load more
        </button>
      </div>
    </div>
  </div>
</template>

<script>
  import card from './Card'
  import { broadRef } from '../constants'

  export default {
    name: 'CardList',
    data () {
      return {
        listJalan: [],
        showLaporkan: broadRef.getAuth().provider === 'password',
        n: 10
      }
    },
    ready () {
      broadRef.child('jalan')
        .orderByPriority()
        .limitToFirst(this.n)
        .once('value', snap => {
          const self = this
          snap.forEach(v => {
            const newData = {
              key: v.key(),
              data: v.exportVal()
            }

            self.listJalan.push(newData)
          })
        })

      broadRef.child('jalan')
        .on('child_changed', snap => {
          const index = this.listJalan.indexOf(this.listJalan.find(a => {
            return a.key === snap.key()
          }))

          if (index !== -1) {
            this.listJalan.$set(index, {key: snap.key(), data: snap.exportVal()})
          }
        })
    },
    components: {
      card
    },
    methods: {
      loadMore () {
        this.loadData()
      },
      loadData () {
        const jalanRef = broadRef.child('jalan')
        const startAt = this.listJalan[this.listJalan.length - 1]['data']['.priority']
        jalanRef.orderByPriority()
          .startAt(startAt)
          .limitToFirst(this.n)
          .once('value', snap => {
            const self = this
            snap.forEach(v => {
              const newData = {
                key: v.key(),
                data: v.exportVal()
              }

              self.listJalan.push(newData)
            })
          })
      }
    },
    events: {
      'toggle-status': (v) => {
        console.log(v)
        broadRef.child('jalan/' + v.key + '/status').set(!v.data.status)
      }
    }
  }
</script>
