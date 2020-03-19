<template>
  <div :style="{'background-color':color}">
    <img src="../assets/logo.png" height="70" alt @click="collect" />
  </div>
</template>

<script>
export default {
  name: "Moon",
  props: {
    color: { type: String, default: "green" }
  },
  methods: {
    collect() {
      console.log("COLLECTING");
    }
  }
};
</script>

<style>
</style>