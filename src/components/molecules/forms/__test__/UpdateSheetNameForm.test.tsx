import { fireEvent, render, screen } from '@testing-library/react'
import { act } from 'react-dom/test-utils'

import UpdateSheetNameForm from '../UpdateSheetNameForm'
import { TastingSheetApi } from '../../../../types'
import { useTastingSheetUpdateForm as mockUseTastingSheetUpdateForm } from '../../../../hooks'
import { initialTastingSheet } from '../../../../utils'

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
  const tastingSheet = {
    ...initialTastingSheet,
    id: 1,
    createdAt: 'test',
    wine: null
  }

  let useUpdateFormReturnValue: typeof initialReturnValue
  const initialReturnValue = {
    disabled: false,
    errors: false,
    handleSubmit: jest.fn(),
    onSubmit: jest.fn(),
    register: jest.fn()
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

    describe('useTastingSheetUpdateForm', () => {
      test('disabledの値とsubmitボタンのdisabledが同じ値になる', () => {
        const { button } = setUp(tastingSheet)
        expect(button).toBeEnabled()
      })

      test('isSubmittingがfalse、isValidがtrueの場合、disabledにならない', () => {
        useUpdateFormReturnValue.disabled = true
        ;(mockUseTastingSheetUpdateForm as jest.Mock).mockImplementation(() => useUpdateFormReturnValue)

        const { button } = setUp(tastingSheet)
        expect(button).toBeDisabled()
      })
    })

    test('クリックした時にhandleSubmitがonSubmitを引数に実行される', async () => {
      const { button } = setUp(tastingSheet)
      await act(() => fireEvent.submit(button))

      expect(useUpdateFormReturnValue.handleSubmit).toHaveBeenCalledWith(useUpdateFormReturnValue.onSubmit)
    })
  })
})
