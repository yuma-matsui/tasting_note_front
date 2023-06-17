/* eslint-disable @typescript-eslint/no-unsafe-return */

import Router from 'react-router-dom'
import ErrorBoundary from 'react-error-boundary'
import Form from 'react-hook-form'
import { renderHook } from '@testing-library/react'
import { act } from 'react-dom/test-utils'

import useResetPasswordForm from '../useResetPasswordForm'
import { AuthForm, ResetPasswordFormProps } from '../../../types'

jest.mock('react-hook-form', () => ({
  ...jest.requireActual('react-hook-form'),
  useForm: jest.fn()
}))

jest.mock('react-error-boundary', () => ({
  ...jest.requireActual('react-error-boundary'),
  useErrorBoundary: jest.fn()
}))

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn()
}))

const mockShowToast = jest.fn()
jest.mock('../../context/useToastContext', () => () => ({
  showToast: mockShowToast
}))

describe('useAuthForm', () => {
  const mockSendEmail = jest.fn()
  const mockSetIsSent = jest.fn()
  let isSent: boolean
  let resetPasswordFormProps: ResetPasswordFormProps

  const mockRegister = jest.fn()
  const mockHandleSubmit = jest.fn()
  const mockReset = jest.fn()
  const mockErrors = {}
  const mockNavigate = jest.fn()

  beforeEach(() => {
    isSent = false
    resetPasswordFormProps = {
      sendEmail: mockSendEmail,
      isSent,
      setIsSent: mockSetIsSent,
      error: undefined
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

    jest.spyOn(Router, 'useNavigate').mockReturnValue(mockNavigate)
  })

  describe('isSentがtrueの場合', () => {
    beforeEach(() => {
      resetPasswordFormProps.isSent = true
    })

    test('navigateが呼ばれる', () => {
      renderHook(() => useResetPasswordForm(resetPasswordFormProps))
      expect(mockNavigate).toHaveBeenCalledWith('/')
    })

    test('showToastが呼ばれる', () => {
      renderHook(() => useResetPasswordForm(resetPasswordFormProps))
      expect(mockShowToast).toHaveBeenCalledWith({
        text: 'メールを送信しました',
        type: 'success'
      })
    })
  })

  describe('register', () => {
    test('useFormで取得したregisterを返す', () => {
      const { result } = renderHook(() => useResetPasswordForm(resetPasswordFormProps))
      expect(result.current.register).toEqual(mockRegister)
    })
  })

  describe('errors', () => {
    test('useFormで取得したerrorsを返す', () => {
      const { result } = renderHook(() => useResetPasswordForm(resetPasswordFormProps))
      expect(result.current.errors).toEqual(mockErrors)
    })
  })

  describe('handleSubmit', () => {
    test('useFormで取得したhandleSubmitを返す', () => {
      const { result } = renderHook(() => useResetPasswordForm(resetPasswordFormProps))
      expect(result.current.handleSubmit).toEqual(mockHandleSubmit)
    })
  })

  describe('onSubmit', () => {
    let mockData: AuthForm

    beforeEach(() => {
      mockData = {
        email: 'test@example.com',
        password: 'test',
        passwordConfirmation: 'test'
      }
    })

    test('sendEmailが実行される', async () => {
      const { result } = renderHook(() => useResetPasswordForm(resetPasswordFormProps))
      await act(() => result.current.onSubmit(mockData))
      expect(mockSendEmail).toHaveBeenCalledWith(mockData.email, {
        url: process.env.REACT_APP_SEND_EMAIL_URL
      })
    })

    test('reset関数が実行される', async () => {
      const { result } = renderHook(() => useResetPasswordForm(resetPasswordFormProps))
      await act(() => result.current.onSubmit(mockData))
      expect(mockReset).toHaveBeenCalled()
    })

    test('setIsSentが呼ばれる', async () => {
      const { result } = renderHook(() => useResetPasswordForm(resetPasswordFormProps))
      await act(() => result.current.onSubmit(mockData))
      expect(mockSetIsSent).toHaveBeenCalled()
    })
  })
})
