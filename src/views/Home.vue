<template>
  <div class="home">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h1 class="text-center">Moon Miner</h1>
        </div>
      </div>
      <div class="row">
        <div class="col text-center">
          <Moon color="orange" />
        </div>
        <div class="col text-center">
          <Moon color="purple" />
        </div>
        <div class="col text-center">
          <Moon color="chartreuse" />
        </div>
        <div class="col text-center">
          <Moon />
        </div>
      </div>
      <button :disabled="cheese < 15" @click="buyIdleUpgrade">Buy Rover</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      idleCount: 0,
      cheese: 15
    };
  },
  methods: {
    buyIdleUpgrade() {
      if (this.idleCount == 0) {
        this.startIdleMiner();
        this.idleCount++;
      }
    },
    startIdleMiner() {
      setInterval(this.idleMine, 3000);
    },
    idleMine() {
      this.$store.dispatch("idleMiner");
    }
  }
};
</script>

<style>
.home {
  height: 100vh;
  width: 100vw;
  background-image: url(../assets/logo.png);
  background-size: contain;
}
</style>
