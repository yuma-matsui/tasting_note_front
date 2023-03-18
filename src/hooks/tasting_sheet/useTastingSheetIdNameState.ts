import { TastingSheetApi } from '../../types'

const useTastingSheetIdNameState = (tastingSheet: TastingSheetApi) => ({
  sheetId: tastingSheet.id,
  sheetName: tastingSheet.name
})

export default useTastingSheetIdNameState
