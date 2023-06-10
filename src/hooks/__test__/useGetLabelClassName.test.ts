import { renderHook } from '@testing-library/react'

import { WineColor } from '../../types'
import useGetLabelClassName from '../useGetLabelClassName'

const setUp = (color: WineColor, checked: boolean) => {
  const { result } = renderHook(() => useGetLabelClassName(color, checked))

  return {
    ...result.current
  }
}

type TestCases = [WineColor, string][]

describe('useGetLabelClassName', () => {
  describe('className', () => {
    test('label cursor-pointerが含まれる', () => {
      const { className } = setUp('red', false)
      expect(className.includes('label cursor-pointer')).toBeTruthy()
    })

    const testCases: TestCases = [
      ['red', 'bg-light-red'],
      ['white', 'bg-light-green']
    ]
    test.each(testCases)('colorが%s、checkedがtrueの場合、%sが含まれる', (color, result) => {
      const checked = true
      const { className } = setUp(color, checked)
      expect(className.includes(result)).toBeTruthy()
    })
  })
})
