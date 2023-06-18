/* eslint-disable @typescript-eslint/no-unsafe-return */

import ErrorBoundary from 'react-error-boundary'
import { renderHook } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import { User } from 'firebase/auth'

import useSignUpOrInAndPostTastingSheet from '../useSignUpOrInAndPostTastingSheet'
import { TastingSheet } from '../../../types'
import { initialTastingSheet } from '../../../utils'

type TestCases = [string, 'signUp' | 'signIn'][]

jest.mock('react-error-boundary', () => ({
  ...jest.requireActual('react-error-boundary'),
  useErrorBoundary: jest.fn()
}))

const mockShowToast = jest.fn()
jest.mock('../../context/useToastContext', () => () => ({
  showToast: mockShowToast
}))

const mockPostTastingSheet = jest.fn()
jest.mock('../usePostTastingSheet', () => () => ({
  postTastingSheet: mockPostTastingSheet
}))

const mockCreateUser = jest.fn()
jest.mock('../../auth/useCreateUser', () => () => ({
  createUser: mockCreateUser
}))

const setUp = () => {
  const { result } = renderHook(() => useSignUpOrInAndPostTastingSheet())

  return {
    result
  }
}

describe('useSignUpOrInAndPostTastingSheet', () => {
  let user: User | undefined
  let tastingSheet: TastingSheet | null
  let type: 'signIn' | 'signUp'

  beforeEach(() => {
    user = undefined
    tastingSheet = null
    type = 'signIn'

    jest.spyOn(ErrorBoundary, 'useErrorBoundary').mockReturnValue({
      ...jest.requireActual('react-error-boundary'),
      showBoundary: jest.fn()
    })
  })

  describe('signUpOrInAndPostTastingSheet', () => {
    describe('typeがsignUpでuserが存在する場合', () => {
      beforeEach(() => {
        type = 'signUp'
        user = { uid: 'test' } as User
      })

      test('createUserが実行される', async () => {
        const { result } = setUp()
        await act(() =>
          result.current.signUpOrInAndPostTastingSheet({
            user,
            tastingSheet,
            type
          })
        )
        expect(mockCreateUser).toHaveBeenCalledWith(user)
      })
    })

    describe('tastingSheetが存在する場合', () => {
      beforeEach(() => {
        tastingSheet = { ...initialTastingSheet }
      })

      test('postTastingSheetが実行される', async () => {
        const { result } = setUp()
        await act(() =>
          result.current.signUpOrInAndPostTastingSheet({
            user,
            tastingSheet,
            type
          })
        )
        expect(mockPostTastingSheet).toHaveBeenCalledWith(tastingSheet, user)
      })
    })

    describe('tastingSheetが存在せず、userが存在する場合', () => {
      const testCases: TestCases = [
        ['登録しました', 'signUp'],
        ['ログインしました', 'signIn']
      ]
      beforeEach(() => {
        tastingSheet = null
        user = { uid: 'test' } as User
      })

      test.each(testCases)('showToastが%sで呼ばれる', async (text, authType) => {
        const { result } = setUp()
        await act(() =>
          result.current.signUpOrInAndPostTastingSheet({
            user,
            tastingSheet,
            type: authType
          })
        )
        expect(mockShowToast).toHaveBeenCalledWith({
          text,
          type: 'success'
        })
      })
    })
  })
})