const routes = [
  {
    path: "/books",
    name: "Books",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "books" */ "../views/profileViews/Books.vue")
  }
];

export default routes;
