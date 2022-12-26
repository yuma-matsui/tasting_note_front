import {
  Appearance,
  AppearanceColorWhite,
  AppearanceImpressionWhite,
  Brightness,
  Clarity,
  Consistency,
  Intensity
} from '../../types'
import AppearanceName from '../../types/appearance/shared/appearanceName'
import appearanceReducer from '../appearanceReducer'

describe('appearanceReducer', () => {
  let initialAppearance: Appearance = {
    clarity: 'やや濁った',
    brightness: 'モヤがかった',
    appearanceColor: [],
    intensity: 'やや濃い',
    consistency: '強い',
    appearanceImpression: []
  }

  describe('typeがclarityの場合', () => {
    it('clarityプロパティの値がvalueの値に変更される', () => {
      const type: AppearanceName = 'clarity'
      const value: Clarity = '澄んだ'
      const action = { type, payload: { value } }
      const newAppearance = appearanceReducer(initialAppearance, action)
      expect(newAppearance.clarity).toBe(value)
    })
  })
  describe('typeがbrightnessの場合', () => {
    it('brightnessプロパティの値がvalueの値に変更される', () => {
      const type: AppearanceName = 'brightness'
      const value: Brightness = '輝きのある'
      const action = { type, payload: { value } }
      const newAppearance = appearanceReducer(initialAppearance, action)
      expect(newAppearance.brightness).toBe(value)
    })
  })
  describe('typeがintensityの場合', () => {
    it('intensityプロパティの値がvalueの値に変更される', () => {
      const type: AppearanceName = 'intensity'
      const value: Intensity = '濃い'
      const action = { type, payload: { value } }
      const newAppearance = appearanceReducer(initialAppearance, action)
      expect(newAppearance.intensity).toBe(value)
    })
  })
  describe('typeがconsistencyの場合', () => {
    it('consistencyプロパティの値がvalueの値に変更される', () => {
      const type: AppearanceName = 'consistency'
      const value: Consistency = 'やや強い'
      const action = { type, payload: { value } }
      const newAppearance = appearanceReducer(initialAppearance, action)
      expect(newAppearance.consistency).toBe(value)
    })
  })
  describe('typeがappearanceColorの場合', () => {
    const type: AppearanceName = 'appearanceColor'

    describe('appearanceColorの初期値が空の配列の場合', () => {
      it('appearanceColorプロパティの配列にvalueが追加される', () => {
        const value: AppearanceColorWhite = 'グリーンがかった'
        const action = { type, payload: { value } }
        const newAppearance = appearanceReducer(initialAppearance, action)
        expect(newAppearance.appearanceColor).toEqual([value])
      })
    })
    describe('appearanceColorの初期値が要素を1つ持つ配列の場合', () => {
      it('appearanceColorプロパティの配列にvalueが追加される', () => {
        const firstColor: AppearanceColorWhite = 'アンバー'
        const secondColor: AppearanceColorWhite = 'グリーンがかった'
        initialAppearance = {
          clarity: 'やや濁った',
          brightness: 'モヤがかった',
          appearanceColor: [firstColor],
          intensity: 'やや濃い',
          consistency: '強い',
          appearanceImpression: []
        }
        const action = { type, payload: { value: secondColor } }
        const newAppearance = appearanceReducer(initialAppearance, action)
        expect(newAppearance.appearanceColor).toEqual([firstColor, secondColor])
      })
    })
    describe('appearanceColorの初期値が要素を2つ以上持つ配列の場合', () => {
      it('appearanceColorプロパティの配列にvalueが追加されて先頭の要素が削除される', () => {
        const firstColor: AppearanceColorWhite = 'アンバー'
        const secondColor: AppearanceColorWhite = 'グリーンがかった'
        const thirdColor: AppearanceColorWhite = 'トパーズ'
        initialAppearance = {
          clarity: 'やや濁った',
          brightness: 'モヤがかった',
          appearanceColor: [firstColor, secondColor],
          intensity: 'やや濃い',
          consistency: '強い',
          appearanceImpression: []
        }
        const action = { type, payload: { value: thirdColor } }
        const newAppearance = appearanceReducer(initialAppearance, action)
        expect(newAppearance.appearanceColor).toEqual([secondColor, thirdColor])
      })
    })
  })
  describe('typeがappearanceImpressionの場合', () => {
    const type: AppearanceName = 'appearanceImpression'

    describe('appearanceImpressionの初期値が空の配列の場合', () => {
      it('appearanceImpressionプロパティの配列にvalueが追加される', () => {
        const value: AppearanceImpressionWhite = '若々しい'
        const action = { type, payload: { value } }
        const newAppearance = appearanceReducer(initialAppearance, action)
        expect(newAppearance.appearanceImpression).toEqual([value])
      })
    })
    describe('appearanceImpressionの初期値が要素を1つ持つ配列の場合', () => {
      it('appearanceImpressionプロパティの配列にvalueが追加される', () => {
        const firstImpression: AppearanceImpressionWhite = '若々しい'
        const secondImpression: AppearanceImpressionWhite = '軽快な'
        initialAppearance = {
          clarity: 'やや濁った',
          brightness: 'モヤがかった',
          appearanceColor: [],
          intensity: 'やや濃い',
          consistency: '強い',
          appearanceImpression: [firstImpression]
        }
        const action = { type, payload: { value: secondImpression } }
        const newAppearance = appearanceReducer(initialAppearance, action)
        expect(newAppearance.appearanceImpression).toEqual([firstImpression, secondImpression])
      })
    })
    describe('appearanceImpressionの初期値が要素を2つ以上持つ配列の場合', () => {
      it('appearanceImpressionプロパティの配列にvalueが追加されて先頭の要素が削除される', () => {
        const firstImpression: AppearanceImpressionWhite = '若々しい'
        const secondImpression: AppearanceImpressionWhite = '軽快な'
        const thirdImpression: AppearanceImpressionWhite = '酸化が進んだ'
        initialAppearance = {
          clarity: 'やや濁った',
          brightness: 'モヤがかった',
          appearanceColor: [],
          intensity: 'やや濃い',
          consistency: '強い',
          appearanceImpression: [firstImpression, secondImpression]
        }
        const action = { type, payload: { value: thirdImpression } }
        const newAppearance = appearanceReducer(initialAppearance, action)
        expect(newAppearance.appearanceImpression).toEqual([secondImpression, thirdImpression])
      })
    })
  })
})
