import { renderHook } from '@testing-library/react'

import { TastingSheetApi, WineColor } from '../../../types'
import useTastingSheetCardColor from '../useTastingSheetCardColor'

type TestCases = [WineColor, string, string][]

describe('useTastingSheetCardColor', () => {
  let tastingSheet: TastingSheetApi
  const testCases: TestCases = [
    ['red', 'bg-theme-red', 'text-theme-red'],
    ['white', 'bg-theme-green', 'text-theme-green']
  ]

  beforeEach(() => {
    tastingSheet = {} as TastingSheetApi
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
