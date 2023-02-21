import {createRouter, createWebHashHistory} from "vue-router";
import HomeView from "@/components/HomeView.vue";
import CatalogView from "@/components/CatalogView.vue";
import LoginView from "@/components/LoginView.vue";
import InfoView from "@/components/InfoView.vue";

const routes = [
    {
        path: '/',
        alias: '/home',
        name: 'home',
        component: HomeView
    },
    {
        path: '/catalog',
        name: 'catalog',
        component: CatalogView
    },
    {
        path: '/login',
        name: 'login',
        component: LoginView
    },
    {
        path:'/info',
        name: 'info',
        component: InfoView
    }
]
const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router