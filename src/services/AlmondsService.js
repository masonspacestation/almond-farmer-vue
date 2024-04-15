import { AppState } from "../AppState.js"




class AlmondsService {
  buyClickUpgrade(resource) {
    // console.log('service', resource);
    resource.quantity++
    // console.log(resource.quantity);
  }
  harvestAlmonds() {
    AppState.almonds++
  }




}


export const almondsService = new AlmondsService