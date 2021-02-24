/*
 * @version: 1.0
 * @Author: East Wind
 * @Description: About this file
 * @Date: 2021-02-24 13:50:30
 * @LastEditors: East Wind
 * @LastEditTime: 2021-02-24 22:03:17
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'

// createApp(App).mount('#app')
const app = createApp(App)

app.use(router)
app.use(VueAwesomeSwiper)
app.mount('#app')
