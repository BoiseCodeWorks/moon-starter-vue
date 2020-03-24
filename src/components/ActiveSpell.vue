<template>
  <div class="active-spell card p-2" v-if="spell._id">
    <div class="d-flex align-items-center justify-content-between">
      <h3>{{spell.name}}</h3>
      <button class="btn btn-success" @click="addSpell">&plus; Add</button>
    </div>
    <p>{{spell.description}}</p>
  </div>
</template>

<script>
export default {
  name: "active-spell",
  computed: {
    spell() {
      return this.$store.state.SpellsStore.activeSpell;
    }
  },
  methods: {
    addSpell() {
      this.$store.dispatch("addSpell", this.spell);
    }
  }
};
</script>

<style>
</style>