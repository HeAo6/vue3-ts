import { createRouter, createWebHashHistory } from 'vue-router'
//导入路由规则
import type { RouteRecordRaw } from 'vue-router'
import localCache from '@/utils/cache'
import { firstMenu } from '@/utils/map-menus'
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/main'
  },
  {
    name: 'login',
    path: '/login',
    component: () => import('@/views/login/index.vue')
  },
  {
    name: 'main',
    path: '/main',
    component: () => import('@/views/main/index.vue')
    // children: []
  },
  { path: '/:pathMatch(.*)*', component: () => import('@/views/not-found/index.vue') }
]

const router = createRouter({
  routes,
  history: createWebHashHistory()
})
//判断是否携带token守卫
router.beforeEach((to) => {
  if (to.path !== '/login') {
    const token = localCache.getCache('token')
    if (!token) {
      return '/login'
    }
  }

  if (to.path === '/main') {
    return firstMenu.url
  }
})
export default router
