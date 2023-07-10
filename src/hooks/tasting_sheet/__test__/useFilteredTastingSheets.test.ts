import React from 'react'
import { renderHook } from '@testing-library/react'

import useFilteredTastingSheets from '../useFilteredTastingSheets'
import { TastingSheetApi } from '../../../types'
import { initialTastingSheet } from '../../../utils'

describe('useFilteredTastingSheets', () => {
  const tastingSheets: TastingSheetApi[] = [
    {
      ...initialTastingSheet,
      id: 1,
      color: 'red',
      conclusion: {
        ...initialTastingSheet.conclusion,
        country: 'フランス',
        grape: 'カベルネ・ソーヴィニヨン'
      },
      createdAt: 'test',
      wine: null
    },
    {
      ...initialTastingSheet,
      id: 2,
      color: 'white',
      conclusion: {
        ...initialTastingSheet.conclusion,
        country: 'イタリア',
        grape: 'シャルドネ'
      },
      createdAt: 'test',
      wine: null
    }
  ]

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
        expect(result.current.filteredTastingSheets.length).toEqual(1)
      })
    })

    describe('useStateで取得したfilterオブジェクトのcountryが"指定なし"ではない場合', () => {
      test('countryの値が一致するtastingSheetのコレクションを返す', () => {
        jest.spyOn(React, 'useState').mockReturnValue([{ ...defaultFilter, country: 'イタリア' }, jest.fn()])

        const { result } = renderHook(() => useFilteredTastingSheets(tastingSheets))
        expect(result.current.filteredTastingSheets.length).toEqual(1)
      })
    })

    describe('useStateで取得したfilterオブジェクトのgrapeが"指定なし"ではない場合', () => {
      test('grapeの値が一致するtastingSheetのコレクションを返す', () => {
        jest.spyOn(React, 'useState').mockReturnValue([{ ...defaultFilter, grape: 'シャルドネ' }, jest.fn()])

        const { result } = renderHook(() => useFilteredTastingSheets(tastingSheets))
        expect(result.current.filteredTastingSheets.length).toEqual(1)
      })
    })
  })
})
