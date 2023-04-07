import { createApp } from 'vue'
import App from './App.vue'
import router from "@/router/router-index";

import 'aos/dist/aos.css';
import './assets/main.css'
import './assets/base.css'

createApp(App).use(router).mount('#app')
