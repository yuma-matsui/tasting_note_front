import { Reducer } from 'react'
import { TastingSheet, TastingSheetReducerAction } from '../types'

const tastingSheetReducer: Reducer<TastingSheet, TastingSheetReducerAction> = (
  prevSheet,
  { payload: { name, value } }
) => {
  const { appearance, flavor, taste, conclusion } = { ...prevSheet }

  switch (name) {
    case 'time':
      return { ...prevSheet, [name]: Number(value) }
    case 'clarity':
    case 'brightness':
    case 'intensity':
    case 'consistency':
      return { ...prevSheet, appearance: { ...appearance, [name]: value } }
    case 'appearanceColor':
    case 'appearanceImpression': {
      const target = appearance[name]
      if (!target.includes(value)) return { ...prevSheet, appearance: { ...appearance, [name]: [...target, value] } }

      target.splice(target.indexOf(value), 1)
      return { ...prevSheet, appearance: { ...appearance, [name]: target } }
    }
    case 'flavorFirstImpression':
    case 'flavorFruit':
    case 'flavorFlower':
    case 'flavorSpice':
    case 'flavorImpression': {
      const target = flavor[name]
      if (!target.includes(value)) return { ...prevSheet, flavor: { ...flavor, [name]: [...target, value] } }

      target.splice(target.indexOf(value), 1)
      return { ...prevSheet, flavor: { ...flavor, [name]: target } }
    }
    case 'attack':
    case 'sweetness':
    case 'acidity':
    case 'astringent':
    case 'bitterness':
    case 'balance':
    case 'alcohol':
    case 'afterTaste':
      return { ...prevSheet, taste: { ...taste, [name]: value } }
    case 'evaluation':
    case 'optimumTemperature':
    case 'glass':
    case 'decantage':
    case 'country':
    case 'grape':
      return { ...prevSheet, conclusion: { ...conclusion, [name]: value } }
    case 'vintage':
      return { ...prevSheet, conclusion: { ...conclusion, [name]: Number(value) } }
    default:
      return { ...prevSheet, [name]: value }
  }
}

export default tastingSheetReducer
