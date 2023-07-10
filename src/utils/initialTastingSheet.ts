import { TastingSheet } from '../types'

const initialTastingSheet: TastingSheet = {
  name: '',
  appearance: {
    appearanceColors: [],
    appearanceImpressions: [],
    brightness: '',
    clarity: '',
    consistency: '',
    intensity: ''
  },
  color: 'white',
  conclusion: {
    country: '',
    decantage: null,
    evaluation: '',
    glass: '',
    grape: '',
    optimumTemperature: '',
    vintage: ''
  },
  flavor: {
    flavorFirstImpressions: [],
    flavorFlowers: [],
    flavorFruits: [],
    flavorImpressions: [],
    flavorSpices: []
  },
  taste: {
    acidity: '',
    afterTaste: '',
    alcohol: '',
    astringent: null,
    attack: '',
    balance: '',
    bitterness: null,
    sweetness: ''
  },
  time: ''
}

export default initialTastingSheet
