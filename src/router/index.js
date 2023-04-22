import { createRouter, createWebHistory } from "vue-router";

import Register from "../views/Register.vue";
import HomeView from "../views/Index.vue";
import Login from "../views/Login.vue";

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
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
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