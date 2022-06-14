import { createRouter, createWebHistory } from "vue-router";

// Views
import Home from "@/views/Home-View.vue";
import Configure from "@/views/Configure-View.vue";
import Simulated from "@/views/Simulated-View.vue";
import ConfigureBuild from "@/views/ConfigureBuild-View.vue";
import SimulateBuild from "@/views/SimulateBuild-View.vue";

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
  {
    path: "/simulated",
    name: "Simulated",
    component: Simulated,
  },
  {
    path: "/configureBuild",
    name: "ConfigureBuild",
    component: ConfigureBuild,
  },
  {
    path: "/simulateBuild",
    name: "SimulateBuild",
    component: SimulateBuild,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
