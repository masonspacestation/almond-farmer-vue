import { AppState } from "../AppState.js"


const farm = AppState.farm


class AlmondsService {
  buyAutoUpgrade(resource) {
    resource.quantity++
    AppState.almonds -= resource.price;
    resource.price += (resource.quantity + 2);
    farm.harvestRate += farm.harvestRate;
  }
  buyClickUpgrade(resource) {
    // console.log('service', resource);
    resource.quantity++
    AppState.almonds -= resource.price;
    resource.price += (resource.quantity + 5);
    farm.harvestRate += farm.shippingRate;

    console.log(resource.quantity);
  }
  harvestAlmonds() {
    AppState.almonds += farm.harvestRate
    this.increaseSeasonHarvest()
  }

  autoHarvest() {
    // console.log('harvesting');
    AppState.almonds += farm.shippingRate;
    this.increaseSeasonHarvest()
    // farm.seasonHarvest += farm.shippingRate

  }


  increaseSeasonHarvest() {
    farm.seasonHarvest += farm.harvestRate
  }
  /**

      clickUpgrade.quantity += 1,
        almonds -= clickUpgrade.price,
        (clickUpgrade.price += (.2 * clickUpgrade.price)).toFixed(0),
        (farm.harvestRate += 3).toFixed(0)
    
      // update dashboard - trucks and tractors upgrades purchased
      document.getElementById(`draw-${clickUpgrade.name}`).innerHTML = `<h2><span class="fs-6">${clickUpgrade.emoji}</span> ${clickUpgrade.quantity}</h2><p><i>+3 each harvest</i></p>`
    
    
      buyVehicles(clickUpgrade.emoji)
      updateButtonValues(clickUpgrade)
      updateStats()
    }
    
    function buyVehicles(resource) {
      let vehiclesElem = document.getElementById('vehicles')
      vehiclesElem.innerText += resource
    }
   */
}


export const almondsService = new AlmondsService


