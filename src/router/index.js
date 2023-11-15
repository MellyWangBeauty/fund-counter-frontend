import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    redirect: "/app/fund",
    children: [
      {
        path: "app",
        name: "App",
        children: [
          {
            path: "fund",
            name: "Fund",
            component: () => import("@/views/app/Fund.vue"),
          },
        ],
      },
      {
        path: "sys",
        name: "Sys",
        children: [
          {
            path: "user",
            name: "User",
            component: () => import("@/views/sys/User.vue"),
          },
          {
            path: "test",
            name: "Test",
            component: () => import("@/views/sys/Test.vue"),
          },
        ],
      },
      {
        path: "logs",
        name: "Logs",
        children: [
          {
            path: "info",
            name: "info",
            component: () => import("@/views/logs/Info.vue"),
          },
          {
            path: "clear",
            name: "Clear",
            component: () => import("@/views/logs/Clear.vue"),
          },
        ],
      },
      {
        path: "deal",
        name: "Deal",
        children: [
          {
            path: "buy",
            name: "Buy",
            component: () => import("@/views/deal/Buy.vue"),
          },
          {
            path: "sell",
            name: "Sell",
            component: () => import("@/views/deal/Sell.vue"),
          },
          {
            path: "info",
            name: "Info",
            component: () => import("@/views/deal/Info.vue"),
          },
        ],
      },
    ],
  },
  {
    path: "/:pathMatch(.*)*",
    name: "404",
    component: () => import("@/views/404.vue"),
  },
];

const router = createRouter({
  scrollBehavior: () => ({ left: 0, top: 0 }), // 路由跳转后滚动到顶部
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
