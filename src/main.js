import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import axios from 'axios'
import './assets/fonts/iconfont.css'
import './assets/css/global.css'
axios.defaults.baseURL = 'https://www.escook.cn:8888/api/private/v1/'
Vue.use(ElementUI)
Vue.prototype.$http = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
