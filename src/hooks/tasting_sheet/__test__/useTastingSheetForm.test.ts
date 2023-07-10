/* eslint-disable @typescript-eslint/no-unsafe-return */

import React from 'react'
import Form from 'react-hook-form'
import { renderHook } from '@testing-library/react'
import { act } from 'react-dom/test-utils'

import useTastingSheetForm from '../useTastingSheetForm'
import { initialTastingSheet } from '../../../utils'

jest.mock('react-hook-form', () => ({
  ...jest.requireActual('react-hook-form'),
  useForm: jest.fn()
}))

describe('useTastingSheetForm', () => {
  const mockRegister = jest.fn()
  const mockHandleSubmit = jest.fn()
  const mockSetValue = jest.fn()
  const mockGetValues = jest.fn()
  const mockWatch = jest.fn()
  const mockWatchedTastingSheet = { name: 'test' }
  const mockIsValid = false
  const mockIsSubmitting = false
  const mockErrors = {}
  const mockData = {
    tastingSheet: { ...initialTastingSheet }
  }

  beforeEach(() => {
    jest.spyOn(Form, 'useForm').mockReturnValue({
      ...jest.requireActual('react-hook-form'),
      formState: {
        ...jest.requireActual('react-hook-form'),
        errors: {
          tastingSheet: mockErrors
        },
        isSubmitting: mockIsSubmitting,
        isValid: mockIsValid
      },
      getValues: mockGetValues,
      handleSubmit: mockHandleSubmit,
      register: mockRegister,
      setValue: mockSetValue,
      watch: mockWatch.mockImplementation(() => ({
        tastingSheet: mockWatchedTastingSheet
      }))
    })
  })

  describe('register', () => {
    test('useFormで取得したregisterを返す', () => {
      const { result } = renderHook(() => useTastingSheetForm())

      expect(result.current.register).toEqual(mockRegister)
    })
  })

  describe('handleSubmit', () => {
    test('useFormで取得したhandleSubmitを返す', () => {
      const { result } = renderHook(() => useTastingSheetForm())

      expect(result.current.handleSubmit).toEqual(mockHandleSubmit)
    })
  })

  describe('isValid', () => {
    test('useFormで取得したisValidを返す', () => {
      const { result } = renderHook(() => useTastingSheetForm())

      expect(result.current.isValid).toEqual(mockIsValid)
    })
  })

  describe('isSubmitting', () => {
    test('useFormで取得したisSubmittingを返す', () => {
      const { result } = renderHook(() => useTastingSheetForm())

      expect(result.current.isSubmitting).toEqual(mockIsSubmitting)
    })
  })

  describe('getValues', () => {
    test('useFormで取得したgetValuesを返す', () => {
      const { result } = renderHook(() => useTastingSheetForm())

      expect(result.current.getValues).toEqual(mockGetValues)
    })
  })

  describe('errors', () => {
    test('useFormで取得したerrorsを返す', () => {
      const { result } = renderHook(() => useTastingSheetForm())

      expect(result.current.errors).toEqual(mockErrors)
    })
  })

  describe('tastingSheet', () => {
    test('初期値がinitialTastingSheet', () => {
      const { result } = renderHook(() => useTastingSheetForm())

      expect(result.current.tastingSheet).toMatchObject(initialTastingSheet)
    })
  })

  describe('onSubmit', () => {
    const mockSetTastingSheet = jest.fn()
    beforeEach(() => {
      jest.spyOn(React, 'useState').mockReturnValue([initialTastingSheet, mockSetTastingSheet])
    })

    afterEach(() => {
      jest.restoreAllMocks()
    })

    test('setTastingSheetが呼ばれる', async () => {
      const { result } = renderHook(() => useTastingSheetForm())
      await act(() => result.current.onSubmit(mockData))
      expect(mockSetTastingSheet).toHaveBeenCalledWith(expect.any(Function))
    })
  })

  describe('watchedSheet', () => {
    test('useFormで取得したwatchが実行される', () => {
      const { result } = renderHook(() => useTastingSheetForm())
      expect(mockWatch).toHaveBeenCalled()
      expect(result.current.watchedSheet).toMatchObject(mockWatchedTastingSheet)
    })
  })

  describe('useEffect', () => {
    test('実行時にsetValueが呼ばれる', () => {
      renderHook(() => useTastingSheetForm())
      expect(mockSetValue).toHaveBeenCalledWith('tastingSheet', initialTastingSheet)
    })

    test('tastingSheetの値が変わった場合、setValueが実行される', async () => {
      const { result } = renderHook(() => useTastingSheetForm())
      await act(() => result.current.onSubmit(mockData))
      expect(mockSetValue).toHaveBeenCalledTimes(2)
    })
  })
})
