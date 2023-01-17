import { AppearanceName, ConclusionName, FlavorName, TasteName, TastingSheetUseFormName } from '../types'

const convertToFormName = (name: AppearanceName | FlavorName | TasteName | ConclusionName): TastingSheetUseFormName => {
  switch (name) {
    case 'appearanceColor':
    case 'appearanceImpression':
    case 'clarity':
    case 'brightness':
    case 'consistency':
    case 'intensity':
      return `tastingSheet.appearance.${name}`
    case 'flavorFirstImpression':
    case 'flavorFruit':
    case 'flavorFlower':
    case 'flavorSpice':
    case 'flavorImpression':
      return `tastingSheet.flavor.${name}`
    case 'attack':
    case 'sweetness':
    case 'acidity':
    case 'astringent':
    case 'bitterness':
    case 'balance':
    case 'alcohol':
    case 'afterTaste':
      return `tastingSheet.taste.${name}`
    case 'evaluation':
    case 'optimumTemperature':
    case 'glass':
    case 'decantage':
    case 'vintage':
    case 'country':
    case 'grape':
      return `tastingSheet.conclusion.${name}`
    default:
      throw new Error('不正な呼び出し方です。')
  }
}

export default convertToFormName
