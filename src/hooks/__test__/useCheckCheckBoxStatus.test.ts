import { renderHook } from '@testing-library/react'

import useCheckCheckBoxStatus from '../useCheckCheckBoxStatus'
import { WineColor } from '../../types'

const setUp = (type: string, color: WineColor) => {
  const { result } = renderHook(() => useCheckCheckBoxStatus(type, color))

  return {
    ...result.current
  }
}

type TestCases = [WineColor, boolean][]

describe('useCheckCheckBoxStatus', () => {
  describe('isCheckBox', () => {
    test.each([
      ['checkbox', true],
      ['radio', false]
    ])('typeが%sの場合、%pが返る', (type, result) => {
      const { isCheckBox } = setUp(type, 'red')
      expect(isCheckBox).toBe(result)
    })
  })

  describe('isRed', () => {
    const testCases: TestCases = [
      ['red', true],
      ['white', false]
    ]

    test.each(testCases)('colorが%sの場合、%pが返る', (color, result) => {
      const { isRed } = setUp('radio', color)
      expect(isRed).toBe(result)
    })
  })

  describe('isWhite', () => {
    const testCases: TestCases = [
      ['red', false],
      ['white', true]
    ]

    test.each(testCases)('colorが%sの場合、%pが返る', (color, result) => {
      const { isWhite } = setUp('radio', color)
      expect(isWhite).toBe(result)
    })
  })
})
