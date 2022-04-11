import { createRouter, createWebHistory } from 'vue-router'
const routes = [
  {
    path: '/',
    alias: '/accueil',
    name: 'accueil',
    component: () => import("./components/Accueil.vue")
  },
  {
    path: '/Crm',
    alias: '/Crm',
    name: 'Crm',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("./components/Crm.vue")
  }
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;