/*
 * @Author: LYM
 * @Date: 2022-05-12 08:53:30
 * @LastEditors: LYM
 * @LastEditTime: 2022-05-31 09:46:22
 * @Description: Please set Description
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import { createPinia } from 'pinia'
import piniaPersist from 'pinia-plugin-persist'
import elementPlus from './plugins/element-plus'

const app = createApp(App)
const pinia = createPinia()

pinia.use(piniaPersist)

app.use(router)

app.use(pinia)

app.use(elementPlus)

app.mount('#app')
