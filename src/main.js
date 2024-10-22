import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';
import Today from './views/Today.vue';
import Tomorrow from './views/Tomorrow.vue';
import Week from './views/Wek.vue';
const routes = [
    { path: '/home', name: 'Home', component: Home},
    { path: '/', name: 'Today', component: Today},
    { path: '/tomorrow', name: 'Tomorrow', component: Tomorrow},
    { path: '/week', name: 'Week', component: Week},
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



window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;
    var themeColorMetaTag = document.querySelector('meta[name="theme-color"]');
    
    if (scrollPosition > 10) {
        // Cambiar el color cuando se haga scroll hacia abajo
        themeColorMetaTag.setAttribute('content', '#E0B6FF'); // Color cuando haces scroll
    } else {
        // Restaurar el color original cuando vuelvas a la parte superior
        themeColorMetaTag.setAttribute('content', '#704cd2'); // Color inicial
    }
});