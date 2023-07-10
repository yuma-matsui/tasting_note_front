/* eslint-disable @typescript-eslint/no-unsafe-return */

import React from 'react'
import Router from 'react-router-dom'
import ErrorBoundary from 'react-error-boundary'
import { renderHook } from '@testing-library/react'
import { act } from 'react-dom/test-utils'

import mockUseCurrentUserContext from '../../context/useCurrentUserContext'
import mockUseAxios from '../../useAxios'
import useFetchATastingSheet from '../useFetchATastingSheet'
import { headersTestData, initialTastingSheet } from '../../../utils'
import { TastingSheetApi } from '../../../types'

jest.mock('react-error-boundary', () => ({
  ...jest.requireActual('react-error-boundary'),
  useErrorBoundary: jest.fn()
}))
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn()
}))

jest.mock('../../context/useCurrentUserContext')
jest.mock('../../useAxios')

const setUp = (id: number) => {
  const { result } = renderHook(() => useFetchATastingSheet(id))

  return {
    result
  }
}

describe('useFetchATastingSheet', () => {
  let currentUser: boolean
  const tastingSheetId = 999
  let resultSheet: TastingSheetApi | null

  const mockUseState = jest.spyOn(React, 'useState')
  const mockClient = {
    get: jest.fn()
  }
  const mockGetHeaders = jest.fn()
  const mockSetTastingSheet = jest.fn()
  const mockFetching = jest.fn()
  const mockSetFetching = jest.fn()
  const mockNavigate = jest.fn()

  beforeEach(() => {
    currentUser = true
    ;(mockUseCurrentUserContext as jest.Mock).mockImplementation(() => currentUser)

    resultSheet = {
      ...initialTastingSheet,
      id: tastingSheetId,
      name: 'resultSheet',
      createdAt: 'test',
      wine: null
    }

    mockClient.get.mockImplementation(() => ({
      data: resultSheet
    }))
    mockGetHeaders.mockImplementation(() => headersTestData)
    ;(mockUseAxios as jest.Mock).mockImplementation(() => ({
      client: mockClient,
      getHeaders: mockGetHeaders
    }))

    mockUseState
      .mockReturnValueOnce([
        {
          ...initialTastingSheet,
          id: 0,
          createdAt: 'test',
          wine: null
        },
        mockSetTastingSheet
      ])
      .mockReturnValueOnce([mockFetching, mockSetFetching])

    jest.spyOn(Router, 'useNavigate').mockReturnValue(mockNavigate)
    jest.spyOn(ErrorBoundary, 'useErrorBoundary').mockReturnValue({
      ...jest.requireActual('react-error-boundary'),
      showBoundary: jest.fn()
    })
  })

  describe('useFetchATastingSheet', () => {
    describe('currentUserが存在しない場合', () => {
      beforeEach(() => {
        currentUser = false
        ;(mockUseCurrentUserContext as jest.Mock).mockImplementation(() => currentUser)
      })

      test('何も実行されない', async () => {
        await act(() => setUp(tastingSheetId))
        expect(mockSetFetching).not.toHaveBeenCalled()
        expect(mockClient.get).not.toHaveBeenCalled()
        expect(mockGetHeaders).not.toHaveBeenCalled()
        expect(mockNavigate).not.toHaveBeenCalled()
        expect(mockSetTastingSheet).not.toHaveBeenCalled()
      })
    })

    describe('currentUserが存在する場合', () => {
      test('setFetchingが2回実行される', async () => {
        await act(() => setUp(tastingSheetId))
        expect(mockSetFetching).toHaveBeenCalledTimes(2)
        expect(mockSetFetching).toHaveBeenCalledWith(true)
        expect(mockSetFetching).toHaveBeenCalledWith(false)
      })

      test('client.getが実行される', async () => {
        await act(() => setUp(tastingSheetId))
        expect(mockClient.get).toHaveBeenCalledWith(`/tasting_sheets/${tastingSheetId}`, headersTestData)
      })

      test('getHeadersが実行される', async () => {
        await act(() => setUp(tastingSheetId))
        expect(mockGetHeaders).toHaveBeenCalledWith(currentUser)
      })

      describe('client.getの結果がnullの場合', () => {
        beforeEach(() => {
          resultSheet = null
          mockClient.get.mockImplementation(() => ({
            data: resultSheet
          }))
        })

        test('navigateが実行される', async () => {
          await act(() => setUp(tastingSheetId))
          expect(mockNavigate).toHaveBeenCalledWith('/')
        })
      })

      describe('client.getの結果が存在する場合', () => {
        test('setTastingSheetが実行される', async () => {
          await act(() => setUp(tastingSheetId))
          expect(mockSetTastingSheet).toHaveBeenCalledWith(resultSheet)
        })
      })
    })

    describe('tastingSheet', () => {
      beforeEach(() => {
        mockUseState.mockRestore()
      })

      describe('client.getに成功した場合', () => {
        test('APIで取得したtastingSheetを返す', async () => {
          const { result } = await act(() => setUp(tastingSheetId))
          expect(result.current.tastingSheet).toEqual(resultSheet)
        })
      })

      describe('client.getに失敗した場合', () => {
        beforeEach(() => {
          mockClient.get.mockImplementation(() => ({ data: null }))
        })

        test('初期値が返る', async () => {
          const { result } = await act(() => setUp(tastingSheetId))
          expect(result.current.tastingSheet).toEqual({
            ...initialTastingSheet,
            id: 0,
            createdAt: '',
            wine: null
          })
        })
      })
    })
  })
})
