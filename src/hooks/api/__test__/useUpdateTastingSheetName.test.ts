/* eslint-disable @typescript-eslint/no-unsafe-return */

import Router from 'react-router-dom'
import { renderHook } from '@testing-library/react'
import { act } from 'react-dom/test-utils'

import mockUseCurrentUserContext from '../../context/useCurrentUserContext'
import useUpdateTastingSheetName from '../useUpdateTastingSheetName'
import { initialTastingSheet } from '../../../utils'

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: jest.fn()
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
  const { result } = renderHook(() => useUpdateTastingSheetName())

  return {
    result
  }
}

describe('useUpdateTastingSheetName', () => {
  let tastingSheetId: string | undefined
  let currentUser: boolean
  const tastingSheet = { ...initialTastingSheet }

  beforeEach(() => {
    tastingSheetId = '1'
    currentUser = true
    ;(mockUseCurrentUserContext as jest.Mock).mockImplementation(() => currentUser)

    jest.spyOn(Router, 'useParams').mockReturnValue({
      tastingSheetId
    })
  })

  describe('updateSheetName', () => {
    describe('currentUserが存在しない場合', () => {
      beforeEach(() => {
        currentUser = false
        ;(mockUseCurrentUserContext as jest.Mock).mockImplementation(() => currentUser)
      })

      test('早期リターンされて何も実行されない', async () => {
        const { result } = setUp()
        await act(() => result.current.updateSheetName(tastingSheet))
        expect(mockFetchAndChangeRequesting).not.toHaveBeenCalled()
        expect(mockShowToast).not.toHaveBeenCalled()
      })
    })

    describe('useParamsで取得したtastingSheetIdが数字以外の文字列の場合', () => {
      beforeEach(() => {
        tastingSheetId = 'test'
        jest.spyOn(Router, 'useParams').mockReturnValue({
          tastingSheetId
        })
      })

      test('早期リターンされて何も実行されない', async () => {
        const { result } = setUp()
        await act(() => result.current.updateSheetName(tastingSheet))
        expect(mockFetchAndChangeRequesting).not.toHaveBeenCalled()
        expect(mockShowToast).not.toHaveBeenCalled()
      })
    })

    describe('currentUserが存在して、tastingSheetIdの値が数値の場合', () => {
      test('fetchAndChangeRequestingが呼ばれる', async () => {
        const { result } = setUp()
        await act(() => result.current.updateSheetName(tastingSheet))
        expect(mockFetchAndChangeRequesting).toHaveBeenCalledWith(expect.any(Function))
      })

      test('showToastが呼ばれる', async () => {
        const { result } = setUp()
        await act(() => result.current.updateSheetName(tastingSheet))
        expect(mockShowToast).toHaveBeenCalledWith({
          text: 'シート名を変更しました',
          type: 'success'
        })
      })
    })
  })
})
