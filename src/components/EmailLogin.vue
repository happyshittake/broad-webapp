<template>
  <div class="form-container">
    <form @submit.prevent="loginEmail">
      <div class="form-group">
        <input type="text" class="form-control" placeholder="email" v-model="email">
      </div>
      <div class="form-group">
        <input type="password" class="form-control" v-model="password">
      </div>
      <div class="form-group">
        <button type="submit" class="btn btn-primary">
          Login
        </button>
      </div>
    </form>
  </div>
</template>

<script>
  import { broadRef } from '../constants'

  export default {
    name: 'loginEmail',
    data () {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      loginEmail () {
        const self = this

        broadRef.authWithPassword({
          email: self.email,
          password: self.password
        }, (e, authData) => {
          if (e) {
            window.alert('Login Failed!', e)
          } else {
            self.$router.go('/')
          }
        })
      }
    }
  }
</script>

<style>
  .form-container {
    max-width: 400px;
    margin: 0 auto;
    margin-top: 1em;
    padding: 1.3rem;
  }
</style>
