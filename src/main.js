import { createApp } from 'vue'
import App from './App.vue'
import './assets/css/tailwind.css'
import router from '@/router'
import VueSweetalert2 from 'vue-sweetalert2'
import request from './utils/request'
import api from './api'
//import 'sweetalert2/dist/sweetalert2.min.css'


const app = createApp(App)
app.config.globalProperties.$request = request
app.config.globalProperties.$api = api
app.config.globalProperties.$base_url = 'http://127.0.0.1:8000';
app.use(router)
app.use(VueSweetalert2)
app.mount('#app')
