import { renderHook } from '@testing-library/react'

import useGetButtonFlexType from '../useGetButtonFlexType'

const setUp = () => {
  const { result } = renderHook(() => useGetButtonFlexType())

  return {
    ...result.current
  }
}

describe('useGetButtonFlexType', () => {
  describe('getButtonFlexType', () => {
    test.each([
      [false, 'justify-between'],
      [true, 'justify-center']
    ])('引数に%pを与えた場合、%sが返る', (isFirstStep, result) => {
      const { getButtonFlexType } = setUp()
      expect(getButtonFlexType(isFirstStep)).toEqual(result)
    })
  })
})
