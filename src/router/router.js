import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from "@/components/HelloWorld";
import HomeView from "@/components/HomeView";
import CathalogPage from "@/components/CathalogPage";

Vue.use(Router);

let router = new Router( {
    routes: [
        {
            path: '/hello',
            name: 'HelloPage',
            component: HelloWorld
        },

        {
            path: '/',
            name: 'home',
            component: HomeView
        },

        {
            path: '/cath',
            name: 'CathPage',
            component: CathalogPage
        }
    ]
} )

export default router
