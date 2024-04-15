<script setup>
import { AppState } from "../AppState.js";
import { almondsService } from "../services/AlmondsService.js";
import { computed, ref, onMounted } from "vue";

const clickUpgrades = AppState.ClickUpgrades


function buyClickUpgrade(resource){
  // console.log('buying', resource);
  almondsService.buyClickUpgrade(resource)
}

</script>

<template>
  
  <div class="col-3 m-2" v-for="clickUpgrade in clickUpgrades" :key="clickUpgrade.name">
    <div class="card p-3 d-flex text-center">
      <h3 class="w-50 d-inline-block">{{clickUpgrade.quantity}} {{ clickUpgrade.emoji }}</h3>
      <h3 class="w-50 d-inline-block">{{clickUpgrade.multiplier}}/<span class="fs-6">Click</span></h3>
      <button @click="buyClickUpgrade(clickUpgrade)">+</button>
    </div>
  </div>
</template>

<style>
</style>