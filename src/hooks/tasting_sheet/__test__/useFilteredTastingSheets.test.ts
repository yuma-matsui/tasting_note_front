import React from 'react'
import { renderHook } from '@testing-library/react'

import { TastingSheetApi } from '../../../types'
import useFilteredTastingSheets from '../useFilteredTastingSheets'

describe('useFilteredTastingSheets', () => {
  const tastingSheets = [
    {
      color: 'red',
      conclusion: {
        grape: 'カベルネ・ソーヴィニヨン',
        country: 'フランス'
      }
    },
    {
      color: 'white',
      conclusion: {
        grape: 'シャルドネ',
        country: 'イタリア'
      }
    }
  ] as TastingSheetApi[]

  const defaultFilter = {
    color: '指定なし',
    country: '指定なし',
    grape: '指定なし'
  }

  beforeEach(() => {
    jest.restoreAllMocks()
  })

  describe('setFilter', () => {
    test('useStateで取得した関数が返る', () => {
      const mockSetFilter = jest.fn()
      jest.spyOn(React, 'useState').mockReturnValue(['test', mockSetFilter])

      const { result } = renderHook(() => useFilteredTastingSheets(tastingSheets))

      expect(result.current.setFilter).toEqual(mockSetFilter)
    })
  })

  describe('filteredTastingSheets', () => {
    describe('useStateで取得したfilterオブジェクトのプロパティが全て"指定なし"の場合', () => {
      test('引数に与えたコレクションが返る', () => {
        jest.spyOn(React, 'useState').mockReturnValue([defaultFilter, jest.fn()])

        const { result } = renderHook(() => useFilteredTastingSheets(tastingSheets))

        expect(result.current.filteredTastingSheets).toMatchObject(tastingSheets)
      })
    })

    describe('useStateで取得したfilterオブジェクトのcolorが"指定なし"ではない場合', () => {
      test('colorの値が一致するtastingSheetのコレクションを返す', () => {
        jest.spyOn(React, 'useState').mockReturnValue([{ ...defaultFilter, color: 'red' }, jest.fn()])

        const { result } = renderHook(() => useFilteredTastingSheets(tastingSheets))

        expect(tastingSheets.length).toEqual(2)
        expect(result.current.filteredTastingSheets.length).toEqual(1)
      })
    })

    describe('useStateで取得したfilterオブジェクトのcountryが"指定なし"ではない場合', () => {
      test('countryの値が一致するtastingSheetのコレクションを返す', () => {
        jest.spyOn(React, 'useState').mockReturnValue([{ ...defaultFilter, country: 'イタリア' }, jest.fn()])

        const { result } = renderHook(() => useFilteredTastingSheets(tastingSheets))

        expect(tastingSheets.length).toEqual(2)
        expect(result.current.filteredTastingSheets.length).toEqual(1)
      })
    })

    describe('useStateで取得したfilterオブジェクトのgrapeが"指定なし"ではない場合', () => {
      test('grapeの値が一致するtastingSheetのコレクションを返す', () => {
        jest.spyOn(React, 'useState').mockReturnValue([{ ...defaultFilter, grape: 'シャルドネ' }, jest.fn()])

        const { result } = renderHook(() => useFilteredTastingSheets(tastingSheets))

        expect(tastingSheets.length).toEqual(2)
        expect(result.current.filteredTastingSheets.length).toEqual(1)
      })
    })
  })
})
