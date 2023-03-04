import { Dispatch, SetStateAction } from 'react'

import TastingSheet from '../tasting_sheet/tastingSheet'

type TastingSheetContextType = {
  tastingSheet: TastingSheet
  setTastingSheet: Dispatch<SetStateAction<TastingSheet>>
}

export default TastingSheetContextType
