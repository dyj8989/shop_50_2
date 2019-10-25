import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../components/Index.vue'
import Login from '../components/Login.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/index' },
  { path: '/index', name: 'index', component: Index },
  { path: '/login', name: 'login', component: Login }
]

const router = new VueRouter({
  routes
})

// 所有路由在被访问时，都会先经过全局前置守卫，只有前置守卫放行了，才能真正显示匹配的路由
// to 到哪去
// from 从哪来
// next 是否放行  next() 放行    next('/login') 拦截到登录
// 如果准备去登录, 不需要拦截
// 如果已经登录过了, 有token, 不需要拦截
// 如果不是去登陆, 且没有 token, 拦截到登录页

router.beforeEach((to, from, next) => {
  console.log(to)
  const token1 = localStorage.getItem('token1')
  if (to.path === '/login' || token1) {
    next()
  } else {
    next('/login')
  }
})

export default router
