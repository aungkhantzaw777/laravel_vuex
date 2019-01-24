require('./bootstrap');
import testing from './components/testing.vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import Vue from 'vue'
import App from './app.vue'
import router from './route.js'
import {store} from './store/index.js'
import headerview from './components/headerview.vue'

window.Vue = require('vue');



Vue.component('example-component', require('./components/ExampleComponent.vue').default);


new Vue({
    el: '#app',
    router,
    components: { 
      App,
      testing
    
    },
    template: '<App/>',
    store:store
  })
