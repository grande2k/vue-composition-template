import { createRouter, createWebHashHistory } from "vue-router";
import StartPage from "../views/Start.vue";
import HomePage from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "start",
    component: StartPage,
  },
  {
    path: "/home",
    name: "home",
    component: HomePage
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;