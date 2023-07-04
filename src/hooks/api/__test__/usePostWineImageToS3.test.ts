/* eslint-disable @typescript-eslint/no-unsafe-return */

import axios from 'axios'
import ErrorBoundary from 'react-error-boundary'
import { renderHook } from '@testing-library/react'
import { act } from 'react-dom/test-utils'

import mockUseAuthContext from '../../context/useAuthContext'
import mockUseAxios from '../../useAxios'
import usePostWineImageToS3 from '../usePostWineImageToS3'
import { headersTestData } from '../../../utils'

jest.mock('react-error-boundary', () => ({
  ...jest.requireActual('react-error-boundary'),
  useErrorBoundary: jest.fn()
}))

jest.mock('../../context/useAuthContext')
jest.mock('../../useAxios')

const mockSetRequesting = jest.fn()
jest.mock('../../context/useRequestingDispatchContext', () => () => mockSetRequesting)

const setUp = () => {
  const { result } = renderHook(() => usePostWineImageToS3())

  return {
    result
  }
}

describe('usePostTastingSheet', () => {
  let currentUser: boolean
  const resultURL = 'resultURL'
  const file = {} as File
  const filename = 'test'

  const mockClient = {
    post: jest.fn()
  }
  const mockGetHeaders = jest.fn()
  const mockAxios = jest.spyOn(axios, 'put')

  beforeEach(() => {
    currentUser = true
    ;(mockUseAuthContext as jest.Mock).mockImplementation(() => ({
      currentUser
    }))

    mockClient.post.mockImplementation(() => ({ data: resultURL }))
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

  describe('postWineImageToS3', () => {
    describe('currentUserが存在しない場合', () => {
      beforeEach(() => {
        currentUser = false
        ;(mockUseAuthContext as jest.Mock).mockImplementation(() => ({
          currentUser
        }))
      })

      test('早期リターンされて何も実行されない', async () => {
        const { result } = setUp()
        await act(() => result.current.postWineImageToS3(file, filename))
        expect(mockSetRequesting).not.toHaveBeenCalled()
        expect(mockClient.post).not.toHaveBeenCalled()
        expect(mockGetHeaders).not.toHaveBeenCalled()
        expect(mockAxios).not.toHaveBeenCalled()
      })
    })

    describe('currentUserが存在する場合', () => {
      test('setRequestingが2回呼ばれる', async () => {
        const { result } = setUp()
        await act(() => result.current.postWineImageToS3(file, filename))
        expect(mockSetRequesting).toHaveBeenCalledTimes(2)
        expect(mockSetRequesting).toHaveBeenCalledWith(true)
        expect(mockSetRequesting).toHaveBeenCalledWith(false)
      })

      test('client.postが呼ばれる', async () => {
        const { result } = setUp()
        await act(() => result.current.postWineImageToS3(file, filename))
        expect(mockClient.post).toHaveBeenCalledWith('/images', { filename }, headersTestData)
      })

      test('getHeadersが呼ばれる', async () => {
        const { result } = setUp()
        await act(() => result.current.postWineImageToS3(file, filename))
        expect(mockGetHeaders).toHaveBeenCalledWith(currentUser)
      })

      test('axios.putが呼ばれる', async () => {
        const { result } = setUp()
        await act(() => result.current.postWineImageToS3(file, filename))
        expect(mockAxios).toHaveBeenCalledWith(resultURL, file)
      })
    })
  })
})
