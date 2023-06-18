/* eslint-disable @typescript-eslint/no-unsafe-return */

import Router from 'react-router-dom'
import ErrorBoundary from 'react-error-boundary'
import { renderHook } from '@testing-library/react'
import { act } from 'react-dom/test-utils'

import mockUseAuthContext from '../../context/useAuthContext'
import mockUseAxios from '../../useAxios'
import usePostWine from '../usePostWine'
import { headersTestData, wineTestData } from '../../../utils'
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
  const { result } = renderHook(() => usePostWine())

  return {
    result
  }
}

describe('usePostTastingSheet', () => {
  let currentUser: boolean
  let postingWine: Wine
  let resultWine: Wine

  const mockNavigate = jest.fn()
  const mockClient = {
    post: jest.fn()
  }
  const mockGetHeaders = jest.fn()

  beforeEach(() => {
    postingWine = { ...wineTestData, name: 'postingWine' }
    resultWine = { ...wineTestData, name: 'resultWine' }

    currentUser = true
    ;(mockUseAuthContext as jest.Mock).mockImplementation(() => ({
      currentUser
    }))

    mockClient.post.mockImplementation(() => ({ data: resultWine }))
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
        await act(() => result.current.postWine(postingWine))
        expect(mockSetRequesting).not.toHaveBeenCalled()
        expect(mockClient.post).not.toHaveBeenCalled()
        expect(mockGetHeaders).not.toHaveBeenCalled()
        expect(mockNavigate).not.toHaveBeenCalled()
        expect(mockShowToast).not.toHaveBeenCalled()
      })
    })

    describe('currentUserが存在する場合', () => {
      test('setRequestingが2回呼ばれる', async () => {
        const { result } = setUp()
        await act(() => result.current.postWine(postingWine))
        expect(mockSetRequesting).toHaveBeenCalledWith(true)
        expect(mockSetRequesting).toHaveBeenCalledWith(false)
        expect(mockSetRequesting).toHaveBeenCalledTimes(2)
      })

      test('client.postが呼ばれる', async () => {
        const { result } = setUp()
        await act(() => result.current.postWine(postingWine))
        expect(mockClient.post).toHaveBeenCalledWith('/wines', postingWine, headersTestData)
      })

      test('getHeadersが呼ばれる', async () => {
        const { result } = setUp()
        await act(() => result.current.postWine(postingWine))
        expect(mockGetHeaders).toHaveBeenCalledWith(currentUser)
      })

      test('navigateが呼ばれる', async () => {
        const { result } = setUp()
        await act(() => result.current.postWine(postingWine))
        expect(mockNavigate).toHaveBeenCalledWith(`/tasting_sheets/${resultWine.tastingSheetId}`)
      })

      test('showToastが呼ばれる', async () => {
        const { result } = setUp()
        await act(() => result.current.postWine(postingWine))
        expect(mockShowToast).toHaveBeenCalledWith({
          text: 'ワインを登録しました',
          type: 'success'
        })
      })
    })
  })
})
