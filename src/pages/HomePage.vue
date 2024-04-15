<script setup>
import { AppState } from "../AppState.js";
import { computed, ref, onMounted } from "vue";
import { almondsService } from "../services/AlmondsService.js";
import HarvestStats from "../components/HarvestStats.vue";
import ResourceTools from "../components/ResourceTools.vue";

const appState = computed(() => AppState)
const almonds = computed(() => AppState.almonds)
const clickUpgrades = AppState.ClickUpgrades

function harvestAlmonds(){
  // console.log('harvesting', AppState.almonds);
  almondsService.harvestAlmonds()
}

function buyClickUpgrade(resource){
  // console.log('buying', resource);
  almondsService.buyClickUpgrade(resource)
}




</script>





<template>
<section class="row justify-content-center mt-3">
    <div id="season" class="col-3">0</div>
    <h2 class="text-center">Season Total {{ almonds }}</h2>
  </section>

  <!-- <section class="row justify-content-center align-content-end">
    <div class="col-3">
      <h3 id="harvest-rate"></h3><span class='fs-6'>Harvest Rate(manual):</span><br><h2>{{ almonds }}<span class='fs-6'> /click</span></h2>
    </div>
    <div class="col-3" v-for="clickUpgrade in clickUpgrades" :key="clickUpgrade.name">
      <h3 id="harvest-rate"></h3><span class='fs-6'>Harvest Rate(manual):</span><br><h2>{{ clickUpgrade.multiplier }}<span class='fs-6'> /click</span></h2>
    </div>
    <div id="almondsSupply" class="col-4 bg-mid-green text-light rounded-top-3"></div>
    <div class="col-3">
      <h3 id="shipping-rate">srate</h3>
    </div>
  </section> -->
  
  <div class="row align-items-center justify-content-center">

    <img id="harvest-button" @click="harvestAlmonds()" src="src/assets/img/farmer-emoji.png" alt="">
  </div>
  <div class="row">
    <button v-for="clickUpgrade in clickUpgrades" :key="clickUpgrade.name" @click="buyClickUpgrade(clickUpgrade.name)">+ {{ clickUpgrade.emoji }}</button>
  </div>
  <div class="row">
    <ResourceTools/>
    <!-- <div class="col-3 m-2" v-for="clickUpgrade in clickUpgrades" :key="clickUpgrade.name">
      <div class="card p-3 d-flex text-center">
        <h3 class="w-50 d-inline-block">{{clickUpgrade.quantity}} {{ clickUpgrade.emoji }}</h3>
        <h3 class="w-50 d-inline-block">{{clickUpgrade.multiplier}}/<span class="fs-6">Click</span></h3>
        <button @click="buyClickUpgrade(clickUpgrade)">+</button>
    </div>
  </div> -->
  </div>
</template>

<style scoped lang="scss">
.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;

  .home-card {
    width: clamp(500px, 50vw, 100%);

    >img {
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
  #harvest-button {
  width: 25%;
  cursor: pointer;
  user-select: none;
}

#harvest-button:active {
  transform: scale(1.05) translateY(-2px);
  filter: drop-shadow(0px 8px 3px rgba(0, 0, 0, 0.1));
}
</style>
