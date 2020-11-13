import { createRouter, createWebHistory } from "vue-router";

import ExploreRoutes from "@/router/exploreRoutes";
import AccountRoutes from "@/router/accountRoutes";
import ProfileRoutes from "@/router/profileRoutes";
import InfrastructureRoutes from "@/router/infrastructureRoutes";

let allRoutes = [];
allRoutes = allRoutes.concat(
  ExploreRoutes,
  AccountRoutes,
  ProfileRoutes,
  InfrastructureRoutes
);

const routes = allRoutes;
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
