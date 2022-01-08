import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  {
    path: '/', component: () => import( '../views/header.vue'),
    children: [
      { path: '/vgcnpage', component: () => import('../views/vgcnpage.vue') },
      { path: '/vgcnofficial', component: () => import('../views/vgcnofficial.vue')},
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
