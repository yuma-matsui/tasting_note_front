/* eslint-disable @typescript-eslint/no-unsafe-return */

import { renderHook } from '@testing-library/react'
import { act } from 'react-dom/test-utils'

import { WineApi } from '../../../types'
import { wineTestData } from '../../../utils'
import mockUseCurrentUserContext from '../../context/useCurrentUserContext'
import useDeleteWine from '../useDeleteWine'

jest.mock('../../context/useCurrentUserContext')
jest.mock('../../useAxios', () => () => ({
  client: jest.fn(),
  getHeaders: jest.fn()
}))
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn()
}))

const mockFetchAndChangeRequesting = jest.fn()
jest.mock('../../context/useRequestingDispatchContext', () => () => mockFetchAndChangeRequesting)

const mockShowToast = jest.fn()
jest.mock('../../context/useToastContext', () => () => ({
  showToast: mockShowToast
}))

const setUp = (wine: WineApi) => {
  const { result } = renderHook(() => useDeleteWine(wine))

  return {
    result
  }
}

describe('useDeleteWine', () => {
  const wineId = 999
  const tastingSheetId = 1000
  let wine: WineApi
  let currentUser: boolean

  beforeEach(() => {
    wine = { ...wineTestData, id: wineId, tastingSheetId }
    currentUser = true
    ;(mockUseCurrentUserContext as jest.Mock).mockImplementation(() => currentUser)
  })

  describe('onClickDeleteWine', () => {
    describe('currentUserが存在しない場合', () => {
      beforeEach(() => {
        currentUser = false
        ;(mockUseCurrentUserContext as jest.Mock).mockImplementation(() => currentUser)
      })

      test('早期リターンされて何も実行されない', async () => {
        const { result } = setUp(wine)
        await act(() => result.current.onClickDeleteWine())
        expect(mockFetchAndChangeRequesting).not.toHaveBeenCalled()
        expect(mockShowToast).not.toHaveBeenCalled()
      })
    })

    describe('currentUserが存在する場合', () => {
      test('fetchAndChangeRequestingが呼ばれる', async () => {
        const { result } = setUp(wine)
        await act(() => result.current.onClickDeleteWine())
        expect(mockFetchAndChangeRequesting).toHaveBeenCalledWith(expect.any(Function))
      })

      test('showToastが呼ばれる', async () => {
        const { result } = setUp(wine)
        await act(() => result.current.onClickDeleteWine())
        expect(mockShowToast).toHaveBeenCalledWith({
          text: 'ワインを削除しました',
          type: 'success'
        })
      })
    })
  })
})
