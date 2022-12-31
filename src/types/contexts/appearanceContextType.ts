import { Dispatch } from 'react'

import TastingSheetReducerAction from '../states/tastingSheetReducerAction'
import Appearance from '../tasting_sheet/appearance/appearance'

type AppearanceContextType = {
  appearance: Appearance
  dispatch: Dispatch<TastingSheetReducerAction>
}

export default AppearanceContextType
