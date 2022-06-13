import { createRouter, createWebHistory } from "vue-router";

// Views
import Home from "@/views/Home-View.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
