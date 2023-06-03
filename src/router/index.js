import { createRouter, createWebHistory } from "vue-router";

import Register from "../views/Register.vue";
import HomeView from "../views/Index.vue";
import Login from "../views/Login.vue";
import EmailVerify from "../views/EmailVerify.vue"

import DashboardIndex from "../views/dashboard/Index.vue"

import BlankLayout from "../layouts/Blank.vue";
import DashboardLayout from "../layouts/Dashboard.vue";



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      meta: {
        title: "Home - Sharify.in",
        layout: BlankLayout,
      },
    },
    {
      path: "/login",
      name: "login",
      component: Login,
      meta: {
        title: "Login - Sharify.in",
        layout: BlankLayout,
      }
    },
    {
      path: "/register",
      name: "register",
      component: Register,
      meta: {
        title: "Register - Sharify.in",
        layout: BlankLayout,
      }
    },
    {
      path: "/email",
      name: "EmailVerify",
      component: EmailVerify,
      meta: {
        layout: BlankLayout,
      },
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: DashboardIndex,
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