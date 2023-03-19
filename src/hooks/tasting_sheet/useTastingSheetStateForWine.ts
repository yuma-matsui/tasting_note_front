import { TastingSheetApi } from '../../types'

const useTastingSheetStateForWine = (tastingSheet: TastingSheetApi) => ({
  id: tastingSheet.id,
  name: tastingSheet.name,
  color: tastingSheet.color
})

export default useTastingSheetStateForWine
