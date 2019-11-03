import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () => import("../page/home/home.vue");
const Fenl = () => import("../page/fenlei/fenlei");
const Fenx = () => import("../page/fenx/fenxiang");
const Cart = () => import("../page/cart/cart");

//居家分享的组件
const Book = () => import("../page/fenx/Book");
const Fen = () => import("../page/fenx/Fen");
const Xiang = () => import("../page/fenx/Xiang");
const Zhang = () => import("../page/fenx/Zhang");

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
    path: "/cart",
    component: Cart
  },
  {
    path: "/my",
    component: My
  },
  //居家分享的组件
  {
    path: "/fenx",
    component: Fenx,
    children:[
      {
        path:"fen",
        component:Fen
      },{
        path:"book",
        component:Book
      },
    ]
  },
  
  
  {
    path: "/xiang/:id",
    component: Xiang
  },
  {
    path: "/zhang/:id",
    component: Zhang
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass: "router-link-active",
  routes
})

export default router
