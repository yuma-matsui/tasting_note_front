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

    describe('空の配列の場合', () => {
      it('valueが追加される', () => {
        const action = { type, payload: { value: firstColor } }
        const newAppearance = appearanceReducer(initialAppearance, action)
        expect(newAppearance.appearanceColor).toEqual([firstColor])
      })
    })
    describe('要素を1つ持つ配列の場合', () => {
      it('valueが追加される', () => {
        initialAppearance.appearanceColor.push(firstColor)
        const action = { type, payload: { value: secondColor } }
        const newAppearance = appearanceReducer(initialAppearance, action)
        expect(newAppearance.appearanceColor).toEqual([firstColor, secondColor])
      })
    })
    describe('すでにvalueを含む配列の場合', () => {
      it('valueが取り除かれる', () => {
        initialAppearance.appearanceColor.push(firstColor)
        const action = { type, payload: { value: firstColor } }
        const newAppearance = appearanceReducer(initialAppearance, action)
        expect(newAppearance.appearanceColor).toEqual([])
      })
    })
  })

  describe('typeがappearanceImpressionの場合', () => {
    beforeEach(() => {
      type = 'appearanceImpression'
      initialAppearance.appearanceImpression = []
    })

    const firstImpression: AppearanceAllLabels = '若々しい'
    const secondImpression: AppearanceAllLabels = '軽快な'

    describe('空の配列の場合', () => {
      it('valueが追加される', () => {
        const action = { type, payload: { value: firstImpression } }
        const newAppearance = appearanceReducer(initialAppearance, action)
        expect(newAppearance.appearanceImpression).toEqual([firstImpression])
      })
    })
    describe('要素を1つ持つ配列の場合', () => {
      it('valueが追加される', () => {
        initialAppearance.appearanceImpression.push(firstImpression)
        const action = { type, payload: { value: secondImpression } }
        const newAppearance = appearanceReducer(initialAppearance, action)
        expect(newAppearance.appearanceImpression).toEqual([firstImpression, secondImpression])
      })
    })
    describe('すでにvalueを含む配列の場合', () => {
      it('valueが取り除かれる', () => {
        initialAppearance.appearanceImpression.push(firstImpression)
        const action = { type, payload: { value: firstImpression } }
        const newAppearance = appearanceReducer(initialAppearance, action)
        expect(newAppearance.appearanceImpression).toEqual([])
      })
    })
  })
})
