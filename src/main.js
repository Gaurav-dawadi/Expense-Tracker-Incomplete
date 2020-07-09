import Vue from 'vue'
// BootstrapVue in your app entry point
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

//Importing Firebase
import db from '@/firebase/init'

//For Http Request
// import VueResource from 'vue.resource'

//Routing
import VueRouter from 'vue-router'

import App from './App.vue'
// State Management
import {store} from './store/store'

// Importing rotes.js
import Routes from './routes'

//Using Firebase
Vue.use(db)

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

//Use Vue resource plugins
// Vue.use(VueResource)

// Use VueRouting
Vue.use(VueRouter)

Vue.config.productionTip = false

const router = new VueRouter({
  routes: Routes,
  mode: 'history',
});

new Vue({
  store: store,
  render: h => h(App),
  router: router,
}).$mount('#app')
