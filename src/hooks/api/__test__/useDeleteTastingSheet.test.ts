/* eslint-disable @typescript-eslint/no-unsafe-return */

import ErrorBoundary from 'react-error-boundary'
import { renderHook } from '@testing-library/react'
import { act } from 'react-dom/test-utils'

import mockUseAxios from '../../useAxios'
import mockUseAuthContext from '../../context/useAuthContext'
import { headersTestData } from '../../../utils'
import useDeleteTastingSheet from '../useDeleteTastingSheet'

jest.mock('react-error-boundary', () => ({
  ...jest.requireActual('react-error-boundary'),
  useErrorBoundary: jest.fn()
}))
jest.mock('../../useAxios')
jest.mock('../../context/useAuthContext')

const mockSetRequesting = jest.fn()
jest.mock('../../context/useRequestingDispatchContext', () => () => mockSetRequesting)

const mockShowToast = jest.fn()
jest.mock('../../context/useToastContext', () => () => ({
  showToast: mockShowToast
}))

const setUp = (id: number) => {
  const { result } = renderHook(() => useDeleteTastingSheet(id))

  return {
    result
  }
}

describe('useDeleteTastingSheet', () => {
  const id = 999
  let currentUser: boolean
  const mockClient = {
    delete: jest.fn()
  }
  const mockGetHeaders = jest.fn()

  beforeEach(() => {
    currentUser = true
    ;(mockUseAuthContext as jest.Mock).mockImplementation(() => ({
      currentUser
    }))

    mockGetHeaders.mockImplementation(() => headersTestData)
    ;(mockUseAxios as jest.Mock).mockImplementation(() => ({
      client: mockClient,
      getHeaders: mockGetHeaders
    }))

    jest.spyOn(ErrorBoundary, 'useErrorBoundary').mockReturnValue({
      ...jest.requireActual('react-error-boundary'),
      showBoundary: jest.fn()
    })
  })

  describe('deleteTastingSheet', () => {
    describe('currentUserが存在しない場合', () => {
      beforeEach(() => {
        currentUser = false
        ;(mockUseAuthContext as jest.Mock).mockImplementation(() => ({
          currentUser
        }))
      })

      test('早期リターンされて何も起こらない', async () => {
        const { result } = setUp(id)

        await act(() => result.current.onClickDelete())
        expect(mockSetRequesting).not.toHaveBeenCalled()
        expect(mockClient.delete).not.toHaveBeenCalled()
        expect(mockGetHeaders).not.toHaveBeenCalled()
        expect(mockShowToast).not.toHaveBeenCalled()
      })
    })

    describe('currentUserが存在する場合', () => {
      test('setRequestingが2回呼ばれる', async () => {
        const { result } = setUp(id)
        await act(() => result.current.onClickDelete())
        expect(mockSetRequesting).toHaveBeenCalledWith(true)
        expect(mockSetRequesting).toHaveBeenCalledWith(false)
        expect(mockSetRequesting).toHaveBeenCalledTimes(2)
      })

      test('client.delete呼ばれる', async () => {
        const { result } = setUp(id)
        await act(() => result.current.onClickDelete())
        expect(mockClient.delete).toHaveBeenCalledWith(`/tasting_sheets/${id}`, headersTestData)
      })

      test('getHeadersが呼ばれる', async () => {
        const { result } = setUp(id)
        await act(() => result.current.onClickDelete())
        expect(mockGetHeaders).toHaveBeenCalledWith(currentUser)
      })

      test('showToastが2回呼ばれる', async () => {
        const { result } = setUp(id)
        await act(() => result.current.onClickDelete())
        expect(mockShowToast).toHaveBeenCalledWith({
          text: 'シートを削除しました',
          type: 'success'
        })
      })
    })
  })
})
