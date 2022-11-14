import { Module } from 'vuex'
import { ILoginState } from './type'
import { IRootState } from '../type'
import { accountLoginRequest, requestUserInfoById, requestUserMenusByRoleId } from '@/service/login'
import { IAccount } from '@/service/login/type'
import router from '@/router'
import localCache from '@/utils/cache'
import { mapMenusToRoutes } from '@/utils/map-menus'

const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {},
      userMenus: []
    }
  },
  mutations: {
    //存取token
    changeToken(state, token: string) {
      state.token = token
    },
    //保存用户信息
    changeUserInfo(state, userInfo: any) {
      state.userInfo = userInfo
    },
    //保存用户菜单
    changeUserMenus(state, userMenus: any) {
      state.userMenus = userMenus
      const routes = mapMenusToRoutes(userMenus)
      routes.forEach((route) => {
        router.addRoute('main', route)
      })
    }
  },
  getters: {},
  actions: {
    async accountLoginAction({ commit }, payload: IAccount) {
      // 1.登录逻辑
      const loginResult = await accountLoginRequest(payload)
      console.log(loginResult)
      const { id, token } = loginResult.data
      localCache.setCache('token', token)

      commit('changeToken', token)

      //2.请求用户信息
      const userInfoResult = await requestUserInfoById(id)
      const userInfo = userInfoResult.data
      commit('changeUserInfo', userInfo)
      localCache.setCache('userInfo', userInfo)
      console.log(userInfo)

      //3.请求用户所对应菜单
      const userMenusResult = await requestUserMenusByRoleId(userInfo.role.id)
      const userMenus = userMenusResult.data
      commit('changeUserMenus', userMenus)
      localCache.setCache('userMenus', userMenus)
      router.push('/main')
    },

    //防止用户刷新丢失vuex里的token重新加载
    loadLocalLogin({ commit }) {
      const token = localCache.getCache('token')
      if (token) {
        commit('changeToken', token)
      }
      const userInfo = localCache.getCache('userInfo')
      if (userInfo) {
        commit('changeUserInfo', userInfo)
      }
      const userMenus = localCache.getCache('userMenus')
      if (userMenus) {
        commit('changeUserMenus', userMenus)
      }
    }
  }
}

export default loginModule
