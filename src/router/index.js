import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const scrollBehavior = (to, from, savedPosition) => {
  return savedPosition || { top: 0, left: 0 };
};

const router = createRouter({
  mode: "history",
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior,
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/medicatice",
      name: "medicatice",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/MedicaticeView.vue"),
    },
    {
      path: "/miam-app",
      name: "miam-app",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/MiamAppView.vue"),
    },
  ],
});
export default router;
