import { createWebHistory, createRouter } from "vue-router";
import ContactBook from "../views/ContactBook.vue";

import NotFound from "../views/NotFound.vue";
import ContactEdit from "../views/ContactEdit.vue";
import ContactCreate from "../views/ContactCreate.vue";

const routes = [
  {
    path: "/",
    name: "contactbook",
    component: ContactBook,
  },
  {
    path: "/contacts",
    name: "contact.add",
    component: ContactCreate,
  },
  {
    path: "/contacts/:id",
    name: "contact.edit",
    component: ContactEdit,
    props: true, // Truyền các biến trong $route.params vào làm props
  },

  {
    path: "/:pathMatch(.*)*",
    name: "notfound",
    component: NotFound,
  },
  {
  path: "/:pathMatch(.*)*",
  name: "notfound",
  component: () => import("@/views/NotFound.vue"),
  },
  {
    path: "/contacts/:id",
    name: "contact.edit",
    component: () => import("@/views/ContactEdit.vue"),
    props: true // Truyền các biến trong $route.params vào làm props
    },
];

  
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});
export default router;
