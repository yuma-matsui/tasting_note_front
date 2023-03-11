import { TastingSheet } from '../types'

const initialTastingSheet: TastingSheet = {
  name: '',
  time: '',
  color: 'white',
  appearance: {
    clarity: '',
    brightness: '',
    appearanceColors: [],
    intensity: '',
    consistency: '',
    appearanceImpressions: []
  },
  flavor: {
    flavorFirstImpressions: [],
    flavorFruits: [],
    flavorFlowers: [],
    flavorSpices: [],
    flavorImpressions: []
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
    decantage: null,
    vintage: '',
    country: '',
    grape: ''
  }
}

export default initialTastingSheet
