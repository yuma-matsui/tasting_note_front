import { Flavor, FlavorAllLabels, FlavorName } from '../../types'
import flavorReducer from '../flavorReducer'

describe('flavorReducer', () => {
  const initialFlavor: Flavor = {
    flavorFirstImpression: [],
    flavorFruit: [],
    flavorFlower: [],
    flavorSpice: [],
    flavorImpression: []
  }

  describe('flavorの更新', () => {
    const testItems: [FlavorName, FlavorAllLabels, FlavorAllLabels][] = [
      ['flavorFirstImpression', '閉じている', 'チャーミングな'],
      ['flavorFruit', '洋梨', 'マンゴー'],
      ['flavorFlower', 'スイカズラ', 'ヘーゼルナッツ'],
      ['flavorSpice', '石灰', 'フェノール'],
      ['flavorImpression', '若々しい', '第2アロマが強い']
    ]

    describe.each(testItems)('typeが%sの場合', (type, firstValue, secondValue) => {
      beforeEach(() => {
        initialFlavor[type] = []
      })

      it('空の配列の場合valueが追加される', () => {
        const action = { type, payload: { value: firstValue } }
        const newFlavor = flavorReducer(initialFlavor, action)
        expect(newFlavor[type]).toEqual([firstValue])
      })
      it('要素を1もつ配列の場合valueが追加される', () => {
        initialFlavor[type].push(firstValue)
        const action = { type, payload: { value: secondValue } }
        const newFlavor = flavorReducer(initialFlavor, action)
        expect(newFlavor[type]).toEqual([firstValue, secondValue])
      })
      it('既にvalueを含む配列の場合valueが取り除かれる', () => {
        initialFlavor[type].push(firstValue)
        const action = { type, payload: { value: firstValue } }
        const newFlavor = flavorReducer(initialFlavor, action)
        expect(newFlavor[type]).toEqual([])
      })
    })
  })
})
