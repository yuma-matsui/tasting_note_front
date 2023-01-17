import { ConclusionName } from '../../types'
import isConclusionName from '../isConclusionName'

describe('isAppearanceName', () => {
  const testItems: [ConclusionName][] = [
    ['evaluation'],
    ['optimumTemperature'],
    ['glass'],
    ['decantage'],
    ['country'],
    ['glass'],
    ['vintage']
  ]
  it.each(testItems)('引数が%sの場合、trueを返す', (name) => {
    expect(isConclusionName(name)).toBeTruthy()
  })
  it('それ以外の場合はfalseを返す', () => {
    expect(isConclusionName('test')).toBeFalsy()
  })
})
