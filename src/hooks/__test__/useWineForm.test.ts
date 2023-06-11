/* eslint-disable @typescript-eslint/no-unsafe-return */

import React from 'react'
import { renderHook } from '@testing-library/react'
import Form from 'react-hook-form'
import ErrorBoundary from 'react-error-boundary'
import Router from 'react-router-dom'

import { WineApi } from '../../types'
import useWineForm from '../useWineForm'
import mockUseAuthContext from '../context/useAuthContext'
import { ALCOHOL_PERCENTAGES, COUNTRIES, GRAPES_RED, GRAPES_WHITE, VINTAGES } from '../../assets'

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: jest.fn()
}))

jest.mock('../api/usePostWine', () => () => ({
  postWine: jest.fn()
}))
jest.mock('../api/usePostWineImageToS3', () => () => ({
  postWineImageToS3: jest.fn()
}))
jest.mock('../api/useUpdateWine', () => () => ({
  updateWine: jest.fn()
}))

jest.mock('../context/useAuthContext')

jest.mock('react-error-boundary', () => ({
  ...jest.requireActual('react-error-boundary'),
  useErrorBoundary: jest.fn()
}))

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: jest.fn()
}))

jest.mock('react-hook-form', () => ({
  ...jest.requireActual('react-hook-form'),
  useForm: jest.fn()
}))

const mockClassName = 'mock-class'
jest.mock('../useGetButtonClassName', () => () => ({
  className: mockClassName
}))

const setUp = (wine?: WineApi) => {
  const { result } = renderHook(() => useWineForm(wine))

  return {
    ...result.current
  }
}

describe('useWineForm', () => {
  let wine: WineApi
  const locationState = {
    id: 1,
    color: 'red'
  }

  const mockImageFile = 'mockImageFile'
  const mockSetImageFile = jest.fn()

  const mockRegister = jest.fn()
  const mockHandleSubmit = jest.fn()
  const mockSetValue = jest.fn()
  let mockIsValid = false
  let mockIsSubmitting = false
  const mockErrors = {}

  beforeEach(() => {
    wine = {} as WineApi
    mockIsValid = false
    mockIsSubmitting = false
    ;(mockUseAuthContext as jest.Mock).mockImplementation(() => ({
      currentUser: false
    }))

    jest.spyOn(React, 'useState').mockReturnValue([mockImageFile, mockSetImageFile])

    jest.spyOn(ErrorBoundary, 'useErrorBoundary').mockReturnValue({
      ...jest.requireActual('react-error-boundary'),
      showBoundary: jest.fn()
    })

    jest.spyOn(Router, 'useLocation').mockReturnValue({
      ...jest.requireActual('react-router-dom'),
      state: locationState
    })

    jest.spyOn(Form, 'useForm').mockReturnValue({
      ...jest.requireActual('react-hook-form'),
      register: mockRegister,
      handleSubmit: mockHandleSubmit,
      setValue: mockSetValue,
      formState: {
        ...jest.requireActual('react-hook-form'),
        isValid: mockIsValid,
        isSubmitting: mockIsSubmitting,
        errors: {
          wine: mockErrors
        }
      }
    })
  })

  describe('register', () => {
    test('useFormで取得したregisterが返る', () => {
      const { register } = setUp()
      expect(register).toEqual(mockRegister)
    })
  })

  describe('handleSubmit', () => {
    test('useFormで取得したhandleSubmitが返る', () => {
      const { handleSubmit } = setUp()
      expect(handleSubmit).toEqual(mockHandleSubmit)
    })
  })

  describe('errors', () => {
    test('useFormで取得したerrorが返る', () => {
      const { errors } = setUp()
      expect(errors).toEqual(mockErrors)
    })
  })

  describe('disabled', () => {
    test.each([
      [true, false, true],
      [true, true, true],
      [false, false, true],
      [false, true, false]
    ])('useFormで取得したisSubmittingが%p、isValidが%pの場合、%pを返す', (isSubmitting, isValid, result) => {
      jest.spyOn(Form, 'useForm').mockReturnValue({
        ...jest.requireActual('react-hook-form'),
        formState: {
          ...jest.requireActual('react-hook-form'),
          isSubmitting,
          isValid,
          errors: {
            wine: mockErrors
          }
        }
      })

      const { disabled } = setUp()
      expect(disabled).toEqual(result)
    })
  })

  describe('tastingSheetId', () => {
    test('wineが存在しない場合はuseLocationで取得したstateのidが返る', () => {
      const { tastingSheetId } = setUp()
      expect(tastingSheetId).toEqual(locationState.id)
    })

    test('wineが存在する場合はwineのtastingSheetIdプロパティの値が返る', () => {
      wine.tastingSheetId = 5
      const { tastingSheetId } = setUp(wine)
      expect(tastingSheetId).toEqual(wine.tastingSheetId)
    })
  })

  describe('selectBoxOptions', () => {
    test('vintagesプロパティはVINTAGESコレクション', () => {
      const {
        selectBoxOptions: { vintages }
      } = setUp()
      expect(vintages).toEqual(VINTAGES)
    })

    test('countriesプロパティはCOUNTRIESコレクション', () => {
      const {
        selectBoxOptions: { countries }
      } = setUp()
      expect(countries).toEqual(COUNTRIES)
    })

    test('alcoholPercentagesプロパティはALCOHOL_PERCENTAGESコレクション', () => {
      const {
        selectBoxOptions: { alcoholPercentages }
      } = setUp()
      expect(alcoholPercentages).toEqual(ALCOHOL_PERCENTAGES)
    })

    describe('grapes', () => {
      describe('wineが存在する場合', () => {
        test('wineのgrapeプロパティが黒ぶどうの場合、GRAPES_REDを返す', () => {
          wine.grape = 'アリアニコ'
          const {
            selectBoxOptions: { grapes }
          } = setUp(wine)
          expect(grapes).toEqual(GRAPES_RED)
        })

        test('wineのgrapeプロパティが白ぶどうの場合、GRAPES_WHITEを返す', () => {
          wine.grape = '甲州'
          const {
            selectBoxOptions: { grapes }
          } = setUp(wine)
          expect(grapes).toEqual(GRAPES_WHITE)
        })
      })

      describe('wineが存在しない場合', () => {
        test('useLocationで取得したcolorがredの場合、GRAPES_REDを返す', () => {
          const {
            selectBoxOptions: { grapes }
          } = setUp()
          expect(grapes).toEqual(GRAPES_RED)
        })

        test('useLocationで取得したcolorがwhiteの場合、GRAPES_REDを返す', () => {
          locationState.color = 'white'
          jest.spyOn(Router, 'useLocation').mockReturnValue({
            ...jest.requireActual('react-router-dom'),
            state: locationState
          })

          const {
            selectBoxOptions: { grapes }
          } = setUp()
          expect(grapes).toEqual(GRAPES_WHITE)
        })
      })
    })
  })

  describe('submitButtonClassName', () => {
    test('useGetButtonClassNameで取得したclassNameを返す', () => {
      const { submitButtonClassName } = setUp()
      expect(submitButtonClassName).toEqual(mockClassName)
    })
  })

  describe('imageFile', () => {
    test('useStateで取得したimageFileが返る', () => {
      const { imageFile } = setUp()
      expect(imageFile).toEqual(mockImageFile)
    })
  })
})
