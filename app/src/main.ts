import { createApp } from "vue";
import "@/style.css";
import App from "@/App.vue";
import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [{ path: "/", name: "Home", component: Home }],
});

createApp(App).use(router).mount("#finance-planner-app");
