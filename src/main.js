import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue'; // Путь к вашему основному компоненту приложения
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';


import Features from './components/HomePage/Features.vue'
import Pricing from './components/Pricing.vue'
import Blog from './components/Blog.vue'
import Docs from './components/Docs.vue'
import Changelog from './components/Changelog.vue'
import WeAreHiring from './components/WeAreHiring.vue'
import Login from './components/Login.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Features },
        { path: '/pricing', component: Pricing },
        { path: '/blog', component: Blog },
        { path: '/docs', component: Docs },
        { path: '/changelog', component: Changelog },
        { path: '/we-are-hiring', component: WeAreHiring },
        { path: '/login', component: Login },
    ],
});

const app = createApp(App);
app.use(router);
app.mount('#app');
