import {createRouter, createWebHashHistory} from "vue-router";
import CatalogPage from "@/components/CatalogPage.vue";
import WelcomePage from "@/components/WelcomePage.vue";
import PageHeader from "@/components/PageHeader.vue";

const routes = [
    {
        path: '/',
        alias: '/home',
        name: 'home',
        component: WelcomePage
    },
    {
        path: '/catalog',
        alias: '/catalog',
        name: 'catalog',
        component: CatalogPage
    }
]
const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router