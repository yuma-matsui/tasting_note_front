/* eslint-disable @typescript-eslint/no-unsafe-return */

import Auth from 'react-firebase-hooks/auth'
import { renderHook } from '@testing-library/react'
import { act } from 'react-dom/test-utils'

import mockUseAuthContext from '../../context/useAuthContext'
import mockUseAxios from '../../useAxios'
import useDeleteAccount from '../useDeleteAccount'
import { headersTestData } from '../../../utils'

jest.mock('firebase/auth', () => ({
  getAuth: jest.fn()
}))
jest.mock('react-firebase-hooks/auth', () => ({
  ...jest.requireActual('react-firebase-hooks/auth'),
  useDeleteUser: jest.fn()
}))
jest.mock('../../context/useAuthContext')
jest.mock('../../useAxios')

describe('useDeleteAccount', () => {
  const userId = 999
  let currentUser: boolean
  const mockSetAuthLoading = jest.fn()
  const mockDeleteUser = jest.fn()
  const mockClient = {
    get: jest.fn(),
    delete: jest.fn()
  }
  const mockGetHeaders = jest.fn()

  beforeEach(() => {
    currentUser = true
    ;(mockUseAuthContext as jest.Mock).mockImplementation(() => ({
      currentUser,
      setAuthLoading: mockSetAuthLoading,
      setAuthError: jest.fn()
    }))

    mockClient.get.mockImplementation(() => ({ data: userId }))
    mockGetHeaders.mockImplementation(() => headersTestData)
    ;(mockUseAxios as jest.Mock).mockImplementation(() => ({
      client: mockClient,
      getHeaders: mockGetHeaders
    }))

    jest.spyOn(Auth, 'useDeleteUser').mockReturnValue([mockDeleteUser, false, undefined])
  })

  describe('deleteAccount', () => {
    describe('currentUserがfalseの場合', () => {
      beforeEach(() => {
        currentUser = false
        ;(mockUseAuthContext as jest.Mock).mockImplementation(() => ({
          currentUser,
          setAuthLoading: mockSetAuthLoading,
          setAuthError: jest.fn()
        }))
      })
      test('早期リターンされて何も起こらない', async () => {
        const { result } = renderHook(() => useDeleteAccount())
        await act(() => result.current.deleteAccount())
        expect(mockSetAuthLoading).not.toHaveBeenCalled()
        expect(mockGetHeaders).not.toHaveBeenCalled()
        expect(mockClient.get).not.toHaveBeenCalled()
        expect(mockClient.delete).not.toHaveBeenCalled()
        expect(mockDeleteUser).not.toHaveBeenCalled()
      })
    })

    describe('currentUserがtrueの場合', () => {
      test('setAuthLoadingが2回呼ばれる', async () => {
        const { result } = renderHook(() => useDeleteAccount())
        await act(() => result.current.deleteAccount())
        expect(mockSetAuthLoading).toHaveBeenCalledWith(true)
        expect(mockSetAuthLoading).toHaveBeenCalledWith(false)
        expect(mockSetAuthLoading).toHaveBeenCalledTimes(2)
      })

      test('getHeaders呼ばれる', async () => {
        const { result } = renderHook(() => useDeleteAccount())
        await act(() => result.current.deleteAccount())
        expect(mockGetHeaders).toHaveBeenCalledWith(currentUser)
      })

      test('client.getが呼ばれる', async () => {
        const { result } = renderHook(() => useDeleteAccount())
        await act(() => result.current.deleteAccount())
        expect(mockClient.get).toHaveBeenCalledWith('/users', headersTestData)
      })

      test('client.deleteが呼ばれる', async () => {
        const { result } = renderHook(() => useDeleteAccount())
        await act(() => result.current.deleteAccount())
        expect(mockClient.delete).toHaveBeenCalledWith(`/users/${userId}`, headersTestData)
      })

      test('deleteUserが呼ばれる', async () => {
        const { result } = renderHook(() => useDeleteAccount())
        await act(() => result.current.deleteAccount())
        expect(mockDeleteUser).toHaveBeenCalled()
      })
    })
  })
})