import { AppearanceName } from '../../types'
import isAppearanceName from '../isAppearanceName'

describe('isAppearanceName', () => {
  const testItems: [AppearanceName][] = [
    ['clarity'],
    ['brightness'],
    ['appearanceColors'],
    ['intensity'],
    ['consistency'],
    ['appearanceImpressions']
  ]
  it.each(testItems)('引数が%sの場合、trueを返す', (name) => {
    expect(isAppearanceName(name)).toBeTruthy()
  })
  it('それ以外の場合はfalseを返す', () => {
    expect(isAppearanceName('test')).toBeFalsy()
  })
})
