import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/Home.vue";
import AddView from "../views/Add.vue"; 

const routes = [
  {
    path: "/",
    component: HomeView,
  },
  {
    path: "/addToDo",
    component: AddView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
