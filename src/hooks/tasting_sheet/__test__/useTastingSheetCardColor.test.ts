import { renderHook } from '@testing-library/react'

import useTastingSheetCardColor from '../useTastingSheetCardColor'
import { TastingSheetApi, WineColor } from '../../../types'
import { initialTastingSheet } from '../../../utils'

type TestCases = [WineColor, string, string][]

describe('useTastingSheetCardColor', () => {
  let tastingSheet: TastingSheetApi
  const testCases: TestCases = [
    ['red', 'bg-theme-red', 'text-theme-red'],
    ['white', 'bg-theme-green', 'text-theme-green']
  ]

  beforeEach(() => {
    tastingSheet = {
      ...initialTastingSheet,
      id: 1,
      createdAt: 'test',
      wine: null
    }
  })

  describe.each(testCases)('tastingSheetのcolorが%sの場合', (color, bgColor, textColor) => {
    beforeEach(() => {
      tastingSheet.color = color
    })

    test(`bgColorが${bgColor}になる`, () => {
      const { result } = renderHook(() => useTastingSheetCardColor(tastingSheet))
      expect(result.current.bgColor).toEqual(bgColor)
    })

    test(`textColorが${textColor}になる`, () => {
      const { result } = renderHook(() => useTastingSheetCardColor(tastingSheet))
      expect(result.current.textColor).toEqual(textColor)
    })
  })
})
