import Vue from "vue";
import VueRouter from "vue-router";
import Inicio from '../views/Inicio.vue'
import Inmuebles from '../views/Inmuebles.vue'
import CasaMuestra from '../views/CasaMuestra.vue'
import Cita from '../views/Cita.vue'
import AcercaDe from '../views/AcercaDe.vue'
import InicioSesion from '../views/IniciarSesion.vue'
import Perfil from '../views/Perfil.vue'
import registro from '../views/registro.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: Inicio
  },
  {
    path: '/Inmuebles',
    name: 'Inmuebles',
    component: Inmuebles
  },
  {
    path: '/CasaMuestra',
    name: 'CasaMuestra',
    component: CasaMuestra
  },
  {
    path: '/Cita',
    name: 'Cita',
    component: Cita
  },
  {
    path: '/AcercaDe',
    name: 'AcercaDe',
    component: AcercaDe
  },
  {
    path: '/InicioSesion',
    name: 'InicioSesion',
    component: InicioSesion
  },
  {
    path: '/Perfil',
    name: 'Perfil',
    component: Perfil
  },
  {
    path: '/registro',
    name: 'registro',
    component: registro
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
