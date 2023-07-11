/* eslint-disable @typescript-eslint/no-unsafe-return */

import { renderHook } from '@testing-library/react'
import React from 'react'
import { act } from 'react-dom/test-utils'

import { TastingSheet, TastingSheetAllName, TastingSheetFormType } from '../../../types'
import {
  formResultFormat as mockFormResultFormat,
  initialTastingSheet,
  isAppearanceName as mockIsAppearanceName,
  isConclusionName as mockIsConclusionName,
  isFlavorName as mockIsFlavorName,
  isTasteName as mockIsTasteName
} from '../../../utils'
import useDetailsTabItems from '../useDetailsTabItems'

jest.mock('../../../utils/formResultFormat')
jest.mock('../../../utils/isAppearanceName')
jest.mock('../../../utils/isFlavorName')
jest.mock('../../../utils/isTasteName')
jest.mock('../../../utils/isConclusionName')

type IsShowTestCases = [TastingSheetFormType, boolean][]

describe('useDetailsTabItems', () => {
  let tastingSheet: TastingSheet

  beforeEach(() => {
    tastingSheet = { ...initialTastingSheet }
    jest.restoreAllMocks()
  })

  describe('isShow', () => {
    describe('selectedTabがappearanceの時', () => {
      const testCases: IsShowTestCases = [
        ['appearance', true],
        ['flavor', false],
        ['taste', false],
        ['conclusion', false],
        ['setting', false],
        ['confirmation', false]
      ]
      test.each(testCases)('引数が%sの場合、%pを返す', (type, isShowResult) => {
        const { result } = renderHook(() => useDetailsTabItems(tastingSheet))

        expect(result.current.isShow(type)).toEqual(isShowResult)
      })
    })

    describe('selectedTabがflavorの時', () => {
      const testCases: IsShowTestCases = [
        ['appearance', false],
        ['flavor', true],
        ['taste', false],
        ['conclusion', false],
        ['setting', false],
        ['confirmation', false]
      ]
      test.each(testCases)('引数が%sの場合、%pを返す', async (type, isShowResult) => {
        const { result } = renderHook(() => useDetailsTabItems(tastingSheet))

        await act(() => result.current.onClickTabChange('flavor'))
        expect(result.current.isShow(type)).toEqual(isShowResult)
      })
    })

    describe('selectedTabがtasteの時', () => {
      const testCases: IsShowTestCases = [
        ['appearance', false],
        ['flavor', false],
        ['taste', true],
        ['conclusion', false],
        ['setting', false],
        ['confirmation', false]
      ]
      test.each(testCases)('引数が%sの場合、%pを返す', async (type, isShowResult) => {
        const { result } = renderHook(() => useDetailsTabItems(tastingSheet))

        await act(() => result.current.onClickTabChange('taste'))
        expect(result.current.isShow(type)).toEqual(isShowResult)
      })
    })

    describe('selectedTabがconclusionの時', () => {
      const testCases: IsShowTestCases = [
        ['appearance', false],
        ['flavor', false],
        ['taste', false],
        ['conclusion', true],
        ['setting', false],
        ['confirmation', false]
      ]
      test.each(testCases)('引数が%sの場合、%pを返す', async (type, isShowResult) => {
        const { result } = renderHook(() => useDetailsTabItems(tastingSheet))

        await act(() => result.current.onClickTabChange('conclusion'))
        expect(result.current.isShow(type)).toEqual(isShowResult)
      })
    })
  })

  describe('onClickTabChange', () => {
    test('実行時にsetSelectedTabが実行される', async () => {
      const mockSetSelectedTab = jest.fn()
      jest.spyOn(React, 'useState').mockReturnValue(['appearance', mockSetSelectedTab])

      const { result } = renderHook(() => useDetailsTabItems(tastingSheet))
      await act(() => result.current.onClickTabChange('appearance'))
      expect(mockSetSelectedTab).toHaveBeenCalled()
    })
  })

  describe('getFormResult', () => {
    const name: TastingSheetAllName = 'acidity'

    test.each([[mockIsAppearanceName], [mockIsFlavorName], [mockIsTasteName], [mockIsConclusionName]])(
      'nameを判定する関数が実行される',
      async (mockFunction) => {
        const { result } = renderHook(() => useDetailsTabItems(tastingSheet))
        await act(() => result.current.getFormResult(name))
        expect(mockFunction).toBeCalledWith(name)
      }
    )

    test('formResultFormatが実行される', async () => {
      const { result } = renderHook(() => useDetailsTabItems(tastingSheet))
      await act(() => result.current.getFormResult(name))
      expect(mockFormResultFormat).toHaveBeenCalled()
    })
  })
})
