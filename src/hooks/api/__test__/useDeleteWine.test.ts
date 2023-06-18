/* eslint-disable @typescript-eslint/no-unsafe-return */

import ErrorBoundary from 'react-error-boundary'
import Router from 'react-router-dom'
import { renderHook } from '@testing-library/react'
import { act } from 'react-dom/test-utils'

import mockUseAuthContext from '../../context/useAuthContext'
import mockUseAxios from '../../useAxios'
import useDeleteWine from '../useDeleteWine'
import { headersTestData, wineTestData } from '../../../utils'
import { WineApi } from '../../../types'

jest.mock('react-error-boundary', () => ({
  ...jest.requireActual('react-error-boundary'),
  useErrorBoundary: jest.fn()
}))
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn()
}))

jest.mock('../../context/useAuthContext')
jest.mock('../../useAxios')

const mockSetRequesting = jest.fn()
jest.mock('../../context/useRequestingContext', () => () => ({
  setRequesting: mockSetRequesting
}))

const mockShowToast = jest.fn()
jest.mock('../../context/useToastContext', () => () => ({
  showToast: mockShowToast
}))

const setUp = (wine: WineApi) => {
  const { result } = renderHook(() => useDeleteWine(wine))

  return {
    result
  }
}

describe('useDeleteWine', () => {
  const wineId = 999
  const tastingSheetId = 1000
  let wine: WineApi
  let currentUser: boolean
  const mockClient = {
    delete: jest.fn()
  }
  const mockGetHeaders = jest.fn()
  const mockNavigate = jest.fn()

  beforeEach(() => {
    wine = { ...wineTestData, id: wineId, tastingSheetId }
    currentUser = true
    ;(mockUseAuthContext as jest.Mock).mockImplementation(() => ({
      currentUser
    }))

    mockGetHeaders.mockImplementation(() => headersTestData)
    ;(mockUseAxios as jest.Mock).mockImplementation(() => ({
      client: mockClient,
      getHeaders: mockGetHeaders
    }))

    jest.spyOn(Router, 'useNavigate').mockReturnValue(mockNavigate)
    jest.spyOn(ErrorBoundary, 'useErrorBoundary').mockReturnValue({
      ...jest.requireActual('react-error-boundary'),
      showBoundary: jest.fn()
    })
  })

  describe('onClickDeleteWine', () => {
    describe('currentUserが存在しない場合', () => {
      beforeEach(() => {
        currentUser = false
        ;(mockUseAuthContext as jest.Mock).mockImplementation(() => ({
          currentUser
        }))
      })

      test('早期リターンされて何も実行されない', async () => {
        const { result } = setUp(wine)
        await act(() => result.current.onClickDeleteWine())
        expect(mockSetRequesting).not.toHaveBeenCalled()
        expect(mockClient.delete).not.toHaveBeenCalled()
        expect(mockGetHeaders).not.toHaveBeenCalled()
        expect(mockNavigate).not.toHaveBeenCalled()
        expect(mockShowToast).not.toHaveBeenCalled()
      })
    })

    describe('currentUserが存在する場合', () => {
      test('setRequestingが2回呼ばれる', async () => {
        const { result } = setUp(wine)
        await act(() => result.current.onClickDeleteWine())
        expect(mockSetRequesting).toHaveBeenCalledTimes(2)
        expect(mockSetRequesting).toHaveBeenCalledWith(true)
        expect(mockSetRequesting).toHaveBeenCalledWith(false)
      })

      test('client.deleteが呼ばれる', async () => {
        const { result } = setUp(wine)
        await act(() => result.current.onClickDeleteWine())
        expect(mockClient.delete).toHaveBeenCalledWith(`/wines/${wineId}`, headersTestData)
      })

      test('navigateが呼ばれる', async () => {
        const { result } = setUp(wine)
        await act(() => result.current.onClickDeleteWine())
        expect(mockNavigate).toHaveBeenCalledWith(`/tasting_sheets/${tastingSheetId}`)
      })

      test('getHeadersが呼ばれる', async () => {
        const { result } = setUp(wine)
        await act(() => result.current.onClickDeleteWine())
        expect(mockGetHeaders).toHaveBeenCalledWith(currentUser)
      })

      test('showToastが呼ばれる', async () => {
        const { result } = setUp(wine)
        await act(() => result.current.onClickDeleteWine())
        expect(mockShowToast).toHaveBeenCalledWith({
          text: 'ワインを削除しました',
          type: 'success'
        })
      })
    })
  })
})
