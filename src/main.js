import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import axios from 'axios'
import './assets/fonts/iconfont.css'
import './assets/css/global.css'
axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'
axios.interceptors.request.use(config => {
  // 通过拦截request请求,主动为 请求头,追加新属性 Authorization,等于 token 值
  config.headers.Authorization = window.sessionStorage.getItem('token')
  return config
})
Vue.use(ElementUI)
Vue.prototype.$http = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
