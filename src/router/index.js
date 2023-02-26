import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import NotFoundView from "../views/NotFoundView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/search/:searchData",
      name: "search",
      component: () => import("../views/SearchView.vue"),
    },
    {
      path: "/family/:id",
      name: "family",
      component: () => import("../views/FamilyView.vue"),
    },
    { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFoundView },
  ],
});

export default router;
