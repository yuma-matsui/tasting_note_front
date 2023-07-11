/* eslint-disable @typescript-eslint/no-unsafe-return */

import { renderHook } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import Auth from 'react-firebase-hooks/auth'

import useSignOutUser from '../useSignOutUser'

jest.mock('firebase/auth', () => ({
  ...jest.requireActual('firebase/auth'),
  getAuth: jest.fn()
}))

jest.mock('react-firebase-hooks/auth', () => ({
  ...jest.requireActual('react-firebase-hooks/auth'),
  useSignOut: jest.fn()
}))

jest.mock('../../context/useAuthErrorDispatchContext', () => () => jest.fn())

describe('useSignOutUser', () => {
  const mockSignOutUser = jest.fn()

  beforeEach(() => {
    jest.spyOn(Auth, 'useSignOut').mockReturnValue([mockSignOutUser, false, undefined])
  })

  describe('signOut', () => {
    test('signOutUserが実行される', async () => {
      const { result } = renderHook(() => useSignOutUser())
      await act(() => result.current.signOut())
      expect(mockSignOutUser).toHaveBeenCalled()
    })
  })
})
