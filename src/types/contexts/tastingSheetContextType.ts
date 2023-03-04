import { Dispatch, SetStateAction } from 'react'

import TastingSheet from '../tasting_sheet/tastingSheet'

type TastingSheetContextType = {
  tastingSheet: TastingSheet
  setTastingSheet: Dispatch<SetStateAction<TastingSheet>>
  requesting: boolean
  setRequesting: Dispatch<SetStateAction<boolean>>
}

export default TastingSheetContextType
