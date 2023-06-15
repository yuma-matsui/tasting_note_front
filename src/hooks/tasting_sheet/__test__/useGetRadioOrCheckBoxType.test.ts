import { renderHook } from '@testing-library/react'

import useGetRadioOrCheckBoxClassName from '../useGetRadioOrCheckBoxType'

describe('useGetRadioOrCheckBoxClassName', () => {
  describe('type', () => {
    test.each([
      [false, 'radio'],
      [true, 'checkbox']
    ])('引数のisCheckBoxが%pの場合、%sを返す', (isCheckBox, result) => {
      const {
        result: { current }
      } = renderHook(() => useGetRadioOrCheckBoxClassName(isCheckBox))
      expect(current.type).toEqual(result)
    })
  })
})
