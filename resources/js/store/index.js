import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export const store = new Vuex.Store({
    state:{
        products:[
            {id:1,name:'iphone xs max',brand:'apple',price:'999',qty:9},
            {id:2,name:'sansaung note 9',brand:'samsaung',price:'340',qty:88},
            {id:3,name:'မြန်မာ ဖုန်း',brand:'မြန်မာ',price:'340',qty:88},
            {id:4,name:'MI notebook',brand:'MI',price:'600',qty:117}
        ],
        counts:0
    },
    getters:{
        saleProducts:state=>{
            var saleProducts = state.products.map(product => {
                return {
                    name:product.name,
                    qty:product.qty - 1,
                    brand:product.brand
                }
            })
            return saleProducts
        },
        products:state=>{
            var products = state.products.map(product => {
                return {
                    name:product.name,
                    qty:product.qty,
                    brand:product.brand
                }
            })
            return products
        }
    },
    mutations:{
        increment(state){
            state.counts++
        },
        buyProduct:(state,payload) =>{
            state.products.forEach(product =>{
                
                product.qty -= payload
            })
        }
    },
    actions:{
       buyProduct:(context,payload)=>{
           setTimeout(function(){
                
                context.commit('buyProduct',payload)
           }, 1000);
            
       } 
    }
})