import { createApp } from "vue";
import "@/style.css";
import App from "@/App.vue";
import { createRouter, createWebHashHistory } from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/", name: "Home", component: Home },
    {
      path: "/about",
      name: "About",
      component: About,
    },
  ],
});

createApp(App).use(router).mount("#finance-planner-app");
