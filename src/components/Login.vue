<template>
  <div class="login_container">
    <div class="login_buttons">
      <button class="btn blue" @click="loginWithTwitter">
        <i class="ion-social-twitter"></i> Login with twitter
      </button>
      <button class="btn red" @click="loginWithFacebook">
        <i class="ion-social-facebook"></i> Login with facebook
      </button>
    </div>
  </div>
</template>

<style scoped>
  .login_container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
  }

  .login_buttons {
    display: flex;
    align-items: center;
    flex-direction: column;
    flex-basis: 50%;
  }

  .login_buttons > .btn {
    width: 100%;
    margin: 5px 0;
    padding: 30px;
    font-size: 4rem;
  }
</style>

<script>
  import { broadRef } from '../constants'

  export default {
    name: 'LoginPage',
    methods: {
      loginWithTwitter () {
        let self = this
        broadRef.authWithOAuthPopup('twitter', (e, authData) => {
          if (e) {
            if (e.code === 'TRANSPORT_UNAVAILABLE') {
              broadRef.authWithOAuthRedirect('twitter', e => {
                if (e) {
                  window.alert(`Login Error code: ${e.code}`)
                }
              })
            }
          } else if (authData) {
            self.$router.go('/')
          }
        })
      },
      loginWithFacebook () {
        let self = this
        broadRef.authWithOAuthPopup('facebook', (e, authData) => {
          if (e) {
            if (e.code === 'TRANSPORT_UNAVAILABLE') {
              broadRef.authWithOAuthRedirect('facebook', e => {
                if (e) {
                  window.alert(`Login Error code: ${e.code}`)
                }
              })
            }
          } else if (authData) {
            self.$router.go('/')
          }
        })
      }
    },
    ready () {
      let self = this
      broadRef.onAuth(authData => {
        if (authData) {
          self.$router.go('/')
        }
      })
    }
  }
</script>
