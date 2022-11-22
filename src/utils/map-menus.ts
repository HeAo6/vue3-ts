import { RouteRecordRaw } from 'vue-router'
let firstMenu: any = null

//封装映射所有菜单的路由函数
export function mapMenusToRoutes(userMenus: any[]): RouteRecordRaw[] {
  const routes: RouteRecordRaw[] = []

  //加载所有的路由
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
        if (!firstMenu) {
          firstMenu = menu
        }
      } else {
        _recurseGetRoute(menu.children)
      }
    }
  }
  _recurseGetRoute(userMenus)

  return routes
}
//将刷新后的菜单保存起来
export function pathMapToMenu(userMenus: any[], currentPath: string): any {
  for (const menu of userMenus)
    if (menu.type === 1) {
      const findMenu = pathMapToMenu(menu.children ?? [], currentPath)
      if (findMenu) {
        return findMenu
      }
    } else if (menu.type === 2 && menu.url === currentPath) {
      return menu
    }
}

export { firstMenu }
