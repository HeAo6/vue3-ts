import { createStore } from 'vuex'

const store = createStore({
  state: () => {
    return {
      name: 'coderwhy',
      age: 18,
      sex: 'male'
    }
  },
  mutations: {},
  getters: {},
  actions: {}
})

export default store
