import { TastingSheetApi } from '../../types'

const useTastingSheetCardColor = (tastingSheet: TastingSheetApi) => ({
  bgColor: tastingSheet.color === 'red' ? 'bg-theme-red' : 'bg-theme-green',
  textColor: tastingSheet.color === 'red' ? 'text-theme-red' : 'text-theme-green'
})

export default useTastingSheetCardColor
