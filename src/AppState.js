import { reactive } from 'vue'
import { ClickUpgrade } from "./models/ClickUpgrade.js"
import { AutoUpgrade } from "./models/AutoUpgrade.js"

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  /** @type {{name, picture, id}} user info from Auth0*/
  user: null,
  /** @type {import('./models/Account.js').Account} user info from the database*/
  account: null,

  almonds: 0,

  farm: {
    harvestRate: 10,
    shippingRate: 10,
    seasonHarvest: 0,
  },

  AutoUpgrades: [
    new AutoUpgrade({
      name: 'bees',
      emoji: '🐝',
      price: 50,
      quantity: 0,
      multiplier: .5,
      // automaticUpgrades[0].tier2.name
      // tier2: {
      //   name: 'bees',
      //   emoji: '🍯',
      //   price: 75,
      //   quantity: 0,
      //   multiplier: 3
      // },
    }),
    new AutoUpgrade(
      {
        name: 'trees',
        emoji: '🌳',
        price: 75,
        quantity: 0,
        multiplier: .25
      })
  ],


  ClickUpgrades: [
    new ClickUpgrade({
      name: 'tractors',
      emoji: '🚜',
      price: 40,
      quantity: 0,
      multiplier: 1
    }),
    new ClickUpgrade({
      name: 'trucks',
      emoji: '🚛',
      price: 25,
      quantity: 0,
      multiplier: 1.5
    })
  ]














})
