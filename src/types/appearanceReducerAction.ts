import AppearanceAllLabels from './appearance/shared/appearanceAllLabels'
import AppearanceName from './appearance/shared/appearanceName'

type AppearanceReducerAction = {
  type: AppearanceName
  payload: {
    value: AppearanceAllLabels
  }
}

export default AppearanceReducerAction
