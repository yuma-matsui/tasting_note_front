import { fireEvent, render, screen } from '@testing-library/react'
import { act } from 'react-dom/test-utils'

import { TastingSheetApi } from '../../../../types'
import UpdateSheetNameForm from '../UpdateSheetNameForm'
import { useTastingSheetUpdateForm as mockUseTastingSheetUpdateForm } from '../../../../hooks'

jest.mock('../../../../hooks/tasting_sheet/useTastingSheetUpdateForm')

const mockClassName = 'mock-class'
jest.mock('../../../../hooks/useGetButtonClassName', () => () => ({
  className: mockClassName
}))

jest.mock('../../../atoms/inputs/TastingSheetNameInput', () => () => <p>TastingSheetNameInput</p>)

const setUp = (tastingSheet: TastingSheetApi) => {
  const utils = render(<UpdateSheetNameForm tastingSheet={tastingSheet} />)

  return {
    ...utils,
    button: screen.getByRole('button')
  }
}

describe('UpdateSheetNameForm', () => {
  const tastingSheet = {} as TastingSheetApi

  let useUpdateFormReturnValue = {} as typeof initialReturnValue
  const initialReturnValue = {
    register: jest.fn(),
    handleSubmit: jest.fn(),
    isValid: true,
    isSubmitting: false,
    errors: false,
    onSubmit: jest.fn()
  }

  beforeEach(() => {
    useUpdateFormReturnValue = { ...initialReturnValue }
    ;(mockUseTastingSheetUpdateForm as jest.Mock).mockImplementation(() => useUpdateFormReturnValue)
  })

  test('TastingSheetNameInputが表示される', () => {
    const { getByText } = setUp(tastingSheet)
    expect(getByText('TastingSheetNameInput')).toBeInTheDocument()
  })

  describe('submit button', () => {
    test('更新用のボタンが表示される', () => {
      const { getByRole } = setUp(tastingSheet)
      expect(getByRole('button', { name: '更新' })).toHaveAttribute('type', 'submit')
    })

    test('useGetButtonClassNameで取得したclassNameを持つ', () => {
      const { button } = setUp(tastingSheet)
      expect(button).toHaveClass(mockClassName)
    })

    describe('errors', () => {
      test('存在しない場合はmt-7をclassNameにもつ', () => {
        const { button } = setUp(tastingSheet)
        expect(button).toHaveClass('mt-7')
      })

      test('存在する場合はmt-1をclassNameにもつ', () => {
        useUpdateFormReturnValue.errors = true
        ;(mockUseTastingSheetUpdateForm as jest.Mock).mockImplementation(() => useUpdateFormReturnValue)

        const { button } = setUp(tastingSheet)
        expect(button).toHaveClass('mt-1')
      })
    })

    describe('disabled', () => {
      test.each([
        [false, false],
        [true, false],
        [true, true]
      ])('isSubmittingが%p、isValidが%pの場合、disabledになる', (isSubmitting, isValid) => {
        useUpdateFormReturnValue.isSubmitting = isSubmitting
        useUpdateFormReturnValue.isValid = isValid
        ;(mockUseTastingSheetUpdateForm as jest.Mock).mockImplementation(() => useUpdateFormReturnValue)

        const { button } = setUp(tastingSheet)
        expect(button).toBeDisabled()
      })

      test('isSubmittingがfalse、isValidがtrueの場合、disabledにならない', () => {
        useUpdateFormReturnValue.isSubmitting = false
        useUpdateFormReturnValue.isValid = true
        ;(mockUseTastingSheetUpdateForm as jest.Mock).mockImplementation(() => useUpdateFormReturnValue)

        const { button } = setUp(tastingSheet)
        expect(button).toBeEnabled()
      })
    })

    test('クリックした時にhandleSubmitがonSubmitを引数に実行される', async () => {
      const { button } = setUp(tastingSheet)
      await act(() => fireEvent.submit(button))

      expect(useUpdateFormReturnValue.handleSubmit).toHaveBeenCalledWith(useUpdateFormReturnValue.onSubmit)
    })
  })
})
