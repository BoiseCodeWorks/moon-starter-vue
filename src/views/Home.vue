<template>
  <div class="home">
    <div class="container-fluid mt-3">
      <div class="row">
        <div class="col-3">
          <h2>All Spells</h2>
          <div class="spells">
            <div
              class="spell action"
              v-for="spell in spells"
              :key="spell.index"
              @click="getSpell(spell)"
            >
              <span>{{spell.name}}</span>
            </div>
          </div>
        </div>
        <div class="col-6">
          <active-spell />
        </div>
        <div class="col-3">
          <h2>My Spells</h2>
          <div class="spells">
            <div
              class="spell action"
              v-for="spell in mySpells"
              :key="spell.index"
              @click="setSpell(spell)"
            >
              <span>{{spell.name}}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="d-flex"></div>

      <div></div>
    </div>
  </div>
</template>


<script>
export default {
  name: "Home",
  computed: {
    spells() {
      return this.$store.state.SpellsStore.spells;
    },
    mySpells() {
      return this.$store.state.MySpellsStore.spells;
    }
  },
  mounted() {
    this.getSpells();
  },
  methods: {
    getSpells() {
      this.$store.dispatch("getSpellsMetaData");
      this.$store.dispatch("getMySpells");
    },
    getSpell(spell) {
      this.$store.dispatch("getSpellDetails", spell);
    },
    setSpell(spell) {
      this.$store.commit("setActiveSpell", spell);
    }
  }
};
</script>

<style lang="scss">
.action {
  opacity: 0.8;
  transition: all 0.2s linear;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
}
</style>