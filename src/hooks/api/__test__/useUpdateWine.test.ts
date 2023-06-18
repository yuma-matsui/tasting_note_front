/* eslint-disable @typescript-eslint/no-unsafe-return */

import Router from 'react-router-dom'
import ErrorBoundary from 'react-error-boundary'
import { renderHook } from '@testing-library/react'
import { act } from 'react-dom/test-utils'

import mockUseAuthContext from '../../context/useAuthContext'
import mockUseAxios from '../../useAxios'
import { headersTestData, wineTestData } from '../../../utils'
import useUpdateWine from '../useUpdateWine'
import { Wine } from '../../../types'

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

const mockShowToast = jest.fn()
jest.mock('../../context/useToastContext', () => () => ({
  showToast: mockShowToast
}))
const mockSetRequesting = jest.fn()
jest.mock('../../context/useRequestingContext', () => () => ({
  setRequesting: mockSetRequesting
}))

const setUp = () => {
  const { result } = renderHook(() => useUpdateWine())

  return {
    result
  }
}

describe('usePostTastingSheet', () => {
  let currentUser: boolean
  const wineId = 999
  let puttingWine: Wine
  let resultWine: Wine

  const mockNavigate = jest.fn()
  const mockClient = {
    put: jest.fn()
  }
  const mockGetHeaders = jest.fn()

  beforeEach(() => {
    puttingWine = { ...wineTestData, name: 'puttingWine' }
    resultWine = { ...wineTestData, name: 'resultWine' }

    currentUser = true
    ;(mockUseAuthContext as jest.Mock).mockImplementation(() => ({
      currentUser
    }))

    mockClient.put.mockImplementation(() => ({ data: resultWine }))
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

  describe('postWine', () => {
    describe('currentUserが存在しない場合', () => {
      beforeEach(() => {
        currentUser = false
        ;(mockUseAuthContext as jest.Mock).mockImplementation(() => ({
          currentUser
        }))
      })

      test('早期リターンされて何も実行されない', async () => {
        const { result } = setUp()
        await act(() => result.current.updateWine(puttingWine, wineId))
        expect(mockSetRequesting).not.toHaveBeenCalled()
        expect(mockClient.put).not.toHaveBeenCalled()
        expect(mockGetHeaders).not.toHaveBeenCalled()
        expect(mockShowToast).not.toHaveBeenCalled()
      })
    })

    describe('currentUserが存在する場合', () => {
      test('setRequestingが2回実行される', async () => {
        const { result } = setUp()
        await act(() => result.current.updateWine(puttingWine, wineId))
        expect(mockSetRequesting).toHaveBeenCalledTimes(2)
        expect(mockSetRequesting).toHaveBeenCalledWith(true)
        expect(mockSetRequesting).toHaveBeenCalledWith(false)
      })

      test('client.putが実行される', async () => {
        const { result } = setUp()
        await act(() => result.current.updateWine(puttingWine, wineId))
        expect(mockClient.put).toHaveBeenCalledWith(`/wines/${wineId}`, puttingWine, headersTestData)
      })

      test('getHeadersが実行される', async () => {
        const { result } = setUp()
        await act(() => result.current.updateWine(puttingWine, wineId))
        expect(mockGetHeaders).toHaveBeenCalled()
      })

      test('navigateが実行される', async () => {
        const { result } = setUp()
        await act(() => result.current.updateWine(puttingWine, wineId))
        expect(mockNavigate).toHaveBeenCalledWith(`/tasting_sheets/${resultWine.tastingSheetId}`)
      })

      test('showToastが実行される', async () => {
        const { result } = setUp()
        await act(() => result.current.updateWine(puttingWine, wineId))
        expect(mockShowToast).toHaveBeenCalledWith({
          text: 'ワインを更新しました',
          type: 'success'
        })
      })
    })
  })
})
