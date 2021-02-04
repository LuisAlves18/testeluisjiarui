/* eslint-disable */
import Vue from "vue";
import VueRouter from "vue-router";
import Store from "../store"
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import MeusJogos from "@/views/MeusJogos.vue";
import Games from "@/views/Games.vue";


Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: "Home",
        component: Home,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: "/login",
        name: "Login",
        component: Login
    },
    {
        path: "/meusjogos",
        name: "MeusJogos",
        component: MeusJogos,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: "/games/:gameid",
        name: "Games",
        component: Games,
        meta: {
            requiresAuth: true
        }
    }

];

const router = new VueRouter({
    routes
});
router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth && !Store.getters.isLoggedUser) {
        next({ name: 'Login' })
    } else {
        next();
    }
});

export default router;