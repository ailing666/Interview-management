// 导入
import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import router from '@/router/index.js'

Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
  // 注入vue实例化对象中
  router,
  render: h => h(App),
}).$mount('#app')
