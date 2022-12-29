import { Dispatch } from 'react'
import Appearance from '../appearance/shared/appearance'
import AppearanceReducerAction from '../appearanceReducerAction'

type AppearanceContextType = {
  appearance: Appearance
  dispatch: Dispatch<AppearanceReducerAction>
}

export default AppearanceContextType
