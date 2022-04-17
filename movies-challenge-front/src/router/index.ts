import TrendingView from "@/views/TrendingView.vue";
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/trending",
      name: "trending",
      component: TrendingView,
    },
    {
      path: "/trending/page/:page",
      name: "trendingPage",
      component: TrendingView,
    },
    {
      path: "/trending/:time_window",
      name: "trendingTimeWindow",
      component: TrendingView,
    },
    {
      path: "/trending/:time_window/page/:page",
      name: "trendingTimeWindowPage",
      component: TrendingView,
    },
  ],
});

export default router;
