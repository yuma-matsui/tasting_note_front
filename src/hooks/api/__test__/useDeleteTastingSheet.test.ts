import { renderHook } from '@testing-library/react'
import { act } from 'react-dom/test-utils'

import mockUseCurrentUserContext from '../../context/useCurrentUserContext'
import useDeleteTastingSheet from '../useDeleteTastingSheet'

jest.mock('../../useAxios', () => () => ({
  client: jest.fn(),
  getHeaders: jest.fn()
}))
jest.mock('../../context/useCurrentUserContext')

const mockFetchAndChangeRequesting = jest.fn()
jest.mock('../../context/useRequestingDispatchContext', () => () => mockFetchAndChangeRequesting)

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

  beforeEach(() => {
    currentUser = true
    ;(mockUseCurrentUserContext as jest.Mock).mockImplementation(() => currentUser)
  })

  describe('deleteTastingSheet', () => {
    describe('currentUserが存在しない場合', () => {
      beforeEach(() => {
        currentUser = false
        ;(mockUseCurrentUserContext as jest.Mock).mockImplementation(() => currentUser)
      })

      test('早期リターンされて何も起こらない', async () => {
        const { result } = setUp(id)

        await act(() => result.current.onClickDelete())
        expect(mockFetchAndChangeRequesting).not.toHaveBeenCalled()
        expect(mockShowToast).not.toHaveBeenCalled()
      })
    })

    describe('currentUserが存在する場合', () => {
      test('fetchAndChangeRequestingが呼ばれる', async () => {
        const { result } = setUp(id)
        await act(() => result.current.onClickDelete())
        expect(mockFetchAndChangeRequesting).toHaveBeenCalledWith(expect.any(Function))
      })

      test('showToastが呼ばれる', async () => {
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
