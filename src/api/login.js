import _fetch from './request'

// 获取短信验证码
export function getRcode(data) {
  return _fetch({
    url: '/sendsms',
    data,
    method: 'post'
  })
}

// 用户注册接口
export function register(data) {
  return _fetch({
    url: '/register',
    data,
    method: 'post'
  })
}

// 用户登录接口
export function userLogin(data) {
  return _fetch({
    url: '/login',
    data,
    method: 'post'
  })
}