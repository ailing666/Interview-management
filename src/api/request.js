// 导入axios
import axios from 'axios'

// 2.创建axios副本
let _fetch = axios.create({
  // 基地址
  baseURL: process.env.VUE_APP_URL,
  //跨域携带cookie
  withCredentials: true
})

// 3.添加请求拦截器
_fetch.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 4.添加响应拦截器
_fetch.interceptors.response.use(function (response) {
  if (response.data.code === 200) {
    // 对响应数据做点什么
    return response.data;
  }
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});
// 暴露修改好的_fetch,当只需暴露一个文件时,用export default
export default _fetch