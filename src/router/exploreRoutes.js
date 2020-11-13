const routes = [
  {
    path: "/expolorehome",
    name: "exploreHome",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/expoloreViews/exploreHome.vue"
      )
  }
];

export default routes;
