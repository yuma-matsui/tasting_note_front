import { Dispatch, SetStateAction } from 'react'
import TastingSheetApi from '../api/tastingSheetApi'

type TastingSheetsContextType = {
  tastingSheets: TastingSheetApi[]
  setTastingSheets: Dispatch<SetStateAction<TastingSheetApi[]>>
}

export default TastingSheetsContextType
