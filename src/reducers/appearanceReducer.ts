import { Reducer } from 'react'
import { Appearance, TastingSheetReducerAction } from '../types'

const appearanceReducer: Reducer<Appearance, TastingSheetReducerAction> = (
  prevAppearance,
  { type, payload: { value } }
) => {
  switch (type) {
    case 'clarity':
    case 'brightness':
    case 'intensity':
    case 'consistency':
      return { ...prevAppearance, [type]: value }
    case 'appearanceColor':
    case 'appearanceImpression': {
      const target = prevAppearance[type]
      if (!target.includes(value)) return { ...prevAppearance, [type]: [...target, value] }

      target.splice(target.indexOf(value), 1)
      return { ...prevAppearance, [type]: target }
    }
    default:
      throw new Error('不正な呼び出し方です。')
  }
}

export default appearanceReducer
