/* eslint-disable @typescript-eslint/no-unsafe-return */

import React from 'react'
import Router from 'react-router-dom'
import ErrorBoundary from 'react-error-boundary'
import { renderHook } from '@testing-library/react'
import { act } from 'react-dom/test-utils'

import mockUseAuthContext from '../../context/useAuthContext'
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
jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: jest.fn()
}))

jest.mock('../../context/useAuthContext')
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
    ;(mockUseAuthContext as jest.Mock).mockImplementation(() => ({
      currentUser
    }))

    resultSheet = {
      ...initialTastingSheet,
      name: 'resultSheet',
      id: tastingSheetId,
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

    jest
      .spyOn(React, 'useState')
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
    describe('fetching', () => {
      test('useStateで取得したfetchingが返る', () => {
        const { result } = setUp(tastingSheetId)
        expect(result.current.fetching).toEqual(mockFetching)
      })
    })

    describe('tastingSheet', () => {
      describe('currentUserが存在しない場合', () => {
        beforeEach(() => {
          currentUser = true
          ;(mockUseAuthContext as jest.Mock).mockImplementation(() => ({
            currentUser
          }))
        })

        test('initialTastingSheetが返る', () => {
          const { result } = setUp(tastingSheetId)
          expect(result.current.tastingSheet).toEqual({
            ...initialTastingSheet,
            id: 0,
            createdAt: 'test',
            wine: null
          })
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
    })
  })
})
