<template>
  <div id="app">
      <h1>app work</h1>
    <headerview></headerview>
    <router-view></router-view>
    <!-- <product></product> -->

    <footer-view></footer-view>
  </div>
</template>

<script>
import headerview from './components/modules/headerview.vue'
import sale from './components/sale.vue'
import footer from './components/modules/footer.vue'
import product from './components/modules/product.vue'


export default {
  name: 'App',
  components:{
    headerview,
    'footer-view':footer,
    product
  }
}
</script>

<style>

</style>
