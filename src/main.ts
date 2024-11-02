// src/main.ts
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import './style.css'
import Button from './components/ui/Button.vue'
import { vHoverSlide } from './stores/hoverAnimation'

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.use(router)
app.directive('hover-slide', vHoverSlide)
app.component('Button', Button)
app.mount('#app')