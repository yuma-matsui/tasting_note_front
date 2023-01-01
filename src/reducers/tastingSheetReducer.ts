import { Reducer } from 'react'
import { TastingSheet, TastingSheetReducerAction } from '../types'

const tastingSheetReducer: Reducer<TastingSheet, TastingSheetReducerAction> = (
  prevSheet,
  { payload: { name, value } }
) => {
  const { appearance, flavor } = prevSheet
  const prevAppearance = { ...appearance }
  const prevFlavor = { ...flavor }

  switch (name) {
    case 'time':
      return { ...prevSheet, [name]: Number(value) }
    case 'clarity':
    case 'brightness':
    case 'intensity':
    case 'consistency':
      return { ...prevSheet, appearance: { ...prevAppearance, [name]: value } }
    case 'appearanceColor':
    case 'appearanceImpression': {
      const target = prevAppearance[name]
      if (!target.includes(value))
        return { ...prevSheet, appearance: { ...prevAppearance, [name]: [...target, value] } }

      target.splice(target.indexOf(value), 1)
      return { ...prevSheet, appearance: { ...prevAppearance, [name]: target } }
    }
    case 'flavorFirstImpression':
    case 'flavorFruit':
    case 'flavorFlower':
    case 'flavorSpice':
    case 'flavorImpression': {
      const target = prevFlavor[name]
      if (!target.includes(value)) return { ...prevSheet, flavor: { ...prevFlavor, [name]: [...target, value] } }

      target.splice(target.indexOf(value), 1)
      return { ...prevSheet, flavor: { ...prevFlavor, [name]: target } }
    }
    default:
      return { ...prevSheet, [name]: value }
  }
}

export default tastingSheetReducer
