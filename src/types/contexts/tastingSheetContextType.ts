import { Dispatch, SetStateAction } from 'react'

import TastingSheet from '../tasting_sheet/tastingSheet'

type TastingSheetContextType = {
  tastingSheet: TastingSheet
  setTastingSheet: Dispatch<SetStateAction<TastingSheet>>
  posting: boolean
  setPosting: Dispatch<SetStateAction<boolean>>
}

export default TastingSheetContextType
