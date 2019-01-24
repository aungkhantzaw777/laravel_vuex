import Vue from 'vue'
import Router from 'vue-router'
import testing from '@/components/testing.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'testing',
      component: testing
    },
    {
      path: '/sale',
      name: 'sale',
      component: testing
    }
    
  ]
})
