/* eslint-disable @typescript-eslint/no-unsafe-return */

import React from 'react'
import Form from 'react-hook-form'
import ErrorBoundary from 'react-error-boundary'
import Router from 'react-router-dom'
import { renderHook } from '@testing-library/react'
import { act } from 'react-dom/test-utils'

import useWineForm from '../useWineForm'
import { WineApi, WineFormState } from '../../types'
import { ALCOHOL_PERCENTAGES, COUNTRIES, GRAPES_RED, GRAPES_WHITE, VINTAGES } from '../../assets'
import { wineTestData } from '../../utils'

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: jest.fn()
}))

const mockPostWine = jest.fn()
jest.mock('../api/usePostWine', () => () => ({
  postWine: mockPostWine
}))

const mockPostWineImageToS3 = jest.fn()
jest.mock('../api/usePostWineImageToS3', () => () => ({
  postWineImageToS3: mockPostWineImageToS3
}))

const mockUpdateWine = jest.fn()
jest.mock('../api/useUpdateWine', () => () => ({
  updateWine: mockUpdateWine
}))

jest.mock('../context/useCurrentUserContext', () => () => null)

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

  let mockImageFile: string | null
  const mockSetImageFile = jest.fn()

  const mockRegister = jest.fn()
  const mockHandleSubmit = jest.fn()
  const mockSetValue = jest.fn()
  let mockIsValid: boolean
  let mockIsSubmitting: boolean
  const mockErrors = {}

  beforeEach(() => {
    wine = wineTestData
    mockImageFile = null
    mockIsValid = false
    mockIsSubmitting = false

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

  describe('onSubmit', () => {
    let mockData: WineFormState

    beforeEach(() => {
      mockData = { wine }
    })

    describe('引数のdataがwine.imageを持ち、imageFileも存在する場合', () => {
      beforeEach(() => {
        mockImageFile = 'test'
        mockData.wine.image = 'test'

        jest.spyOn(React, 'useState').mockReturnValue([mockImageFile, mockSetImageFile])
      })

      test('postWineImageToS3が実行される', async () => {
        const { result } = renderHook(() => useWineForm())

        await act(() => result.current.onSubmit(mockData))
        expect(mockPostWineImageToS3).toHaveBeenCalledWith(mockImageFile, mockData.wine.image)
      })
    })

    describe('wineが存在する場合', () => {
      test('updateWineが呼ばれる', async () => {
        const { result } = renderHook(() => useWineForm(wine))
        await act(() => result.current.onSubmit(mockData))
        expect(mockUpdateWine).toHaveBeenCalledWith(mockData.wine, wine.id)
      })
    })

    describe('wineが存在しない場合', () => {
      test('postWineが実行される', async () => {
        const { result } = renderHook(() => useWineForm())
        await act(() => result.current.onSubmit(mockData))
        expect(mockPostWine).toHaveBeenCalledWith(mockData.wine)
      })
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
    describe('wineが存在しない場合', () => {
      test('useLocationで取得したstateのidが返る', () => {
        const { tastingSheetId } = setUp()
        expect(tastingSheetId).toEqual(locationState.id)
      })
    })

    describe('wineが存在する場合', () => {
      test('wineのtastingSheetIdプロパティの値が返る', () => {
        const { tastingSheetId } = setUp(wine)
        expect(tastingSheetId).toEqual(wine.tastingSheetId)
      })
    })
  })

  describe('selectBoxOptions', () => {
    describe('vintages', () => {
      test('VINTAGESを返す', () => {
        const {
          selectBoxOptions: { vintages }
        } = setUp()
        expect(vintages).toEqual(VINTAGES)
      })
    })

    describe('countries', () => {
      test('COUNTRIESを返す', () => {
        const {
          selectBoxOptions: { countries }
        } = setUp()
        expect(countries).toEqual(COUNTRIES)
      })
    })

    describe('alcoholPercentages', () => {
      test('ALCOHOL_PERCENTAGESを返す', () => {
        const {
          selectBoxOptions: { alcoholPercentages }
        } = setUp()
        expect(alcoholPercentages).toEqual(ALCOHOL_PERCENTAGES)
      })
    })

    describe('grapes', () => {
      describe('wineが存在する場合', () => {
        describe('wineのgrapeプロパティが黒ぶどうの場合', () => {
          beforeEach(() => {
            wine.grape = 'アリアニコ'
          })

          test('GRAPES_REDを返す', () => {
            const {
              selectBoxOptions: { grapes }
            } = setUp(wine)
            expect(grapes).toEqual(GRAPES_RED)
          })
        })

        describe('wineのgrapeプロパティが白ぶどうの場合', () => {
          beforeEach(() => {
            wine.grape = '甲州'
          })

          test('GRAPES_WHITEを返す', () => {
            const {
              selectBoxOptions: { grapes }
            } = setUp(wine)
            expect(grapes).toEqual(GRAPES_WHITE)
          })
        })
      })

      describe('wineが存在しない場合', () => {
        describe('useLocationで取得したcolorがredの場合', () => {
          test('GRAPES_REDを返す', () => {
            const {
              selectBoxOptions: { grapes }
            } = setUp()
            expect(grapes).toEqual(GRAPES_RED)
          })
        })

        describe('useLocationで取得したcolorがwhiteの場合', () => {
          test('GRAPES_WHITEを返す', () => {
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
