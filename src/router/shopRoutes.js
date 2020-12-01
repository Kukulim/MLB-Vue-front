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
},
  {
  path: "/auctiondetails/:id",
  name: "AuctionDetails",
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () =>
    import(
      /* webpackChunkName: "about" */ "../views/shopViews/AuctionDetails.vue"
    ),
    props: (r) => ({ id: r.params.id}),
},
{
  path: "/bookdetails/:id",
  name: "BookDetails",
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () =>
    import(
      /* webpackChunkName: "about" */ "../views/shopViews/BookDetails.vue"
    ),
    props: (r) => ({ book: r.params.book}),
},
];

export default routes;
