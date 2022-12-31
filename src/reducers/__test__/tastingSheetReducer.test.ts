import { AppearanceName, TastingSheet, TastingSheetName } from '../../types'
import tastingSheetReducer from '../tastingSheetReducer'

describe('tastingSheetReducer', () => {
  const initialSheet: TastingSheet = {
    name: '',
    time: 3,
    color: 'white',
    appearance: {
      clarity: '',
      brightness: '',
      appearanceColor: [],
      intensity: '',
      consistency: '',
      appearanceImpression: []
    }
  }

  describe('name, color, time', () => {
    const testItems: [TastingSheetName, string][] = [
      ['name', 'test'],
      ['color', 'red']
    ]

    it.each(testItems)('nameが%sの場合プロパティの値が「%s」に変更される', (name, value) => {
      const action = { payload: { name, value } }
      const newSheet = tastingSheetReducer(initialSheet, action)
      expect(newSheet[name]).toBe(value)
    })
    it('nameがtimeの場合プロパティの値が数値型のvalueになる', () => {
      const name = 'time'
      const action = { payload: { name, value: '5' } }
      const newSheet = tastingSheetReducer(initialSheet, action)
      expect(newSheet[name]).toBe(5)
    })
  })
  describe('appearance', () => {
    describe('clarity, brightness, intensity, consistency', () => {
      const testItems: [AppearanceName, string][] = [
        ['clarity', '澄んだ'],
        ['brightness', '輝きのある'],
        ['intensity', '濃い'],
        ['consistency', 'やや強い']
      ]

      it.each(testItems)('nameが%sの場合プロパティの値が「%s」に変更される', (name, value) => {
        const action = { payload: { name, value } }
        const newSheet = tastingSheetReducer(initialSheet, action)
        expect(newSheet.appearance[name]).toBe(value)
      })
    })
    describe('appearanceColor, appearanceImpression', () => {
      const testItems: ['appearanceColor' | 'appearanceImpression', string, string][] = [
        ['appearanceColor', 'アンバー', 'グリーンがかった'],
        ['appearanceImpression', '若々しい', '軽快な']
      ]

      describe.each(testItems)('nameが%sの場合', (name, firstValue, secondValue) => {
        beforeEach(() => {
          initialSheet.appearance[name] = []
        })

        it('空の配列の場合valueが追加される', () => {
          const action = { payload: { name, value: firstValue } }
          const newSheet = tastingSheetReducer(initialSheet, action)
          expect(newSheet.appearance[name]).toEqual([firstValue])
        })
        it('要素を1もつ配列の場合valueが追加される', () => {
          initialSheet.appearance[name].push(firstValue)
          const action = { payload: { name, value: secondValue } }
          const newSheet = tastingSheetReducer(initialSheet, action)
          expect(newSheet.appearance[name]).toEqual([firstValue, secondValue])
        })
        it('既にvalueを含む配列の場合valueが取り除かれる', () => {
          initialSheet.appearance[name].push(firstValue)
          const action = { payload: { name, value: firstValue } }
          const newSheet = tastingSheetReducer(initialSheet, action)
          expect(newSheet.appearance[name]).toEqual([])
        })
      })
    })
  })
})
