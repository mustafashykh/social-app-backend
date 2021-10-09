import { Home, Page404, Login, SignUp } from './pages';
import { createWebHistory, createRouter } from 'vue-router';

const routes = [
  { name: 'home', path: '/', component: Home },
  { name: 'signup', path: '/signup', component: SignUp },
  { name: 'login', path: '/login', component: Login },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: Page404 },
];

const router = createRouter({
  history: createWebHistory(),
  routes, 
})

export default router;