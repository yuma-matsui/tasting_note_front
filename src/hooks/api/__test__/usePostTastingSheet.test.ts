/* eslint-disable @typescript-eslint/no-unsafe-return */

import { renderHook } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import { User } from 'firebase/auth'

import mockUseCurrentUserContext from '../../context/useCurrentUserContext'
import usePostTastingSheet from '../usePostTastingSheet'
import { TastingSheet } from '../../../types'
import { initialTastingSheet } from '../../../utils'

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn()
}))

jest.mock('../../context/useCurrentUserContext')
jest.mock('../../useAxios', () => () => ({
  client: jest.fn(),
  getHeaders: jest.fn()
}))

const mockShowToast = jest.fn()
jest.mock('../../context/useToastContext', () => () => ({
  showToast: mockShowToast
}))
const mockFetchAndChangeRequesting = jest.fn()
jest.mock('../../context/useRequestingDispatchContext', () => () => mockFetchAndChangeRequesting)

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

  beforeEach(() => {
    postingSheet = {
      ...initialTastingSheet,
      name: 'postingSheet'
    }

    currentUser = true
    ;(mockUseCurrentUserContext as jest.Mock).mockImplementation(() => currentUser)
  })

  describe('postTastingSheet', () => {
    describe('引数にuser、currentUserが存在しない場合', () => {
      beforeEach(() => {
        currentUser = false
        ;(mockUseCurrentUserContext as jest.Mock).mockImplementation(() => currentUser)
      })

      test('早期リターンされて何も実行されない', async () => {
        const { result } = setUp()
        await act(() => result.current.postTastingSheet(postingSheet))
        expect(mockFetchAndChangeRequesting).not.toHaveBeenCalled()
        expect(mockShowToast).not.toHaveBeenCalled()
      })
    })

    describe('引数userが存在する場合', () => {
      beforeEach(() => {
        user = { uid: 'test' } as User
        currentUser = false
        ;(mockUseCurrentUserContext as jest.Mock).mockImplementation(() => currentUser)
      })

      test('fetchAndChangeRequestingが呼ばれる', async () => {
        const { result } = setUp()
        await act(() => result.current.postTastingSheet(postingSheet, user))
        expect(mockFetchAndChangeRequesting).toHaveBeenCalledWith(expect.any(Function))
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
      test('fetchAndChangeRequestingが呼ばれる', async () => {
        const { result } = setUp()
        await act(() => result.current.postTastingSheet(postingSheet))
        expect(mockFetchAndChangeRequesting).toHaveBeenCalledWith(expect.any(Function))
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
