/* eslint-disable @typescript-eslint/no-unsafe-return */

import { renderHook } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import ErrorBoundary from 'react-error-boundary'
import Router from 'react-router-dom'

import useOnClickAuth from '../useOnClickAuth'

jest.mock('react-error-boundary', () => ({
  ...jest.requireActual('react-error-boundary'),
  useErrorBoundary: jest.fn()
}))

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn()
}))

const mockSignOut = jest.fn()
jest.mock('../useSignOutUser', () => () => ({
  signOut: mockSignOut
}))

const mockDeleteAccount = jest.fn()
jest.mock('../useDeleteAccount', () => () => ({
  deleteAccount: mockDeleteAccount
}))

const mockShowToast = jest.fn()
jest.mock('../../context/useToastContext', () => () => ({
  showToast: mockShowToast
}))

describe('useOnClickAuth', () => {
  const mockNavigate = jest.fn()

  beforeEach(() => {
    jest.spyOn(ErrorBoundary, 'useErrorBoundary').mockReturnValue({
      ...jest.requireActual('react-error-boundary'),
      showBoundary: jest.fn()
    })

    jest.spyOn(Router, 'useNavigate').mockReturnValue(mockNavigate)
  })

  describe('onClickDeleteAccount', () => {
    test('deleteAccountが呼ばれる', async () => {
      const { result } = renderHook(() => useOnClickAuth())
      await act(() => result.current.onClickDeleteAccount())
      expect(mockDeleteAccount).toHaveBeenCalled()
    })

    test('navigateが呼ばれる', async () => {
      const { result } = renderHook(() => useOnClickAuth())
      await act(() => result.current.onClickDeleteAccount())
      expect(mockNavigate).toHaveBeenCalledWith('/')
    })

    test('showToastが呼ばれる', async () => {
      const { result } = renderHook(() => useOnClickAuth())
      await act(() => result.current.onClickDeleteAccount())
      expect(mockShowToast).toHaveBeenCalledWith({
        text: 'アカウントを削除しました',
        type: 'success'
      })
    })
  })

  describe('onClickSignOut', () => {
    test('signOutが呼ばれる', async () => {
      const { result } = renderHook(() => useOnClickAuth())
      await act(() => result.current.onClickSignOut())
      expect(mockSignOut).toHaveBeenCalled()
    })

    test('navigateが呼ばれる', async () => {
      const { result } = renderHook(() => useOnClickAuth())
      await act(() => result.current.onClickSignOut())
      expect(mockNavigate).toHaveBeenCalledWith('/')
    })

    test('showToastが呼ばれる', async () => {
      const { result } = renderHook(() => useOnClickAuth())
      await act(() => result.current.onClickSignOut())
      expect(mockShowToast).toHaveBeenCalledWith({
        text: 'ログアウトしました',
        type: 'success'
      })
    })
  })
})
