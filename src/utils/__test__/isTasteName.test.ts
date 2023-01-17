import { TasteName } from '../../types'
import isTasteName from '../isTasteName'

describe('isAppearanceName', () => {
  const testItems: [TasteName][] = [
    ['acidity'],
    ['attack'],
    ['astringent'],
    ['sweetness'],
    ['bitterness'],
    ['alcohol'],
    ['balance'],
    ['afterTaste']
  ]
  it.each(testItems)('引数が%sの場合、trueを返す', (name) => {
    expect(isTasteName(name)).toBeTruthy()
  })
  it('それ以外の場合はfalseを返す', () => {
    expect(isTasteName('test')).toBeFalsy()
  })
})
