import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/HelloWorld.vue';
const routes = [
    { path: '/', name: 'Start', component: Home},
]

// crear objeto de rutas de vue router -- objeto de vr
const router = createRouter({
    history: createWebHistory(),
    routes
});

//instancia de vue
const app = createApp(App)

// use router
app.use(router)

// mount #app
app.mount('#app')

