import Vue from "vue";
import Vuex from "vuex";
import eventBoard from "@/store/event-board";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: { eventBoard },
});
