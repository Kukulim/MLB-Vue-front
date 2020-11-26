const routes = [
  {
    path: "/myauctions",
    name: "MyAuctions",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "books" */ "../views/auctionViews/MyAuctions.vue")
  }
];

export default routes;
