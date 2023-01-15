import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "@/components/HomeView";
import HelloWorld from "@/components/HelloWorld";
import CathalogPage from "@/components/CatalogPage";
import InfoPage from "@/components/InfoPage";

const routes = [
    {
        path: '/',
        alias: '/home',
        name: 'home',
        component: HomeView
    },
    {
        path: '/hello',
        name: 'hello',
        component: HelloWorld
    },
    {
        path: '/catalog',
        name: 'cat',
        component: CathalogPage
    },
    {
        path: '/info',
        name: 'info',
        component: InfoPage
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
