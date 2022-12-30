import { Dispatch } from 'react'

import Appearance from '../tasting_sheet/appearance/shared/appearance'
import TastingSheetReducerAction from '../states/tastingSheetReducerAction'

type AppearanceContextType = {
  appearance: Appearance
  dispatch: Dispatch<TastingSheetReducerAction>
}

export default AppearanceContextType
