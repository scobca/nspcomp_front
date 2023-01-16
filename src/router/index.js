import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "@/components/HomeView";
import HelloWorld from "@/components/HelloWorld";
import CatalogPage from "@/components/CatalogPage";
import InfoPage from "@/components/InfoPage";
import SliderElem from "@/components/SliderElem";

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
        component: CatalogPage
    },
    {
        path: '/info',
        name: 'info',
        component: InfoPage
    },
    {
        path: '/slider',
        name: 'slider',
        component: SliderElem
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
