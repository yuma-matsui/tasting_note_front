import formTitleFormat from '../formTitleFormat'

describe('formTitleFormat', () => {
  it.each([
    ['appearance', '外観'],
    ['flavor', '香り'],
    ['taste', '味わい'],
    ['conclusion', 'まとめ']
  ])('%sを引数に与えた場合%sが返る', (input, expected) => {
    const result = formTitleFormat(input)
    expect(result).toBe(expected)
  })
  it('それ以外の文字列を与えると例外が発生する', () => {
    expect(() => formTitleFormat('test')).toThrow('不正な呼び出し方です。')
  })
})
