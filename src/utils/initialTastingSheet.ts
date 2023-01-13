import { TastingSheet } from '../types'

const initialTastingSheet: TastingSheet = {
  name: '',
  time: null,
  color: 'white',
  appearance: {
    clarity: '',
    brightness: '',
    appearanceColor: [],
    intensity: '',
    consistency: '',
    appearanceImpression: []
  },
  flavor: {
    flavorFirstImpression: [],
    flavorFruit: [],
    flavorFlower: [],
    flavorSpice: [],
    flavorImpression: []
  },
  taste: {
    attack: '',
    sweetness: '',
    acidity: '',
    astringent: null,
    bitterness: null,
    alcohol: '',
    balance: '',
    afterTaste: ''
  },
  conclusion: {
    evaluation: '',
    optimumTemperature: '',
    glass: '',
    decantage: '',
    vintage: null,
    country: '',
    grape: ''
  }
}

export default initialTastingSheet
