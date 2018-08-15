import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Home from '@/components/home/home'
import Welcome from '@/components/home/welcome'
Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      redirect: '/welcome',
      children: [{
        path: '/welcome',
        name: 'Welcome',
        component: Welcome
      }]
    }
  ]
})
router.beforeEach((to, from, next) => {
  // 如果访问的 login 页面，直接放行
  if (to.path === '/login') return next()
  // 获取 token 字符串
  const tokenStr = window.sessionStorage.getItem('token')
  // 如果没有 token 字符串，强制跳转到 登录页
  if (!tokenStr) return next('/login')
  // 证明有 token 字符串，直接放行
  next()
})
export default router
