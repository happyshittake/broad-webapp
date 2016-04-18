import {broadRef} from './constants'

export function configRouter (router) {
  router.map({
    '/': {
      component: require('./components/MainMenu.vue'),
      auth: true
    },
    '/baru': {
      component: require('./components/NewRoadForm.vue'),
      auth: true
    },
    '/data': {
      component: require('./components/CardList.vue'),
      auth: true
    },
    '/login': {
      component: require('./components/Login.vue')
    },
    '/login-email': {
      component: require('./components/EmailLogin.vue')
    }
  })

  router.beforeEach((transition) => {
    const isAuthed = broadRef.getAuth()
    const loginRegex = /(login)/

    if (transition.to.auth && !isAuthed) {
      transition.redirect('/login')
    } else if (transition.to.path.match(loginRegex) && isAuthed) {
      transition.go('/')
    } else if (transition.to.path === '/logout') {
      broadRef.unauth()
      window.alert('anda sudah keluar dari aplikasi')
      transition.redirect('/login')
    } else {
      transition.next()
    }
  })
}
