import TastingSheet from '../tasting_sheet/tastingSheet'

type TastingSheetApi = TastingSheet & {
  id: number
  createdAt: string
}

export default TastingSheetApi
