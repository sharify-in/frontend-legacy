import { createRouter, createWebHistory } from "vue-router";

import BlankLayout from "../layouts/Blank.vue";
import DashboardLayout from "../layouts/Dashboard.vue";



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/Index.vue"),
      meta: {
        title: "Home - Sharify.in",
        layout: BlankLayout,
      },
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/Login.vue"),
      meta: {
        title: "Login - Sharify.in",
        layout: BlankLayout,
      }
    },
    {
      path: "/register",
      name: "register",
      component: () => import("../views/Register.vue"),
      meta: {
        title: "Register - Sharify.in",
        layout: BlankLayout,
      }
    },
    {
      path: "/email",
      name: "EmailVerify",
      component: () => import("../views/EmailVerify.vue"),
      meta: {
        layout: BlankLayout,
      },
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: () => import("../views/dashboard/Index.vue"),
      meta: {
        title: "Dashboard - Sharify.in",
        layout: DashboardLayout
      }
    }
  ],
});

router.beforeEach((to, from, next) => {
  // Get the page title from the route meta data that we have defined
  // See further down below for how we setup this data
  const title = to.meta.title;
  // If the route has a title, set it as the page title of the document/page
  if (title) {
    document.title = title;
  }
  // Continue resolving the route
  next();
});

export default router;