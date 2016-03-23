require('es6-promise').polyfill()

import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import { configRouter } from './router'
import fastclick from 'fastclick'

Vue.use(VueRouter)

let router = new VueRouter()

configRouter(router)

let MainApp = Vue.extend(App)

fastclick.attach(document.body)
router.start(MainApp, '#broad')
