import { Dispatch, SetStateAction } from 'react'
import TastingSheet from './tastingSheet'

type TastingSheetContextType = {
  tastingSheet: TastingSheet
  setTastingSheet: Dispatch<SetStateAction<TastingSheet>>
}

export default TastingSheetContextType
