import { RouteRecordRaw } from 'vue-router'
//封装映射所有菜单的路由函数
export function mapMenusToRoutes(userMenus: any[]): RouteRecordRaw[] {
  const routes: RouteRecordRaw[] = []

  //先加载所有的路由
  const allRoutes: RouteRecordRaw[] = []
  const routerFile = require.context('../router/main', true, /.ts/)
  routerFile.keys().forEach((path) => {
    const route = require('../router/main' + path.split('.')[1])
    allRoutes.push(route.default)
  })

  //递归查询所有type为2的菜单
  const _recurseGetRoute = (menus: any[]) => {
    for (const menu of menus) {
      if (menu.type === 2) {
        const route = allRoutes.find((route) => {
          return route.path === menu.url
        })
        if (route) {
          routes.push(route)
        }
      } else {
        _recurseGetRoute(menu.children)
      }
    }
  }
  _recurseGetRoute(userMenus)

  return routes
}
