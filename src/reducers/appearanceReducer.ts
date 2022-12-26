import { Appearance, AppearanceReducerAction } from '../types'

const MAX_VALUES_COUNT = 2

const appearanceReducer = (
  prevAppearance: Appearance,
  { type, payload: { value } }: AppearanceReducerAction
): Appearance => {
  switch (type) {
    case 'clarity':
    case 'brightness':
    case 'intensity':
    case 'consistency':
      return { ...prevAppearance, [type]: value }
    case 'appearanceColor':
    case 'appearanceImpression': {
      const newAppearance = { ...prevAppearance, [type]: [...prevAppearance[type], value] }
      if (newAppearance[type].length > MAX_VALUES_COUNT) newAppearance[type].splice(0, 1)
      return newAppearance
    }
    default:
      throw Error('不正な呼び出し方です')
  }
}

export default appearanceReducer
