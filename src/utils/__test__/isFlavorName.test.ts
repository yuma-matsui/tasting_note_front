import { FlavorName } from '../../types'
import isFlavorName from '../isFlavorName'

describe('isFlavorName', () => {
  const testItems: [FlavorName][] = [
    ['flavorFirstImpression'],
    ['flavorFruit'],
    ['flavorFlower'],
    ['flavorSpice'],
    ['flavorImpression']
  ]
  it.each(testItems)('引数が%sの場合、trueを返す', (name) => {
    expect(isFlavorName(name)).toBeTruthy()
  })
  it('それ以外の場合はfalseを返す', () => {
    expect(isFlavorName('test')).toBeFalsy()
  })
})
