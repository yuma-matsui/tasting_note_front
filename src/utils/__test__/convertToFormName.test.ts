import { AppearanceName, ConclusionName, FlavorName, TasteName, TastingSheetUseFormName } from '../../types'
import convertToFormName from '../convertToFormName'

describe('convertToFormName', () => {
  describe('引数nameの型がAppearanceNameのとき', () => {
    const appearanceTestCases: [AppearanceName, TastingSheetUseFormName][] = [
      ['clarity', 'tastingSheet.appearance.clarity'],
      ['brightness', 'tastingSheet.appearance.brightness'],
      ['appearanceColor', 'tastingSheet.appearance.appearanceColor'],
      ['consistency', 'tastingSheet.appearance.consistency'],
      ['intensity', 'tastingSheet.appearance.intensity'],
      ['appearanceImpression', 'tastingSheet.appearance.appearanceImpression']
    ]
    it.each(appearanceTestCases)('引数が%sの場合%sを返す', (name, expected) => {
      expect(convertToFormName(name)).toBe(expected)
    })
  })
  describe('引数nameの型がFlavorNameのとき', () => {
    const flavorTestCases: [FlavorName, TastingSheetUseFormName][] = [
      ['flavorFirstImpression', 'tastingSheet.flavor.flavorFirstImpression'],
      ['flavorFruit', 'tastingSheet.flavor.flavorFruit'],
      ['flavorFlower', 'tastingSheet.flavor.flavorFlower'],
      ['flavorSpice', 'tastingSheet.flavor.flavorSpice'],
      ['flavorImpression', 'tastingSheet.flavor.flavorImpression']
    ]
    it.each(flavorTestCases)('引数が%sの場合%sを返す', (name, expected) => {
      expect(convertToFormName(name)).toBe(expected)
    })
  })
  describe('引数nameの型がTasteNameのとき', () => {
    const tasteTestCases: [TasteName, TastingSheetUseFormName][] = [
      ['attack', 'tastingSheet.taste.attack'],
      ['acidity', 'tastingSheet.taste.acidity'],
      ['sweetness', 'tastingSheet.taste.sweetness'],
      ['astringent', 'tastingSheet.taste.astringent'],
      ['bitterness', 'tastingSheet.taste.bitterness'],
      ['balance', 'tastingSheet.taste.balance'],
      ['alcohol', 'tastingSheet.taste.alcohol'],
      ['afterTaste', 'tastingSheet.taste.afterTaste']
    ]
    it.each(tasteTestCases)('引数が%sの場合%sを返す', (name, expected) => {
      expect(convertToFormName(name)).toBe(expected)
    })
  })
  describe('引数nameの型がConclusionNameのとき', () => {
    const conclusionTestCases: [ConclusionName, TastingSheetUseFormName][] = [
      ['evaluation', 'tastingSheet.conclusion.evaluation'],
      ['optimumTemperature', 'tastingSheet.conclusion.optimumTemperature'],
      ['glass', 'tastingSheet.conclusion.glass'],
      ['decantage', 'tastingSheet.conclusion.decantage'],
      ['country', 'tastingSheet.conclusion.country'],
      ['vintage', 'tastingSheet.conclusion.vintage'],
      ['grape', 'tastingSheet.conclusion.grape']
    ]
    it.each(conclusionTestCases)('引数が%sの場合%sを返す', (name, expected) => {
      expect(convertToFormName(name)).toBe(expected)
    })
  })
})
