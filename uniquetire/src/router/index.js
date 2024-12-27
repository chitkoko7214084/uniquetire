import { createRouter, createWebHistory } from 'vue-router';


const router = createRouter({
  history: createWebHistory(),
  routes:  [
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/Home.vue')
    },
    {
      path: '/Nav',
      name: 'Nav',
      component: () => import('../components/Navbar.vue')
    }
  ]
});

export default router;
