/* eslint-disable @typescript-eslint/no-unsafe-return */

import Router from 'react-router-dom'
import ErrorBoundary from 'react-error-boundary'
import { renderHook } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import { User } from 'firebase/auth'

import mockUseAuthContext from '../../context/useAuthContext'
import mockUseAxios from '../../useAxios'
import usePostTastingSheet from '../usePostTastingSheet'
import { TastingSheet, TastingSheetApi } from '../../../types'
import { headersTestData, initialTastingSheet } from '../../../utils'

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
  const { result } = renderHook(() => usePostTastingSheet())

  return {
    result
  }
}

describe('usePostTastingSheet', () => {
  let postingSheet: TastingSheet
  let user: User
  let currentUser: boolean
  let resultSheet: TastingSheetApi

  const mockNavigate = jest.fn()
  const mockClient = {
    post: jest.fn()
  }
  const mockGetHeaders = jest.fn()

  beforeEach(() => {
    postingSheet = {
      ...initialTastingSheet,
      name: 'postingSheet'
    }
    resultSheet = {
      ...initialTastingSheet,
      name: 'resultSheet',
      id: 0,
      createdAt: 'test',
      wine: null
    }

    currentUser = true
    ;(mockUseAuthContext as jest.Mock).mockImplementation(() => ({
      currentUser
    }))

    mockClient.post.mockImplementation(() => ({ data: resultSheet }))
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

  describe('postTastingSheet', () => {
    describe('引数にuser、currentUserが存在しない場合', () => {
      beforeEach(() => {
        currentUser = false
        ;(mockUseAuthContext as jest.Mock).mockImplementation(() => ({
          currentUser
        }))
      })

      test('早期リターンされて何も実行されない', async () => {
        const { result } = setUp()
        await act(() => result.current.postTastingSheet(postingSheet))
        expect(mockSetRequesting).not.toHaveBeenCalled()
        expect(mockClient.post).not.toHaveBeenCalled()
        expect(mockNavigate).not.toHaveBeenCalled()
        expect(mockShowToast).not.toHaveBeenCalled()
      })
    })

    describe('引数userが存在する場合', () => {
      beforeEach(() => {
        user = { uid: 'test' } as User
        currentUser = false
        ;(mockUseAuthContext as jest.Mock).mockImplementation(() => ({
          currentUser
        }))
      })

      test('setRequestingが2回呼ばれる', async () => {
        const { result } = setUp()
        await act(() => result.current.postTastingSheet(postingSheet, user))
        expect(mockSetRequesting).toHaveBeenCalledWith(true)
        expect(mockSetRequesting).toHaveBeenCalledWith(false)
        expect(mockSetRequesting).toHaveBeenCalledTimes(2)
      })

      test('client.postが呼ばれる', async () => {
        const { result } = setUp()
        await act(() => result.current.postTastingSheet(postingSheet, user))
        expect(mockClient.post).toHaveBeenCalledWith('/tasting_sheets', postingSheet, headersTestData)
      })

      test('getHeadersが呼ばれる', async () => {
        const { result } = setUp()
        await act(() => result.current.postTastingSheet(postingSheet, user))
        expect(mockGetHeaders).toHaveBeenCalledWith(user)
      })

      test('navigateが呼ばれる', async () => {
        const { result } = setUp()
        await act(() => result.current.postTastingSheet(postingSheet, user))
        expect(mockNavigate).toHaveBeenCalledWith(`/tasting_sheets/${resultSheet.id}`)
      })

      test('showToastが呼ばれる', async () => {
        const { result } = setUp()
        await act(() => result.current.postTastingSheet(postingSheet, user))
        expect(mockShowToast).toHaveBeenCalledWith({
          text: 'シートを記録しました',
          type: 'success'
        })
      })
    })

    describe('currentUserが存在する場合', () => {
      test('setRequestingが2回呼ばれる', async () => {
        const { result } = setUp()
        await act(() => result.current.postTastingSheet(postingSheet))
        expect(mockSetRequesting).toHaveBeenCalledWith(true)
        expect(mockSetRequesting).toHaveBeenCalledWith(false)
        expect(mockSetRequesting).toHaveBeenCalledTimes(2)
      })

      test('client.postが呼ばれる', async () => {
        const { result } = setUp()
        await act(() => result.current.postTastingSheet(postingSheet))
        expect(mockClient.post).toHaveBeenCalledWith('/tasting_sheets', postingSheet, headersTestData)
      })

      test('getHeadersが呼ばれる', async () => {
        const { result } = setUp()
        await act(() => result.current.postTastingSheet(postingSheet))
        expect(mockGetHeaders).toHaveBeenCalledWith(currentUser)
      })

      test('navigateが呼ばれる', async () => {
        const { result } = setUp()
        await act(() => result.current.postTastingSheet(postingSheet))
        expect(mockNavigate).toHaveBeenCalledWith(`/tasting_sheets/${resultSheet.id}`)
      })

      test('showToastが呼ばれる', async () => {
        const { result } = setUp()
        await act(() => result.current.postTastingSheet(postingSheet))
        expect(mockShowToast).toHaveBeenCalledWith({
          text: 'シートを記録しました',
          type: 'success'
        })
      })
    })
  })
})
