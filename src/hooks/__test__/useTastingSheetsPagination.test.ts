/* eslint-disable @typescript-eslint/no-unsafe-return */

import React from 'react'
import { renderHook } from '@testing-library/react'

import { TastingSheetApi } from '../../types'
import useTastingSheetsPagination from '../useTastingSheetsPagination'

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: jest.fn()
}))

const setUp = (tastingSheets: TastingSheetApi[]) => {
  const { result } = renderHook(() => useTastingSheetsPagination(tastingSheets))

  return {
    ...result.current
  }
}

describe('useTastingSheetsPagination', () => {
  let tastingSheets: TastingSheetApi[]
  let currentPageIndex: number
  const mockSetCurrentPageIndex = jest.fn()

  beforeEach(() => {
    currentPageIndex = 1
    tastingSheets = []

    jest.spyOn(React, 'useState').mockReturnValue([currentPageIndex, mockSetCurrentPageIndex])
  })

  describe('pageNumber', () => {
    test.each([[0], [1], [2]])('useStateで取得したcurrentPageIndex + 1の値が返る', (index) => {
      jest.spyOn(React, 'useState').mockReturnValue([index, mockSetCurrentPageIndex])

      const { pageNumber } = setUp(tastingSheets)
      expect(pageNumber).toEqual(index + 1)
    })
  })

  describe('isFirstPage', () => {
    test.each([
      [0, true],
      [1, false],
      [2, false]
    ])('currentPageIndexが%dの場合、%pを返す', (index, result) => {
      jest.spyOn(React, 'useState').mockReturnValue([index, mockSetCurrentPageIndex])

      const { isFirstPage } = setUp(tastingSheets)
      expect(isFirstPage).toEqual(result)
    })
  })

  describe('isLastPage', () => {
    test.each([
      [0, 3, true],
      [0, 5, true],
      [0, 6, false],
      [1, 6, true],
      [1, 10, true],
      [1, 11, false]
    ])('currentPageIndexが%d、tastingSheetsの要素数が%dの場合、%pを返す', (index, sheetsLength, result) => {
      jest.spyOn(React, 'useState').mockReturnValue([index, mockSetCurrentPageIndex])

      for (let i = 0; i < sheetsLength; i += 1) {
        tastingSheets.push({} as TastingSheetApi)
      }

      const { isLastPage } = setUp(tastingSheets)
      expect(isLastPage).toEqual(result)
    })
  })

  describe('next', () => {
    test('実行時にsetCurrentPageIndexが呼ばれる', () => {
      const { next } = setUp(tastingSheets)

      next()
      expect(mockSetCurrentPageIndex).toHaveBeenCalledWith(expect.any(Function))
    })
  })

  describe('back', () => {
    test('実行時にsetCurrentPageIndexが呼ばれる', () => {
      const { back } = setUp(tastingSheets)

      back()
      expect(mockSetCurrentPageIndex).toHaveBeenCalledWith(expect.any(Function))
    })
  })

  describe('displayingTastingSheets', () => {
    test.each([
      [0, 1, 1],
      [0, 5, 5],
      [0, 6, 5],
      [1, 6, 1],
      [1, 9, 4],
      [1, 10, 5]
    ])(
      'currentPageIndexが%d、tastingSheetsの要素数が%dの場合、要素数が%dの配列が返る',
      (index, sheetsLength, result) => {
        jest.spyOn(React, 'useState').mockReturnValue([index, mockSetCurrentPageIndex])

        for (let i = 0; i < sheetsLength; i += 1) {
          tastingSheets.push({} as TastingSheetApi)
        }

        const { displayingTastingSheets } = setUp(tastingSheets)
        expect(displayingTastingSheets.length).toEqual(result)
      }
    )
  })

  describe('isMoreThanFiveSheets', () => {
    test.each([
      [1, false],
      [5, false],
      [6, true]
    ])('tastingSheetsの要素数が%dの場合、%pを返す', (sheetsLength, result) => {
      for (let i = 0; i < sheetsLength; i += 1) {
        tastingSheets.push({} as TastingSheetApi)
      }

      const { isMoreThanFiveSheets } = setUp(tastingSheets)
      expect(isMoreThanFiveSheets).toEqual(result)
    })
  })
})
