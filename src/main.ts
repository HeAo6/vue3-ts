import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'normalize.css'
import './assets/css/index.less'
import { setupStore } from './store'
// import ElementPlus from 'element-plus'

import { registerApp } from './global'
const app = createApp(App)
registerApp(app)
// app.use(ElementPlus)
app.use(store)
//动态注册 贮存
setupStore()
app.use(router)
app.mount('#app')
