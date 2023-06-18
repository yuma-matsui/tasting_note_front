/* eslint-disable @typescript-eslint/no-unsafe-return */

import React from 'react'
import ErrorBoundary from 'react-error-boundary'
import { renderHook } from '@testing-library/react'
import { act } from 'react-dom/test-utils'

import mockUseAuthContext from '../../context/useAuthContext'
import mockUseAxios from '../../useAxios'
import { headersTestData, initialTastingSheet } from '../../../utils'
import { TastingSheetApi } from '../../../types'
import useFetchTastingSheets from '../useFetchTastingSheets'

jest.mock('react-error-boundary', () => ({
  ...jest.requireActual('react-error-boundary'),
  useErrorBoundary: jest.fn()
}))

jest.mock('../../context/useAuthContext')
jest.mock('../../useAxios')

const setUp = () => {
  const { result } = renderHook(() => useFetchTastingSheets())

  return {
    result
  }
}

describe('useFetchATastingSheet', () => {
  let currentUser: boolean
  const initialSheets: TastingSheetApi[] = []
  let resultSheets: TastingSheetApi[] = []

  const useStateMock = jest.spyOn(React, 'useState')
  const mockClient = {
    get: jest.fn()
  }
  const mockGetHeaders = jest.fn()
  const mockSetTastingSheets = jest.fn()
  const mockFetching = jest.fn()
  const mockSetFetching = jest.fn()

  beforeEach(() => {
    resultSheets = []
    currentUser = true
    ;(mockUseAuthContext as jest.Mock).mockImplementation(() => ({
      currentUser
    }))

    mockClient.get.mockImplementation(() => ({
      data: resultSheets
    }))
    mockGetHeaders.mockImplementation(() => headersTestData)
    ;(mockUseAxios as jest.Mock).mockImplementation(() => ({
      client: mockClient,
      getHeaders: mockGetHeaders
    }))

    useStateMock
      .mockReturnValueOnce([initialSheets, mockSetTastingSheets])
      .mockReturnValueOnce([mockFetching, mockSetFetching])

    jest.spyOn(ErrorBoundary, 'useErrorBoundary').mockReturnValue({
      ...jest.requireActual('react-error-boundary'),
      showBoundary: jest.fn()
    })
  })

  describe('useFetchTastingSheets', () => {
    describe('currentUserが存在しない場合', () => {
      beforeEach(() => {
        currentUser = false
        ;(mockUseAuthContext as jest.Mock).mockImplementation(() => ({
          currentUser
        }))
      })

      test('何も実行されない', async () => {
        await act(() => setUp())
        expect(mockSetFetching).not.toHaveBeenCalled()
        expect(mockClient.get).not.toHaveBeenCalled()
        expect(mockGetHeaders).not.toHaveBeenCalled()
        expect(mockSetTastingSheets).not.toHaveBeenCalled()
      })
    })

    describe('currentUserが存在する場合', () => {
      test('setFetchingが2回呼ばれる', async () => {
        await act(() => setUp())
        expect(mockSetFetching).toHaveBeenCalledTimes(2)
        expect(mockSetFetching).toHaveBeenCalledWith(true)
        expect(mockSetFetching).toHaveBeenCalledWith(false)
      })

      test('client.getが呼ばれる', async () => {
        await act(() => setUp())
        expect(mockClient.get).toHaveBeenCalledWith('/tasting_sheets', headersTestData)
      })

      test('getHeadersが呼ばれる', async () => {
        await act(() => setUp())
        expect(mockGetHeaders).toHaveBeenCalledWith(currentUser)
      })

      test('setTastingSheetsが呼ばれる', async () => {
        await act(() => setUp())
        expect(mockSetTastingSheets).toHaveBeenCalledWith(resultSheets)
      })
    })

    describe('tastingSheets', () => {
      beforeEach(() => {
        useStateMock.mockRestore()
      })

      test('初期値は空の配列', async () => {
        const { result } = await act(() => setUp())
        expect(result.current.tastingSheets).toEqual([])
      })

      describe('client.getが成功した場合', () => {
        beforeEach(() => {
          resultSheets = [
            {
              ...initialTastingSheet,
              id: 1,
              createdAt: 'test',
              wine: null
            },
            {
              ...initialTastingSheet,
              id: 2,
              createdAt: 'test',
              wine: null
            }
          ]

          mockClient.get.mockImplementation(() => ({ data: resultSheets }))
        })

        test('', async () => {
          const { result } = await act(() => setUp())
          expect(result.current.tastingSheets).toEqual(resultSheets)
        })
      })
    })

    describe('hasTastingSheets', () => {
      beforeEach(() => {
        useStateMock.mockRestore()
      })

      test('初期値はfalse', async () => {
        const { result } = await act(() => setUp())
        expect(result.current.hasTastingSheets).toBeFalsy()
      })

      describe('client.getに成功した場合', () => {
        beforeEach(() => {
          resultSheets = [
            {
              ...initialTastingSheet,
              id: 1,
              createdAt: 'test',
              wine: null
            }
          ]
        })

        test('trueを返す', async () => {
          const { result } = await act(() => setUp())
          expect(result.current.hasTastingSheets).toBeTruthy()
        })
      })
    })
  })
})
