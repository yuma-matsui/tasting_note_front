/* eslint-disable @typescript-eslint/no-unsafe-return */

import Form from 'react-hook-form'
import ErrorBoundary from 'react-error-boundary'
import { renderHook } from '@testing-library/react'
import { act } from 'react-dom/test-utils'

import useTastingSheetUpdateForm from '../useTastingSheetUpdateForm'
import { initialTastingSheet } from '../../../utils'

jest.mock('react-hook-form', () => ({
  ...jest.requireActual('react-hook-form'),
  useForm: jest.fn()
}))

jest.mock('react-error-boundary', () => ({
  ...jest.requireActual('react-error-boundary'),
  useErrorBoundary: jest.fn()
}))

const mockUpdateSheetName = jest.fn()
jest.mock('../../api/useUpdateTastingSheetName', () => () => ({
  updateSheetName: mockUpdateSheetName
}))

describe('useTastingSheetUpdateForm', () => {
  const mockRegister = jest.fn()
  const mockHandleSubmit = jest.fn()
  const mockErrors = {}
  let isValid: boolean
  let isSubmitting: boolean
  const tastingSheet = {
    ...initialTastingSheet,
    id: 1,
    createdAt: 'test',
    wine: null
  }

  beforeEach(() => {
    isSubmitting = false
    isValid = false

    jest.spyOn(Form, 'useForm').mockReturnValue({
      ...jest.requireActual('react-hook-form'),
      formState: {
        ...jest.requireActual('react-hook-form'),
        errors: {
          tastingSheet: mockErrors
        },
        isSubmitting,
        isValid
      },
      handleSubmit: mockHandleSubmit,
      register: mockRegister
    })

    jest.spyOn(ErrorBoundary, 'useErrorBoundary').mockReturnValue({
      ...jest.requireActual('react-error-boundary'),
      showBoundary: jest.fn()
    })
  })

  describe('register', () => {
    test('useFormで取得したregisterが返る', () => {
      const { result } = renderHook(() => useTastingSheetUpdateForm(tastingSheet))
      expect(result.current.register).toEqual(mockRegister)
    })
  })

  describe('handleSubmit', () => {
    test('useFormで取得したhandleSubmitが返る', () => {
      const { result } = renderHook(() => useTastingSheetUpdateForm(tastingSheet))
      expect(result.current.handleSubmit).toEqual(mockHandleSubmit)
    })
  })

  describe('errors', () => {
    test('useFormで取得したerrorsが返る', () => {
      const { result } = renderHook(() => useTastingSheetUpdateForm(tastingSheet))
      expect(result.current.errors).toEqual(mockErrors)
    })
  })

  describe('disabled', () => {
    describe.each([
      [true, true, true],
      [true, false, true],
      [false, true, false],
      [false, false, true]
    ])('isSubmittingが%p、isValidが%pの場合', (submitting, valid, result) => {
      test(`${String(result)}を返す`, () => {
        jest.spyOn(Form, 'useForm').mockReturnValue({
          ...jest.requireActual('react-hook-form'),
          formState: {
            ...jest.requireActual('react-hook-form'),
            errors: {
              tastingSheet: mockErrors
            },
            isSubmitting: submitting,
            isValid: valid
          },
          handleSubmit: mockHandleSubmit,
          register: mockRegister
        })

        const {
          result: { current }
        } = renderHook(() => useTastingSheetUpdateForm(tastingSheet))
        expect(current.disabled).toEqual(result)
      })
    })
  })

  describe('onSubmit', () => {
    test('実行時にupdateSheetNameが呼ばれる', async () => {
      const mockData = { tastingSheet }

      const { result } = renderHook(() => useTastingSheetUpdateForm(tastingSheet))
      await act(() => result.current.onSubmit(mockData))
      expect(mockUpdateSheetName).toHaveBeenCalledWith(mockData.tastingSheet)
    })
  })
})
