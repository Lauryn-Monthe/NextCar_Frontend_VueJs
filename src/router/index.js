import { createRouter, createWebHistory } from '@ionic/vue-router';
import HomePage from '../views/HomePage.vue';
import MemoriesPage from '../pages/MemoriesPage.vue';
import MemorieDetails from '../pages/MemorieDetails.vue';

const routes = [
  {
    path: '/',
    redirect: '/memories'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  }, 
  {
    path: '/memories',
    component: MemoriesPage
  },
  {
    path: '/memoriesDetails',
    component: MemorieDetails
  },
  {
    path: '/memories/:id',
    component: () => import('../pages/MemorieDetails.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
