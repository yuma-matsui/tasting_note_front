import { renderHook } from '@testing-library/react'
import { act } from 'react-dom/test-utils'

import { TastingSheetApi } from '../../types'
import { initialTastingSheet } from '../../utils'
import useTastingSheetsPagination from '../useTastingSheetsPagination'

const setUpTastingSheets = (sheetsCount: number) => {
  const tastingSheets: TastingSheetApi[] = []
  for (let index = 0; index < sheetsCount; index += 1) {
    tastingSheets.push({
      ...initialTastingSheet,
      id: index,
      createdAt: 'test',
      wine: null
    })
  }

  return tastingSheets
}

describe('useTastingSheetsPagination', () => {
  let tastingSheets: TastingSheetApi[]

  beforeEach(() => {
    tastingSheets = []
  })

  describe('pageNumber', () => {
    test('初期値は1になる', () => {
      const { result } = renderHook(() => useTastingSheetsPagination(tastingSheets))

      expect(result.current.pageNumber).toBe(1)
    })

    describe('nextを実行した場合', () => {
      test.each([[0], [1]])('tastingSheetsの要素数が1以下の場合は1が返る', async (sheetsCount) => {
        tastingSheets = setUpTastingSheets(sheetsCount)

        const { result } = renderHook(() => useTastingSheetsPagination(tastingSheets))

        expect(result.current.pageNumber).toEqual(1)

        await act(() => result.current.next())
        expect(result.current.pageNumber).toEqual(1)
      })

      test.each([[2], [5]])('tastingSheetsの要素数が2以上の場合はpageNumberが+1される', async (sheetsCount) => {
        tastingSheets = setUpTastingSheets(sheetsCount)

        const { result } = renderHook(() => useTastingSheetsPagination(tastingSheets))

        const { pageNumber } = result.current
        expect(pageNumber).toEqual(1)

        await act(() => result.current.next())
        expect(result.current.pageNumber).toEqual(pageNumber + 1)
      })

      test.each([[2], [5], [8]])('何度実行してもtastingSheetsの要素数より大きくならない', async (sheetsCount) => {
        tastingSheets = setUpTastingSheets(sheetsCount)

        const { result } = renderHook(() => useTastingSheetsPagination(tastingSheets))

        const { pageNumber } = result.current
        expect(pageNumber).toEqual(1)

        await act(() => {
          const { next } = result.current
          for (let index = 0; index < sheetsCount + 1; index += 1) {
            next()
          }
        })

        expect(result.current.pageNumber).toEqual(sheetsCount)
      })
    })

    describe('backを実行した場合', () => {
      test('pageNumberが1以下の場合は1が返る', async () => {
        const { result } = renderHook(() => useTastingSheetsPagination(tastingSheets))

        expect(result.current.pageNumber).toEqual(1)

        await act(() => result.current.back())
        expect(result.current.pageNumber).toEqual(1)
      })

      test.each([[2], [5]])('pageNumberが2以上の場合、pageNumberが-1される', async (nextCount) => {
        tastingSheets = setUpTastingSheets(nextCount)
        const { result } = renderHook(() => useTastingSheetsPagination(tastingSheets))

        expect(result.current.pageNumber).toEqual(1)

        await act(() => {
          const { next } = result.current
          for (let index = 0; index < nextCount; index += 1) {
            next()
          }
        })

        const { pageNumber } = result.current
        expect(pageNumber).toEqual(nextCount)

        await act(() => result.current.back())
        expect(result.current.pageNumber).toEqual(pageNumber - 1)
      })
    })
  })

  describe('isFirstPage', () => {
    test('初期値はtrue', () => {
      const { result } = renderHook(() => useTastingSheetsPagination(tastingSheets))

      expect(result.current.isFirstPage).toEqual(true)
    })

    test('next実行後はfalseになる', async () => {
      tastingSheets = setUpTastingSheets(2)
      const { result } = renderHook(() => useTastingSheetsPagination(tastingSheets))

      expect(result.current.isFirstPage).toEqual(true)

      await act(() => result.current.next())
      expect(result.current.isFirstPage).toEqual(false)
    })
  })

  describe('isLastPage', () => {
    test('tastingSheetsの要素数が0の場合は初期値がfalse', () => {
      const { result } = renderHook(() => useTastingSheetsPagination(tastingSheets))

      expect(result.current.isLastPage).toEqual(false)
    })

    test.each([[1], [3], [5]])('tastingSheetsの要素数が5以下の場合は初期値がtrue', (sheetsCount) => {
      tastingSheets = setUpTastingSheets(sheetsCount)
      const { result } = renderHook(() => useTastingSheetsPagination(tastingSheets))

      expect(result.current.isLastPage).toEqual(true)
    })

    test.each([[6], [10]])('tastingSheetsの要素数が6以上の場合は初期値がfalse', (sheetsCount) => {
      tastingSheets = setUpTastingSheets(sheetsCount)
      const { result } = renderHook(() => useTastingSheetsPagination(tastingSheets))

      expect(result.current.isLastPage).toEqual(false)
    })

    test.each([[6], [8], [10]])(
      'tastingSheetsの要素数が6以上、10以下の場合、1度nextを実行するとtrueになる',
      async (sheetsCount) => {
        tastingSheets = setUpTastingSheets(sheetsCount)
        const { result } = renderHook(() => useTastingSheetsPagination(tastingSheets))

        expect(result.current.isLastPage).toEqual(false)

        await act(() => result.current.next())
        expect(result.current.isLastPage).toEqual(true)
      }
    )
  })

  describe('isMoreThanFiveSheets', () => {
    test.each([[1], [3], [5]])('tastingSheetsの要素数が5以下の場合、falseを返す', (sheetsCount) => {
      tastingSheets = setUpTastingSheets(sheetsCount)
      const { result } = renderHook(() => useTastingSheetsPagination(tastingSheets))

      expect(result.current.isMoreThanFiveSheets).toEqual(false)
    })

    test.each([[6], [10]])('tastingSheetsの要素数が6以上の場合、trueを返す', (sheetsCount) => {
      tastingSheets = setUpTastingSheets(sheetsCount)
      const { result } = renderHook(() => useTastingSheetsPagination(tastingSheets))

      expect(result.current.isMoreThanFiveSheets).toEqual(true)
    })
  })

  describe('displayingTastingSheets', () => {
    test.each([[1], [3], [5]])('tastingSheetsの要素数が5以下の場合は同じ配列を返す', (sheetsCount) => {
      tastingSheets = setUpTastingSheets(sheetsCount)
      const { result } = renderHook(() => useTastingSheetsPagination(tastingSheets))

      expect(result.current.displayingTastingSheets).toMatchObject(tastingSheets)
    })

    test.each([[6], [10]])('tastingSheetsの要素数が6以上の場合、初期値の要素数は5', (sheetsCount) => {
      tastingSheets = setUpTastingSheets(sheetsCount)
      const { result } = renderHook(() => useTastingSheetsPagination(tastingSheets))

      expect(result.current.displayingTastingSheets.length).toEqual(5)
    })

    test.each([[6], [10]])(
      'tastingSheetsの要素数が6以上の場合、nextを実行すると要素数がtastingSheetsの要素数-5になる',
      async (sheetsCount) => {
        tastingSheets = setUpTastingSheets(sheetsCount)
        const { result } = renderHook(() => useTastingSheetsPagination(tastingSheets))

        expect(result.current.displayingTastingSheets.length).toEqual(5)

        await act(() => result.current.next())
        expect(result.current.displayingTastingSheets.length).toEqual(tastingSheets.length - 5)
      }
    )
  })
})
