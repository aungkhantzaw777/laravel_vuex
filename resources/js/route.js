import Vue from 'vue'
import Router from 'vue-router'
import testing from './components/testing.vue'
import productlist from './components/productlist.vue'
import sale from './components/sale.vue'
import product from './components/modules/product.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/testing',
      name: 'testing',
      component: testing
    },
    {
      path: '/productlist',
      name: 'productlist',
      component: productlist
    },
    {
      path:'/sale',
      name:'sale',
      component: sale
    },
    {
      path:'/',
      name:'product',
      component:product
    }

  ]
})
