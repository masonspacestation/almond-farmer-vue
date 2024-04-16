<script setup>
import { AppState } from "../AppState.js";
import { almondsService } from "../services/AlmondsService.js";
import { computed, ref, onMounted } from "vue";

const clickUpgrades = AppState.ClickUpgrades
const autoUpgrades = AppState.AutoUpgrades

let farm = AppState.farm

function buyClickUpgrade(resource){
  // console.log('buying', resource);
  almondsService.buyClickUpgrade(resource)
}

function buyAutoUpgrade(resource){
  // console.log('buying', resource);
  almondsService.buyAutoUpgrade(resource)
}

onMounted(()=>{
  setInterval(autoHarvest, 5000)
})

function autoHarvest() {
  console.log('harvesting');
  almondsService.autoHarvest()
  // farm.seasonHarvest += farm.shippingRate

}

</script>

<template>
  <!-- click upgrades -->
  <div class="col-3 p-4 my-2" v-for="clickUpgrade in clickUpgrades" :key="clickUpgrade.name">
    <div class="row justify-content-between border rounded rounded-2 border-1 border-success inner-shadow bg-light p-3 align-items-center text-center">
        <h2 class="col-6">{{clickUpgrade.quantity}} {{ clickUpgrade.emoji }}</h2>
        <div class="col-6 mx-0 p-1">
          <button class="w-100 mx-0 mb-2 btn btn-outline-success border-2" @click="buyClickUpgrade(clickUpgrade)">{{clickUpgrade.price}}</button>
          <h6 class="mx-0">+ {{clickUpgrade.multiplier}}/<span class="fs-6">Click</span></h6>
        </div>
      </div>
    </div>

<!-- auto upgrades -->
    <div class="col-3 p-4 my-2" v-for="autoUpgrade in autoUpgrades" :key="autoUpgrade.name">
    <div class="row justify-content-between border rounded rounded-2 border-1 border-primary inner-shadow bg-light p-3 align-items-center text-center">
        <h2 class="col-6">{{autoUpgrade.quantity}} {{ autoUpgrade.emoji }}</h2>
        <div class="col-6 mx-0 p-1">
          <button class="w-100 mx-0 mb-2 btn btn-outline-primary border-2" @click="buyAutoUpgrade(autoUpgrade)">{{autoUpgrade.price}}</button>
          <h6 class="mx-0">+ {{autoUpgrade.multiplier}}/<span class="fs-6">Click</span></h6>
        </div>
      </div>
    </div>
  
</template>

<style>
</style>