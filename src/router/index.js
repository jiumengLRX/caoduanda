import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () => import("../page/home/home.vue");
const Fenl = () => import("../page/fenlei/fenlei");
const Fenx = () => import("../page/fenx/fenxiang");
const Cart = () => import("../page/cart/cart");


const Order = () => import("../page/my/Order");
const Coupon = () => import("../page/my/Coupon");
const About = () => import("../page/my/About");






import My from '../page/my/my';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: "/home"
  },
  {
    path:"/home",
    component:Home
  },
  {
    path: "/fenlei",
    component: Fenl
  },
  {
    path: "/fenx",
    component: Fenx
  },
  {
    path: "/cart",
    component: Cart
  },
  {
    path: "/my",
    component: My
  },
  {
    path: "/order",
    component:  Order 
  },{
    path: "/coupon",
    component: Coupon
  },{
    path: "/about",
    component: About
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass: "router-link-active",
  routes
})

export default router
