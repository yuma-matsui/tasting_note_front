/* eslint-disable @typescript-eslint/no-unsafe-return */

import Auth from 'react-firebase-hooks/auth'
import { renderHook } from '@testing-library/react'
import { act } from 'react-dom/test-utils'

import mockUseCurrentUserContext from '../../context/useCurrentUserContext'
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
jest.mock('../../context/useCurrentUserContext')
jest.mock('../../useAxios')

const mockSetAuthLoading = jest.fn()
jest.mock('../../context/useAuthLoadingDispatchContext', () => () => mockSetAuthLoading)
jest.mock('../../context/useAuthErrorDispatchContext', () => () => jest.fn())

describe('useDeleteAccount', () => {
  const userId = 999
  let currentUser: boolean
  const mockDeleteUser = jest.fn()
  const mockClient = {
    delete: jest.fn(),
    get: jest.fn()
  }
  const mockGetHeaders = jest.fn()

  beforeEach(() => {
    currentUser = true
    ;(mockUseCurrentUserContext as jest.Mock).mockImplementation(() => currentUser)

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
        ;(mockUseCurrentUserContext as jest.Mock).mockImplementation(() => currentUser)
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
