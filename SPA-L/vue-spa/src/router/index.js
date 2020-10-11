import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home'
import Order from '@/components/Orders/Order'
import OrderList from '@/components/Orders/OrderList'
import NewOrder from '@/components/Orders/NewOrder'
import Login from '@/components/Auth/Login'
import Registration from '@/components/Auth/Registration'
import Orders from '@/components/User/Orders'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    name: 'home',
    component: Home
  },
  {
    path: '/order/:id',
    name: 'order',
    component: Order
  },
  {
    path: '/list',
    name: 'list',
    component: OrderList
  },
  {
    path: '/new',
    name: 'newOrder',
    component: NewOrder
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/registration',
    name: 'reg',
    component: Registration
  },
  {
    path: '/orders',
    name: 'orders',
    component: Orders
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
