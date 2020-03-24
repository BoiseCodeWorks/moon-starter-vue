import { Spell } from "../models/Spell";

export const SpellsStore = {
  state: {
    spells: [],
    activeSpell: new Spell({})
  },
  mutations: {
    setSpells(state, spells = []) {
      state.spells = spells;
    },
    setActiveSpell(state, spell) {
      state.activeSpell = spell;
    }
  },
  actions: {
    async getSpellsMetaData({ commit }) {
      let res = await fetch("https://www.dnd5eapi.co/api/spells");
      let data = await res.json();
      commit("setSpells", data.results);
    },
    async getSpellDetails({ commit }, spellMetaData) {
      let res = await fetch("https://www.dnd5eapi.co/api/spells/" + spellMetaData.index);
      let spell = await res.json();
      let s = new Spell(spell);
      console.log(s, spell);
      commit("setActiveSpell", new Spell(spell));
    }
  },
};