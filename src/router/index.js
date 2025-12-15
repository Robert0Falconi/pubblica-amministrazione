import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/preparati-per-la-pa',
    name: 'Test',
    component: () => import('../views/Test.vue')
  },
  {
    path: '/immaginati-nella-pa',
    name: 'Test2',
    component: () => import('../views/Test2.vue')
  },
  {
    path: '/accedi',
    name: 'Accedi',
    component: () => import('../views/Accedi.vue')
  },
  {
    //Pagina 404
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('../views/404.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: 'active',        // Attiva il link corretto
  linkExactActiveClass: 'active'    // Match esatto della rotta
})

export default router
