import { Dispatch } from 'react'

import { Flavor } from '../tasting_sheet/flavor'
import TastingSheetReducerAction from '../states/tastingSheetReducerAction'

type FlavorContextType = {
  flavor: Flavor
  dispatch: Dispatch<TastingSheetReducerAction>
}

export default FlavorContextType
