// 导入
import VueRouter from 'vue-router'
import Vue from 'vue'

import Login from '@/views/login/Login.vue';

// 注册
Vue.use(VueRouter)

// 解决点击同一个路由报错
const VueRouterPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(to) {
  return VueRouterPush.call(this, to).catch(err => err)
}

// 实例化
const router = new VueRouter({
  routes: [
    { path: '/', redirect: 'Login' },
    { path: '/Login', component: Login }
  ]
})

// 暴露
export default router

