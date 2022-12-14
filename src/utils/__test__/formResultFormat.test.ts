import formResultFormat from '../formResultFormat'

describe('formResultFormat', () => {
  it('引数が文字列型の場合、引数をそのまま返す', () => {
    expect(formResultFormat('test')).toBe('test')
  })
  it('引数が数値型の場合、文字列型に変換して返す', () => {
    expect(formResultFormat(5)).toBe('5')
  })
  it('引数がundefinedまたはnullの場合、nullを返す', () => {
    expect(formResultFormat(undefined)).toBe(null)
    expect(formResultFormat(null)).toBe(null)
  })
  it.each([
    [[], ''],
    [['test'], 'test'],
    [['test', 'test', 'test'], 'test、test、test']
  ])('引数が配列の場合、要素を「、」で結合した文字列を返す', (input, expected) => {
    expect(formResultFormat(input)).toBe(expected)
  })
})
