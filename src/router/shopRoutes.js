const routes = [
  {
    path: "/shophome",
    name: "ShopHome",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/shopViews/ShopHome.vue"
      )
  },
  {
  path: "/cartdetails",
  name: "CartDetails",
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () =>
    import(
      /* webpackChunkName: "about" */ "../views/shopViews/CartDetails.vue"
    )
}
];

export default routes;
