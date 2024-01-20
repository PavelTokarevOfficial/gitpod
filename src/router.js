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
            path: '/gitpod/',
            component: HomePage
        },
        {
            path: '/gitpod/features',
            component: Features
        },
        {
            path: '/gitpod/pricing',
            component: Pricing
        },
        {
            path: '/gitpod/blog',
            component: Blog
        },
        {
            path: '/gitpod/docs',
            component: Docs
        },
        {
            path: '/gitpod/changelog',
            component: Changelog
        },
        {
            path: '/gitpod/we-are-hiring',
            component: WeAreHiring
        },
        {
            path: '/gitpod/login',
            component: Login
        },
    ],
});
export default router;