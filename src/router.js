import Home from './pages/Home.vue';
import Page404 from './pages/404.vue';
import { createWebHistory, createRouter } from 'vue-router';

const routes = [
  { path: '/', component: Home },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: Page404 },
];

const router = createRouter({
  history: createWebHistory(),
  routes, 
})

export default router;