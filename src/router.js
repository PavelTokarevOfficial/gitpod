import {createRouter, createWebHistory} from 'vue-router';
import Features from './components/Features/Features.vue'
import Pricing from './components/Pricing/Pricing.vue'
import Blog from './components/Blog/Blog.vue'
import Docs from './components/Docs/Docs.vue'
import Changelog from './components/Changelog/Changelog.vue'
import WeAreHiring from './components/WeAreHiring/WeAreHiring.vue'
import Login from './components/Login.vue'
import HomePage from './components/HomePage/HomePage.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: HomePage
        },
        {
            path: '/features',
            component: Features
        },
        {
            path: '/pricing',
            component: Pricing
        },
        {
            path: '/blog',
            component: Blog
        },
        {
            path: '/docs',
            component: Docs
        },
        {
            path: '/changelog',
            component: Changelog
        },
        {
            path: '/we-are-hiring',
            component: WeAreHiring
        },
        {
            path: '/login',
            component: Login
        },
    ],
});
export default router;