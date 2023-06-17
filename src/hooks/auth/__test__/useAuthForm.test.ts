/* eslint-disable @typescript-eslint/no-unsafe-return */

import ErrorBoundary from 'react-error-boundary'
import Form from 'react-hook-form'
import { renderHook } from '@testing-library/react'
import { act } from 'react-dom/test-utils'

import useAuthForm from '../useAuthForm'
import { AuthForm, AuthFormProps, TastingSheet } from '../../../types'
import { initialTastingSheet } from '../../../utils'

jest.mock('react-hook-form', () => ({
  ...jest.requireActual('react-hook-form'),
  useForm: jest.fn()
}))

jest.mock('react-error-boundary', () => ({
  ...jest.requireActual('react-error-boundary'),
  useErrorBoundary: jest.fn()
}))

const mockSignUpOrInAndPostTastingSheet = jest.fn()
jest.mock('../../api/useSignUpOrInAndPostTastingSheet', () => () => ({
  signUpOrInAndPostTastingSheet: mockSignUpOrInAndPostTastingSheet
}))

type TestCases = ['signIn' | 'signUp', boolean | string][]

describe('useAuthForm', () => {
  let type: 'signIn' | 'signUp'
  let tastingSheet: TastingSheet
  const mockAuthFunction = jest.fn()
  let authFormProps: AuthFormProps

  const mockRegister = jest.fn()
  const mockHandleSubmit = jest.fn()
  const mockReset = jest.fn()
  const mockErrors = {}

  beforeEach(() => {
    type = 'signIn'
    tastingSheet = { ...initialTastingSheet }
    authFormProps = {
      type,
      authFunction: mockAuthFunction,
      tastingSheet,
      authError: undefined
    }

    jest.spyOn(Form, 'useForm').mockReturnValue({
      ...jest.requireActual('react-hook-form'),
      register: mockRegister,
      handleSubmit: mockHandleSubmit,
      reset: mockReset,
      formState: {
        ...jest.requireActual('react-hook-form'),
        errors: mockErrors
      }
    })

    jest.spyOn(ErrorBoundary, 'useErrorBoundary').mockReturnValue({
      ...jest.requireActual('react-error-boundary'),
      showBoundary: jest.fn()
    })
  })

  describe('register', () => {
    test('useFormで取得したregisterを返す', () => {
      const { result } = renderHook(() => useAuthForm(authFormProps))
      expect(result.current.register).toEqual(mockRegister)
    })
  })

  describe('handleSubmit', () => {
    test('useFormで取得したhandleSubmitを返す', () => {
      const { result } = renderHook(() => useAuthForm(authFormProps))
      expect(result.current.handleSubmit).toEqual(mockHandleSubmit)
    })
  })

  describe('errors', () => {
    test('useFormで取得したerrorsを返す', () => {
      const { result } = renderHook(() => useAuthForm(authFormProps))
      expect(result.current.errors).toEqual(mockErrors)
    })
  })

  describe('onSubmit', () => {
    const mockData: AuthForm = {
      email: 'test@example.com',
      password: 'test',
      passwordConfirmation: 'test'
    }

    test('authFunctionが呼ばれる', async () => {
      const { result } = renderHook(() => useAuthForm(authFormProps))

      await act(() => result.current.onSubmit(mockData))
      expect(mockAuthFunction).toHaveBeenCalledWith(mockData.email, mockData.password)
    })

    test('reset関数が呼ばれる', async () => {
      const { result } = renderHook(() => useAuthForm(authFormProps))

      await act(() => result.current.onSubmit(mockData))
      expect(mockReset).toHaveBeenCalled()
    })

    test('signUpOrInAndPostTastingSheetが呼ばれる', async () => {
      const { result } = renderHook(() => useAuthForm(authFormProps))

      await act(() => result.current.onSubmit(mockData))
      expect(mockSignUpOrInAndPostTastingSheet).toHaveBeenCalledWith({
        user: undefined,
        tastingSheet,
        type
      })
    })
  })

  describe('isSignIn', () => {
    const testCases: TestCases = [
      ['signIn', true],
      ['signUp', false]
    ]
    test.each(testCases)('引数のtypeが%sの場合、%pを返す', (authType, result) => {
      authFormProps.type = authType
      const {
        result: { current }
      } = renderHook(() => useAuthForm(authFormProps))

      expect(current.isSignIn).toEqual(result)
    })
  })

  describe('title', () => {
    const testCases: TestCases = [
      ['signIn', 'ログイン'],
      ['signUp', 'サインアップ']
    ]
    test.each(testCases)('引数のtypeが%sの場合、"%s"を返す', (authType, result) => {
      authFormProps.type = authType
      const {
        result: { current }
      } = renderHook(() => useAuthForm(authFormProps))

      expect(current.title).toEqual(result)
    })
  })

  describe('btnValue', () => {
    const testCases: TestCases = [
      ['signIn', 'ログイン'],
      ['signUp', '登録']
    ]
    test.each(testCases)('引数のtypeが%sの場合、"%s"を返す', (authType, result) => {
      authFormProps.type = authType
      const {
        result: { current }
      } = renderHook(() => useAuthForm(authFormProps))

      expect(current.btnValue).toEqual(result)
    })
  })

  describe('btnColor', () => {
    const testCases: TestCases = [
      ['signIn', 'white'],
      ['signUp', 'red']
    ]
    test.each(testCases)('引数のtypeが%sの場合、"%s"を返す', (authType, result) => {
      authFormProps.type = authType
      const {
        result: { current }
      } = renderHook(() => useAuthForm(authFormProps))

      expect(current.btnColor).toEqual(result)
    })
  })
})
