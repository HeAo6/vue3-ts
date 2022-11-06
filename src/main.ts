import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import ElementPlus from 'element-plus'

import { registerApp } from './global'
import './service/demo'
import requestTool from './service'
const app = createApp(App)
registerApp(app)
// app.use(ElementPlus)
app.use(store)
app.use(router)
app.mount('#app')

requestTool.request({
  url: '/home/multidata',
  method: 'GET'
})
