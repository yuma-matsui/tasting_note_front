import { TastingSheet, TastingSheetName } from '../../types'
import tastingSheetReducer from '../tastingSheetReducer'

describe('tastingSheetReducer', () => {
  const initialSheet: TastingSheet = {
    name: '',
    time: 3,
    color: 'white'
  }

  describe('name, color, time', () => {
    const testItems: [TastingSheetName, string, string][] = [
      ['name', 'test', 'name'],
      ['color', 'red', 'color']
    ]

    it.each(testItems)('typeが%sの場合プロパティの値が「%s」に変更される', (type, value, name) => {
      const action = { type, payload: { value, name } }
      const newSheet = tastingSheetReducer(initialSheet, action)
      expect(newSheet[type]).toBe(value)
    })
    it('typeがtimeの場合プロパティの値が数値型のvalueになる', () => {
      const type = 'time'
      const action = { type, payload: { value: '5', name: 'time' } }
      const newSheet = tastingSheetReducer(initialSheet, action)
      expect(newSheet[type]).toBe(5)
    })
  })
})
