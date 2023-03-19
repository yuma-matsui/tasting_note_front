import { TastingSheetApi } from '../../types'

const useTastingSheetCardColor = (tastingSheet: TastingSheetApi) => ({
  bgColor: tastingSheet.color === 'red' ? 'bg-red-600' : 'bg-emerald-500',
  textColor: tastingSheet.color === 'red' ? 'text-red-700' : 'text-emerald-500'
})

export default useTastingSheetCardColor
