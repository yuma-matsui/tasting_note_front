import { renderHook } from '@testing-library/react'

import useGetIsMultipleInputs from '../useGetIsMultipleInputs'

describe('useGetIsMultipleInputs', () => {
  describe('isMultipleInputs', () => {
    test.each([
      ['appearanceColors'],
      ['appearanceImpressions'],
      ['flavorFirstImpressions'],
      ['flavorFruits'],
      ['flavorFlowers'],
      ['flavorSpices'],
      ['flavorImpressions']
    ])('nameが%sの場合はtrueを返す', (name) => {
      const {
        result: { current }
      } = renderHook(() => useGetIsMultipleInputs())
      expect(current.isMultipleInputs(name)).toBeTruthy()
    })

    test.each([['test'], ['brightness'], ['consistency']])('それ以外の場合はfalseを返す', (name) => {
      const { result } = renderHook(() => useGetIsMultipleInputs())
      expect(result.current.isMultipleInputs(name)).toBeFalsy()
    })
  })
})
