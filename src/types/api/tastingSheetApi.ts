import TastingSheet from '../tasting_sheet/tastingSheet'
import WineApi from './wineApi'

type TastingSheetApi = TastingSheet & {
  id: number
  createdAt: string
  wine: WineApi | null
}

export default TastingSheetApi
