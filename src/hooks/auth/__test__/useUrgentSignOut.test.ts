import { renderHook } from '@testing-library/react'

import mockUseCurrentUserContext from '../../context/useCurrentUserContext'
import useUrgentSignOut from '../useUrgentSignOut'

const mockSignOut = jest.fn()
jest.mock('../useSignOutUser', () => () => ({
  signOut: mockSignOut
}))
jest.mock('../../context/useCurrentUserContext')

describe('useUrgentSignOut', () => {
  let currentUser: boolean

  beforeEach(() => {
    currentUser = false
    ;(mockUseCurrentUserContext as jest.Mock).mockImplementation(() => currentUser)
  })

  describe('currentUserが存在しない場合', () => {
    test('signOutは実行されない', () => {
      renderHook(() => useUrgentSignOut())
      expect(mockSignOut).not.toHaveBeenCalled()
    })
  })

  describe('currentUserが存在する場合', () => {
    beforeEach(() => {
      currentUser = true
      ;(mockUseCurrentUserContext as jest.Mock).mockImplementation(() => currentUser)
    })
    test('signOutが実行される', () => {
      renderHook(() => useUrgentSignOut())
      expect(mockSignOut).toHaveBeenCalled()
    })
  })
})
