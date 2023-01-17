import { TastingSheetAllName, TastingSheetUseFormName } from '../types'
import isAppearanceName from './isAppearanceName'
import isConclusionName from './isConclusionName'
import isFlavorName from './isFlavorName'
import isTasteName from './isTasteName'

const convertToFormName = (name: TastingSheetAllName): TastingSheetUseFormName => {
  if (isAppearanceName(name)) return `tastingSheet.appearance.${name}`
  if (isFlavorName(name)) return `tastingSheet.flavor.${name}`
  if (isTasteName(name)) return `tastingSheet.taste.${name}`
  if (isConclusionName(name)) return `tastingSheet.conclusion.${name}`
  throw new Error('不正な呼び出し方です。')
}

export default convertToFormName
