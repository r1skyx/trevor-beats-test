import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import shoppingCart from '../views/shoppingCart'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    name:'Home',
    component: Home
  },
  {
  path:'/shopping-cart',
  name:'Shopping Cart',
  component: shoppingCart
}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
