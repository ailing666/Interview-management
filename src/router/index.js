// 导入
import VueRouter from 'vue-router'
import Vue from 'vue'

import Login from '@/views/Login.vue';

// 注册
Vue.use(VueRouter)

// 实例化
const router = new VueRouter({
  routes: [
    { path: '/', redirect: 'Login' },
    { path: '/Login', component: Login }
  ]
})

// 暴露
export default router

