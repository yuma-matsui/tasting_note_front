import { Appearance, AppearanceAllLabels } from '../../types'
import AppearanceName from '../../types/appearance/shared/appearanceName'
import appearanceReducer from '../appearanceReducer'

describe('appearanceReducer', () => {
  let type: AppearanceName
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
    it.each(testItems)('typeが%sの場合プロパティの値が「%s」に変更される', (actionType, newValue) => {
      const action = { type: actionType, payload: { value: newValue } }
      const newAppearance = appearanceReducer(initialAppearance, action)
      expect(newAppearance[actionType]).toBe(newValue)
    })
  })

  describe('typeがappearanceColorの場合', () => {
    beforeEach(() => {
      type = 'appearanceColor'
      initialAppearance.appearanceColor = []
    })

    const firstColor: AppearanceAllLabels = 'アンバー'
    const secondColor: AppearanceAllLabels = 'グリーンがかった'
    const thirdColor: AppearanceAllLabels = 'トパーズ'

    describe('appearanceColorの初期値が空の配列の場合', () => {
      it('appearanceColorプロパティの配列にvalueが追加される', () => {
        const action = { type, payload: { value: firstColor } }
        const newAppearance = appearanceReducer(initialAppearance, action)
        expect(newAppearance.appearanceColor).toEqual([firstColor])
      })
    })
    describe('appearanceColorの初期値が要素を1つ持つ配列の場合', () => {
      it('appearanceColorプロパティの配列にvalueが追加される', () => {
        initialAppearance.appearanceColor.push(firstColor)
        const action = { type, payload: { value: secondColor } }
        const newAppearance = appearanceReducer(initialAppearance, action)
        expect(newAppearance.appearanceColor).toEqual([firstColor, secondColor])
      })
    })
    describe('appearanceColorの初期値が要素を2つ以上持つ配列の場合', () => {
      it('appearanceColorプロパティの配列にvalueが追加されて先頭の要素が削除される', () => {
        initialAppearance.appearanceColor.push(firstColor, secondColor)
        const action = { type, payload: { value: thirdColor } }
        const newAppearance = appearanceReducer(initialAppearance, action)
        expect(newAppearance.appearanceColor).toEqual([secondColor, thirdColor])
      })
    })
  })
  describe('typeがappearanceImpressionの場合', () => {
    beforeEach(() => {
      type = 'appearanceImpression'
      initialAppearance.appearanceColor = []
    })

    const firstImpression: AppearanceAllLabels = '若々しい'
    const secondImpression: AppearanceAllLabels = '軽快な'
    const thirdImpression: AppearanceAllLabels = '酸化が進んだ'

    describe('appearanceImpressionの初期値が空の配列の場合', () => {
      it('appearanceImpressionプロパティの配列にvalueが追加される', () => {
        const action = { type, payload: { value: firstImpression } }
        const newAppearance = appearanceReducer(initialAppearance, action)
        expect(newAppearance.appearanceImpression).toEqual([firstImpression])
      })
    })
    describe('appearanceImpressionの初期値が要素を1つ持つ配列の場合', () => {
      it('appearanceImpressionプロパティの配列にvalueが追加される', () => {
        initialAppearance.appearanceImpression.push(firstImpression)
        const action = { type, payload: { value: secondImpression } }
        const newAppearance = appearanceReducer(initialAppearance, action)
        expect(newAppearance.appearanceImpression).toEqual([firstImpression, secondImpression])
      })
    })
    describe('appearanceImpressionの初期値が要素を2つ以上持つ配列の場合', () => {
      it('appearanceImpressionプロパティの配列にvalueが追加されて先頭の要素が削除される', () => {
        initialAppearance.appearanceImpression.push(firstImpression, secondImpression)
        const action = { type, payload: { value: thirdImpression } }
        const newAppearance = appearanceReducer(initialAppearance, action)
        expect(newAppearance.appearanceImpression).toEqual([secondImpression, thirdImpression])
      })
    })
  })
})
