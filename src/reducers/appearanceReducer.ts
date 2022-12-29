import { Reducer } from 'react'
import { AppearanceReducerAction } from '../types'
import { Appearance } from '../types/tasting_sheet/appearance'

const appearanceReducer: Reducer<Appearance, AppearanceReducerAction> = (
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
      if (!target.includes(value)) return { ...prevAppearance, [type]: [...prevAppearance[type], value] }

      target.splice(target.indexOf(value), 1)
      return { ...prevAppearance, [type]: target }
    }
    default:
      throw new Error('不正な呼び出し方です。')
  }
}

export default appearanceReducer
