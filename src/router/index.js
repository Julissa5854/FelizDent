import { createRouter, createWebHistory } from 'vue-router'; 
import PaginaPrincipal from '../components/PaginaPrincipal.vue'; 
import Consultorios from '../components/consultorios.vue'; 
import Dentistas from '../components/DentistCard.vue'; 
import Odontopediatria from '@/components/Odontopediatria.vue';
import EsteticaDental from '@/components/EsteticaDental.vue';
import Periodoncia from '@/components/Periodoncia.vue';
import Comentarios from '@/components/Comentarios.vue';


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
  {
    path: '/Odontopediatria',
    name: 'Odontopediatria',
    component: Odontopediatria,
  },
  {
    path: '/EsteticaDental',
    name: 'EsteticaDental',
    component: EsteticaDental,
  },
  {
    path: '/Periodoncia',
    name: 'Periodoncia',
    component: Periodoncia,
  },
  {
    path: '/Comentarios',
    name: 'Comentarios',
    component: Comentarios,
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
  // Es el comportamiento de desplazamiento (scroll behavior)
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition; // Si se usa la navegación de retroceso o avance, guarda la posición
    } else {
      return { left: 0, top: 0 }; // Desplaza a la parte superior de la página
    }
  }
});

export default router;
