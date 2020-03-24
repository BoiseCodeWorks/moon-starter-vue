import { Spell } from "../models/Spell";

let baseURl = "https://bcw-sandbox.herokuapp.com/api/jake/spells/";

export const MySpellsStore = {
  state: {
    spells: []
  },
  mutations: {
    setMySpells(state, spells = []) {
      state.spells = spells;
    },
    addSpell(state, spell) {
      state.spells.push(spell);
    }
  },
  actions: {
    async getMySpells({ commit }) {
      let res = await fetch(baseURl);
      let data = await res.json();
      commit("setMySpells", data.data);
    },
    async addSpell({ commit }, spell) {
      try {
        let res = await fetch(baseURl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(spell)
        });
        let data = await res.json();
        commit("addSpell", new Spell(data.data));
      } catch (e) {
        console.log(e);
      }
    }
  },
};