import TastingSheet from '../tasting_sheet/tastingSheet'
import Wine from '../wine/wine'

type TastingSheetApi = TastingSheet & {
  id: number
  createdAt: string
  wine: Wine | null
}

export default TastingSheetApi
