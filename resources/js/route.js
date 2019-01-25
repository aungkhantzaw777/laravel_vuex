import Vue from 'vue'
import Router from 'vue-router'
import testing from './components/testing.vue'
import productlist from './components/productlist.vue'
import sale from './components/sale.vue'
import product from './components/modules/product.vue'
import aboutus from './components/modules/aboutus.vue'
import contact from './components/modules/contact.vue'
import login from './components/modules/login.vue'
import home from './components/admin_modules/home.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {path: '/testing', name: 'testing',component: testing},
    {path: '/productlist',name: 'productlist',component: productlist},

    {path:'/sale',name:'sale',component: sale},
    {path:'/', name:'product',component:product},
    {path:'/aboutus',name:'product',component:aboutus},
    {path:'/contact',name:'contact',component:contact},
    {
      path:'/admin',
      name:'admin',
      component:login,
      children: [
        { path: 'home', component: home }
      ]
    }

  ]
})
