/* eslint-disable @typescript-eslint/no-unsafe-return */

import Router from 'react-router-dom'
import ErrorBoundary from 'react-error-boundary'
import { renderHook } from '@testing-library/react'
import { act } from 'react-dom/test-utils'

import mockUseAuthContext from '../../context/useAuthContext'
import mockUseAxios from '../../useAxios'
import useUpdateTastingSheetName from '../useUpdateTastingSheetName'
import { headersTestData, initialTastingSheet } from '../../../utils'

jest.mock('react-error-boundary', () => ({
  ...jest.requireActual('react-error-boundary'),
  useErrorBoundary: jest.fn()
}))
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: jest.fn()
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
  const { result } = renderHook(() => useUpdateTastingSheetName())

  return {
    result
  }
}

describe('useUpdateTastingSheetName', () => {
  let tastingSheetId: string | undefined
  let currentUser: boolean
  const tastingSheet = { ...initialTastingSheet }

  const mockClient = {
    put: jest.fn()
  }
  const mockGetHeaders = jest.fn()

  beforeEach(() => {
    tastingSheetId = '1'
    currentUser = true
    ;(mockUseAuthContext as jest.Mock).mockImplementation(() => ({
      currentUser
    }))

    mockGetHeaders.mockImplementation(() => headersTestData)
    ;(mockUseAxios as jest.Mock).mockImplementation(() => ({
      client: mockClient,
      getHeaders: mockGetHeaders
    }))

    jest.spyOn(Router, 'useParams').mockReturnValue({
      tastingSheetId
    })
    jest.spyOn(ErrorBoundary, 'useErrorBoundary').mockReturnValue({
      ...jest.requireActual('react-error-boundary'),
      showBoundary: jest.fn()
    })
  })

  describe('updateSheetName', () => {
    describe('currentUserが存在しない場合', () => {
      beforeEach(() => {
        currentUser = false
        ;(mockUseAuthContext as jest.Mock).mockImplementation(() => ({
          currentUser
        }))
      })

      test('早期リターンされて何も実行されない', async () => {
        const { result } = setUp()
        await act(() => result.current.updateSheetName(tastingSheet))
        expect(mockSetRequesting).not.toHaveBeenCalled()
        expect(mockClient.put).not.toHaveBeenCalled()
        expect(mockGetHeaders).not.toHaveBeenCalled()
        expect(mockShowToast).not.toHaveBeenCalled()
      })
    })

    describe('useParamsで取得したtastingSheetIdが数字以外の文字列の場合', () => {
      beforeEach(() => {
        tastingSheetId = 'test'
        jest.spyOn(Router, 'useParams').mockReturnValue({
          tastingSheetId
        })
      })

      test('早期リターンされて何も実行されない', async () => {
        const { result } = setUp()
        await act(() => result.current.updateSheetName(tastingSheet))
        expect(mockSetRequesting).not.toHaveBeenCalled()
        expect(mockClient.put).not.toHaveBeenCalled()
        expect(mockGetHeaders).not.toHaveBeenCalled()
        expect(mockShowToast).not.toHaveBeenCalled()
      })
    })

    describe('currentUserが存在して、tastingSheetIdの値が数値の場合', () => {
      test('setRequestingが2回呼ばれる', async () => {
        const { result } = setUp()
        await act(() => result.current.updateSheetName(tastingSheet))
        expect(mockSetRequesting).toHaveBeenCalledTimes(2)
        expect(mockSetRequesting).toHaveBeenCalledWith(true)
        expect(mockSetRequesting).toHaveBeenCalledWith(false)
      })

      test('client.putが呼ばれる', async () => {
        const { result } = setUp()
        await act(() => result.current.updateSheetName(tastingSheet))
        expect(mockClient.put).toHaveBeenCalledWith(
          `/tasting_sheets/${Number(tastingSheetId)}`,
          tastingSheet,
          headersTestData
        )
      })

      test('getHeadersが呼ばれる', async () => {
        const { result } = setUp()
        await act(() => result.current.updateSheetName(tastingSheet))
        expect(mockGetHeaders).toHaveBeenCalledWith(currentUser)
      })

      test('showToastが呼ばれる', async () => {
        const { result } = setUp()
        await act(() => result.current.updateSheetName(tastingSheet))
        expect(mockShowToast).toHaveBeenCalledWith({
          text: 'シート名を変更しました',
          type: 'success'
        })
      })
    })
  })
})
