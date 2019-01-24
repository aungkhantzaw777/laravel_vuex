<template>
    <div>
        <h1>testing for product list</h1>
        <ul>
            <li :key="product" v-for="product in products">{{ product.name }}</li>
        </ul>
    </div>
</template>


<script>
import {mapGetters} from 'vuex'
import {mapActions} from 'vuex'

export default {
    name:'productlist',
    computed:{
    
      ...mapGetters([
        'products'
        
        ])
    },
}
</script>

