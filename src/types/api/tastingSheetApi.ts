import TastingSheet from '../tasting_sheet/tastingSheet'

type TastingSheetApi = TastingSheet & {
  id: number
  userId: number
}

export default TastingSheetApi
