import { Reducer } from 'react'

import { Flavor, TastingSheetReducerAction } from '../types'

const flavorReducer: Reducer<Flavor, TastingSheetReducerAction> = (prevFlavor, { type, payload: { value } }) => {
  switch (type) {
    case 'flavorFirstImpression':
    case 'flavorFruit':
    case 'flavorFlower':
    case 'flavorSpice':
    case 'flavorImpression': {
      const target = prevFlavor[type]
      if (!target.includes(value)) return { ...prevFlavor, [type]: [...target, value] }

      target.splice(target.indexOf(value), 1)
      return { ...prevFlavor, [type]: target }
    }
    default:
      throw new Error('不正な呼び出し方です。')
  }
}

export default flavorReducer
