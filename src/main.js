import { createApp } from 'vue'

// import Pinia
// import { createPinia } from 'pinia'

import axios from 'axios'
import VueAxios from 'vue-axios'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import App from './App.vue'
import router from './router'

// import counterModule
import store from './store/index'

// create instance
// const pinia = createPinia()

// https://www.koderhq.com/tutorial/vue/computed-property/#what-is

const app = createApp(App)

// Install the store instance as a plugin
app.use(store)

// Install the router instance as a plugin
app.use(router)

// Install the axios instance as a plugin
app.use(VueAxios, axios)

// Install the Elemente Plus instance as a plugin
app.use(ElementPlus)

// Install the Pinia instance as a plugin
// app.use(pinia)

app.mount('#app')

console.log(store.state.counter) // -> 1