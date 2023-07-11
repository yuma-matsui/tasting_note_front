/* eslint-disable @typescript-eslint/no-unsafe-return */

import { renderHook } from '@testing-library/react'
import { act } from 'react-dom/test-utils'

import { Wine } from '../../../types'
import { wineTestData } from '../../../utils'
import mockUseCurrentUserContext from '../../context/useCurrentUserContext'
import useUpdateWine from '../useUpdateWine'

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
  const { result } = renderHook(() => useUpdateWine())

  return {
    result
  }
}

describe('usePostTastingSheet', () => {
  let currentUser: boolean
  const wineId = 999
  let puttingWine: Wine

  beforeEach(() => {
    puttingWine = { ...wineTestData, name: 'puttingWine' }

    currentUser = true
    ;(mockUseCurrentUserContext as jest.Mock).mockImplementation(() => currentUser)
  })

  describe('postWine', () => {
    describe('currentUserが存在しない場合', () => {
      beforeEach(() => {
        currentUser = false
        ;(mockUseCurrentUserContext as jest.Mock).mockImplementation(() => currentUser)
      })

      test('早期リターンされて何も実行されない', async () => {
        const { result } = setUp()
        await act(() => result.current.updateWine(puttingWine, wineId))
        expect(mockFetchAndChangeRequesting).not.toHaveBeenCalled()
        expect(mockShowToast).not.toHaveBeenCalled()
      })
    })

    describe('currentUserが存在する場合', () => {
      test('fetchAndChangeRequestingが実行される', async () => {
        const { result } = setUp()
        await act(() => result.current.updateWine(puttingWine, wineId))
        expect(mockFetchAndChangeRequesting).toHaveBeenCalledWith(expect.any(Function))
      })

      test('showToastが実行される', async () => {
        const { result } = setUp()
        await act(() => result.current.updateWine(puttingWine, wineId))
        expect(mockShowToast).toHaveBeenCalledWith({
          text: 'ワインを更新しました',
          type: 'success'
        })
      })
    })
  })
})
