import { createStore } from 'vuex'
import loginModule from './login'
import { IRootState } from './type'
const store = createStore<IRootState>({
  state: () => {
    return {
      name: 'coderwhy',
      age: 18,
      sex: 'male'
    }
  },
  mutations: {},
  getters: {},
  actions: {},
  modules: {
    loginModule
  }
})
export function setupStore() {
  store.dispatch('loginModule/loadLocalLogin')
}
export default store
