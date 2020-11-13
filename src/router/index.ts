import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import WelcomePage from "../views/WelcomePage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "WelcomePage",
    component: WelcomePage
  },
  {
    path: "/register",
    name: "Register",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "register" */ "../views/accountViews/Register.vue")
  },
  {
    path: "/login",
    name: "Login",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/accountViews/Login.vue")
  },
  {
    path: "/books",
    name: "Books",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "books" */ "../views/profileViews/Books.vue")
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/infrastructureViews/About.vue")
  },
  {
    path: "/confirmemail",
    name: "ConfirmEmail",
    component: () =>
      import(/* webpackChunkName: "confirmemail" */ "../views/accountViews/ConfirmEmail.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
