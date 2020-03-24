import Vue from 'vue';
import Vuex from 'vuex';
import { SpellsStore } from "./SpellsStore";
import { MySpellsStore } from "./MySpellsStore";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    SpellsStore,
    MySpellsStore
  }
});
