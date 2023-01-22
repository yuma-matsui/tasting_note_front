import { TastingSheetFormType } from '../../types'
import formTitleFormat from '../formTitleFormat'

describe('formTitleFormat', () => {
  const testCases: [TastingSheetFormType, string][] = [
    ['appearance', '外観'],
    ['flavor', '香り'],
    ['taste', '味わい'],
    ['conclusion', 'まとめ'],
    ['setting', '設定'],
    ['confirmation', 'あなたの回答']
  ]
  it.each(testCases)('%sを引数に与えた場合%sが返る', (input, expected) => {
    const result = formTitleFormat(input)
    expect(result).toBe(expected)
  })
})
