import { Appearance, AppearanceAllLabels, AppearanceName } from '../../types/tasting_sheet/appearance'
import appearanceReducer from '../appearanceReducer'

describe('appearanceReducer', () => {
  const initialAppearance: Appearance = {
    clarity: '',
    brightness: '',
    appearanceColor: [],
    intensity: '',
    consistency: '',
    appearanceImpression: []
  }

  describe('clarity, brightness, intensity, consistency', () => {
    const testItems: [AppearanceName, AppearanceAllLabels][] = [
      ['clarity', '澄んだ'],
      ['brightness', '輝きのある'],
      ['intensity', '濃い'],
      ['consistency', 'やや強い']
    ]
    it.each(testItems)('typeが%sの場合プロパティの値が「%s」に変更される', (type, value) => {
      const action = { type, payload: { value } }
      const newAppearance = appearanceReducer(initialAppearance, action)
      expect(newAppearance[type]).toBe(value)
    })
  })

  describe('appearanceColor, appearanceImpression', () => {
    const testItems: ['appearanceColor' | 'appearanceImpression', AppearanceAllLabels, AppearanceAllLabels][] = [
      ['appearanceColor', 'アンバー', 'グリーンがかった'],
      ['appearanceImpression', '若々しい', '軽快な']
    ]

    describe.each(testItems)('typeが%sの場合', (type, firstValue, secondValue) => {
      beforeEach(() => {
        initialAppearance[type] = []
      })

      it('空の配列の場合valueが追加される', () => {
        const action = { type, payload: { value: firstValue } }
        const newAppearance = appearanceReducer(initialAppearance, action)
        expect(newAppearance[type]).toEqual([firstValue])
      })
      it('要素を1もつ配列の場合valueが追加される', () => {
        initialAppearance[type].push(firstValue)
        const action = { type, payload: { value: secondValue } }
        const newAppearance = appearanceReducer(initialAppearance, action)
        expect(newAppearance[type]).toEqual([firstValue, secondValue])
      })
      it('既にvalueを含む配列の場合valueが取り除かれる', () => {
        initialAppearance[type].push(firstValue)
        const action = { type, payload: { value: firstValue } }
        const newAppearance = appearanceReducer(initialAppearance, action)
        expect(newAppearance[type]).toEqual([])
      })
    })
  })
})
