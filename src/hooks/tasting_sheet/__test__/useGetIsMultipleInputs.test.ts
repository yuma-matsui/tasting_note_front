import { renderHook } from '@testing-library/react'

import useGetIsMultipleInputs from '../useGetIsMultipleInputs'

describe('useGetIsMultipleInputs', () => {
  describe('isMultipleInputs', () => {
    test.each([
      ['appearanceColors', true],
      ['appearanceImpressions', true],
      ['flavorFirstImpressions', true],
      ['flavorFruits', true],
      ['flavorFlowers', true],
      ['flavorSpices', true],
      ['flavorImpressions', true]
    ])('nameが%sの場合は%pを返す', (name, result) => {
      const {
        result: { current }
      } = renderHook(() => useGetIsMultipleInputs())

      expect(current.isMultipleInputs(name)).toEqual(result)
    })

    test.each([['test'], ['brightness'], ['consistency']])('それ以外の場合はfalseを返す', (name) => {
      const { result } = renderHook(() => useGetIsMultipleInputs())

      expect(result.current.isMultipleInputs(name)).toBeFalsy()
    })
  })
})
