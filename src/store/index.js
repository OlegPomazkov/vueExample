import Vue from "vue";
import Vuex from "vuex";

import app from "./app";
import agencies from "./agencies";

Vue.use(Vuex);

const store = {
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    app,
    agencies
  }
};

export default new Vuex.Store(store);
