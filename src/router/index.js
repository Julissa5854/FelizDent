import { createRouter, createWebHistory } from 'vue-router';
import PaginaPrincipal from '../components/PaginaPrincipal.vue'; // Asegúrate de que la ruta sea correcta
import Consultorios from '../components/consultorios.vue'; // Corrige la ruta si es necesario
import Dentistas from '../components/DentistCard.vue'; // Corrige la ruta si es necesario

const routes = [
  {
    path: '/',
    name: 'Home',
    component: PaginaPrincipal,
  },
  {
    path: '/consultorios',
    name: 'Consultorios',
    component: Consultorios,
  },
  {
    path: '/dentistas',
    name: 'Dentistas',
    component: Dentistas,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
