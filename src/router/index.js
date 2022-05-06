import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";

const history = createWebHistory();
const routes = [{
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/upload",
        name: "Upload",
        component: () =>
            import ("../views/Upload.vue") // lazy loading -> only load when visible
    },
    {
        path: "/about",
        name: "About",
        component: () =>
            import ("../views/About.vue") // lazy loading -> only load when visible
    }
];

const router = createRouter({ history, routes });

export default router;