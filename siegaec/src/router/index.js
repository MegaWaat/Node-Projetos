import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import EventosInscritos from '../views/EventosInscritos.vue'
import MeusEventos from '../views/MeusEventos.vue'
import TrabalhosAcademicos from '../views/TrabalhosAcademicos.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/eventos-inscritos',
    name: 'EventosInscritos',
    component: EventosInscritos
  },
  {
    path: '/meus-eventos',
    name: 'MeusEventos',
    component: MeusEventos
  },
  {
    path: '/trabalhos-academicos',
    name: 'TrabalhosAcademicos',
    component: TrabalhosAcademicos
  },
]

const router = new VueRouter({
  routes
})

export default router
