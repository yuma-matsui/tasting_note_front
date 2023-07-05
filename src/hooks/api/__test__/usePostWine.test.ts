/* eslint-disable @typescript-eslint/no-unsafe-return */

import { renderHook } from '@testing-library/react'
import { act } from 'react-dom/test-utils'

import mockUseAuthContext from '../../context/useAuthContext'
import usePostWine from '../usePostWine'
import { wineTestData } from '../../../utils'
import { Wine } from '../../../types'

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn()
}))

jest.mock('../../context/useAuthContext')
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
  const { result } = renderHook(() => usePostWine())

  return {
    result
  }
}

describe('usePostTastingSheet', () => {
  let currentUser: boolean
  let postingWine: Wine

  beforeEach(() => {
    postingWine = { ...wineTestData, name: 'postingWine' }

    currentUser = true
    ;(mockUseAuthContext as jest.Mock).mockImplementation(() => ({
      currentUser
    }))
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
        expect(mockFetchAndChangeRequesting).not.toHaveBeenCalled()
        expect(mockShowToast).not.toHaveBeenCalled()
      })
    })

    describe('currentUserが存在する場合', () => {
      test('fetchAndChangeRequestingが呼ばれる', async () => {
        const { result } = setUp()
        await act(() => result.current.postWine(postingWine))
        expect(mockFetchAndChangeRequesting).toHaveBeenCalledWith(expect.any(Function))
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
