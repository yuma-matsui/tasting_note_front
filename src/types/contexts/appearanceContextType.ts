import { Dispatch } from 'react'
import AppearanceReducerAction from '../appearanceReducerAction'
import Appearance from '../tasting_sheet/appearance/shared/appearance'

type AppearanceContextType = {
  appearance: Appearance
  dispatch: Dispatch<AppearanceReducerAction>
}

export default AppearanceContextType
