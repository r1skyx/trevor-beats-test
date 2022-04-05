import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueAudio from 'vue-audio-better'
import { store } from './store/store'

Vue.use(VueRouter);

Vue.use(VueAudio)

import './assets/main.css';
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/css/bootstrap.css';

import { library } from '@fortawesome/fontawesome-svg-core'

import { fas } from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import router from './router'



library.add(fas);

Vue.use(BootstrapVue);

Vue.config.productionTip = false


Vue.component('font-awesome-icon', FontAwesomeIcon)

new Vue({
  store:store,
  router:router,
  el:'#app',
  render: h => h(App),
})
