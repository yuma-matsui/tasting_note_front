import { Dispatch } from 'react'

import TastingSheetReducerAction from '../states/tastingSheetReducerAction'
import Flavor from '../tasting_sheet/flavor/flavor'

type FlavorContextType = {
  flavor: Flavor
  dispatch: Dispatch<TastingSheetReducerAction>
}

export default FlavorContextType
