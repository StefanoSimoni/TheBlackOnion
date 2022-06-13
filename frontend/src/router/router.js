import { createRouter, createWebHistory } from "vue-router";

// Views
import Home from "@/views/Home-View.vue";
import Configure from "@/views/Configure-View.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/configure",
    name: "Configure",
    component: Configure,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
