import { renderHook } from '@testing-library/react'

import useGetTabButtonClassName from '../useGetTabButtonClassName'
import { TastingSheet, WineColor } from '../../types'

const setUp = () => {
  const { result } = renderHook(() => useGetTabButtonClassName())

  return {
    ...result.current
  }
}

type TestCases = [WineColor, string][]

describe('useGetTabButtonClassName', () => {
  let tastingSheet: TastingSheet

  const testCases: TestCases = [
    ['red', 'tab-error'],
    ['white', 'tab-success']
  ]

  beforeEach(() => {
    tastingSheet = {} as TastingSheet
  })

  describe('getTabButtonClassName', () => {
    test('tabを含む文字列を返す', () => {
      const { getTabButtonClassName } = setUp()
      expect(getTabButtonClassName(tastingSheet, false).includes('tab')).toBeTruthy()
    })

    test('isShowがtrueの場合、tab-activeを含む文字列を返す', () => {
      const isShow = true
      const { getTabButtonClassName } = setUp()
      expect(getTabButtonClassName(tastingSheet, isShow).includes('tab-active')).toBeTruthy()
    })

    test.each(testCases)('colorが%sの場合、%sを含む文字列を返す', (color, result) => {
      tastingSheet.color = color
      const { getTabButtonClassName } = setUp()
      expect(getTabButtonClassName(tastingSheet, false).includes(result)).toBeTruthy()
    })
  })
})
