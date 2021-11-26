import Vue from "vue";
import Vuex from "vuex";
//import axios from 'axios'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    prospectos: [], prospecto: {},
    inmuebles: [], inmueble: {},
    clientes: [], cliente: {},
    citas: [], cita: {},
    promotores: [], promotor: {},
  },
  mutations: {
    SET_PROSPECTOS(state, prospectos) {state.prospectos = prospectos;},
    SET_PROSPECTO(state, prospecto) {state.prospecto = prospecto;},
    SET_INMUEBLES(state, inmuebles) {state.inmuebles = inmuebles;},
    SET_INMUEBLE(state, inmueble) {state.inmueble = inmueble;},
    SET_CLIENTES(state, clientes) {state.clientes = clientes;},
    SET_CLIENTE(state, cliente) {state.cliente = cliente;},
    SET_CITAS(state, citas) {state.citas = citas;},
    SET_CITA(state, cita) {state.citas = cita;},
    SET_PROMOTORES(state, promotores) {state.promotores = promotores;},
    SET_PROMOTOR(state, promotor) {state.promotor = promotor;},
  },
  actions: {

  },
  modules: {},
});
