import { createRouter, createWebHistory } from 'vue-router';
import Consultorios from '@/views/Consultorios.vue';
import Dentistas from '@/views/Dentist.vue';


const routes = [
  {
    path: '/consultorios',
    name: 'Consultorios',
    component: Consultorios,
  },
  {
    path: '/dentist',
    name: 'Dentistas',
    component: Dentistas,
  },
 
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
