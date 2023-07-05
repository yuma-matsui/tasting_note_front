/* eslint-disable @typescript-eslint/no-unsafe-return */

import { renderHook } from '@testing-library/react'
import { act } from 'react-dom/test-utils'

import mockUseAuthContext from '../../context/useAuthContext'
import usePostWineImageToS3 from '../usePostWineImageToS3'

jest.mock('../../context/useAuthContext')
jest.mock('../../useAxios', () => () => ({
  client: jest.fn(),
  getHeaders: jest.fn()
}))

const mockFetchAndChangeRequesting = jest.fn()
jest.mock('../../context/useRequestingDispatchContext', () => () => mockFetchAndChangeRequesting)

const setUp = () => {
  const { result } = renderHook(() => usePostWineImageToS3())

  return {
    result
  }
}

describe('usePostTastingSheet', () => {
  let currentUser: boolean
  const file = {} as File
  const filename = 'test'

  beforeEach(() => {
    currentUser = true
    ;(mockUseAuthContext as jest.Mock).mockImplementation(() => ({
      currentUser
    }))
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
        expect(mockFetchAndChangeRequesting).not.toHaveBeenCalled()
      })
    })

    describe('currentUserが存在する場合', () => {
      test('fetchAndChangeRequestingが呼ばれる', async () => {
        const { result } = setUp()
        await act(() => result.current.postWineImageToS3(file, filename))
        expect(mockFetchAndChangeRequesting).toHaveBeenCalledWith(expect.any(Function))
      })
    })
  })
})
