import { createRouter, createWebHistory } from "vue-router";

import BlankLayout from "../layouts/Blank.vue";
import DashboardLayout from "../layouts/Dashboard.vue";
import BasicLayout from "../layouts/Basic.vue";

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
      },
    },
    {
      path: "/register",
      name: "register",
      component: () => import("../views/Register.vue"),
      meta: {
        title: "Register - Sharify.in",
        layout: BlankLayout,
      },
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
        layout: DashboardLayout,
      },
    },
    {
      path: "/dashboard/@me",
      name: "dashboard_user",
      component: () => import("../views/dashboard/@me.vue"),
      meta: {
        title: "Dashboard - Sharify.in",
        layout: DashboardLayout,
      },
    },
    {
      path: "/dashboard/settings/account",
      name: "dashboard_account",
      component: () => import("../views/dashboard/settings/Account.vue"),
      meta: {
        title: "Dashboard - Sharify.in",
        layout: DashboardLayout,
      },
    },
    {
      path: "/dashboard/settings/privacy",
      name: "dashboard_privacy",
      component: () => import("../views/dashboard/settings/Privacy.vue"),
      meta: {
        title: "Dashboard - Sharify.in",
        layout: DashboardLayout,
      },
    },
    {
      path: "/dashboard/settings/uploading",
      name: "dashboard_uploading",
      component: () => import("../views/dashboard/settings/Uploading.vue"),
      meta: {
        title: "Dashboard - Sharify.in",
        layout: DashboardLayout,
      },
    },
    {
      path: "/dashboard/gallery",
      name: "dashboard_gallery",
      component: () => import("../views/dashboard/Gallery.vue"),
      meta: {
        title: "Dashboard - Sharify.in",
        layout: DashboardLayout,
      },
    },
    {
      path: "/dashboard/premium",
      name: "dashboard_premium",
      component: () => import("../views/dashboard/Premium.vue"),
      meta: {
        title: "Dashboard - Sharify.in",
        layout: DashboardLayout,
      },
    },
    {
      path: "/dashboard/admin",
      name: "dashboard_admin",
      component: () => import("../views/dashboard/Admin.vue"),
      meta: {
        title: "Dashboard - Sharify.in",
        layout: DashboardLayout,
      },
    },
    {
      path: "/terms",
      name: "termsofservice",
      component: () => import("../views/ToS.vue"),
      meta: {
        title: "Terms of Service - Sharify.in",
        layout: BasicLayout,
      },
    },
    {
      path: "/privacy",
      name: "privacypolicy",
      component: () => import("../views/Privacy.vue"),
      meta: {
        title: "Privacy Policy - Sharify.in",
        layout: BasicLayout,
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  // Get the page title from the route meta data that we have defined
  // See further down below for how we setup this data
  const { title } = to.meta;
  // If the route has a title, set it as the page title of the document/page
  if (title) {
    document.title = title;
  }
  // Continue resolving the route
  next();
});

export default router;
