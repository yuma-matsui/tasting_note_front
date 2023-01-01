import { Dispatch } from 'react'
import TastingSheetReducerAction from '../states/tastingSheetReducerAction'
import TastingSheet from '../tasting_sheet/tastingSheet'

type TastingSheetContextType = {
  tastingSheet: TastingSheet
  dispatch: Dispatch<TastingSheetReducerAction>
}

export default TastingSheetContextType
