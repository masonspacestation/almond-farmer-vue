<script setup>
import { computed, ref } from 'vue'
import { AppState } from './AppState'
import Navbar from './components/Navbar.vue'
import { almondsService } from "./services/AlmondsService.js";

const appState = computed(() => AppState)
const almonds = computed(() => AppState.almonds)

function harvestAlmonds(){
  console.log('harvesting', AppState.almonds);
  almondsService.harvestAlmonds()
}

</script>

<template>
  <header>
    
  </header>
  <main>
    
    <router-view />
    <!-- <h2>Almonds {{ almonds }}</h2>
    <img id="farmer-emoji" @click="harvestAlmonds()" src="src/assets/img/farmer-emoji.png" alt=""> -->
  </main>
   <footer class="bg-dark text-light">
    
  </footer>
</template>

<style lang="scss">
@import "./assets/scss/main.scss";

:root{
  --main-height: calc(100vh - 32px - 64px);
}

// #farmer-emoji{
//   width:25%;
// }


footer {
  display: grid;
  place-content: center;
  height: 32px;
}
</style>
