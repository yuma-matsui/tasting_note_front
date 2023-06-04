/* eslint-disable @typescript-eslint/no-unsafe-return */
import { render, screen } from '@testing-library/react'

import { useAuthContext as mockUseAuthContext, useGetButtonFlexType as mockUseGetButtonFlexType } from '../../../hooks'
import { FormControllerProps, TastingSheet } from '../../../types'
import FormController from '../FormController'

jest.mock('../../../hooks/tasting_sheet/useBeforeUnload')

jest.mock('../../../hooks/context/useAuthContext')
jest.mock('../../../hooks/useGetButtonFlexType')

jest.mock('../../atoms/buttons/ConfirmationAndBackButton', () => () => <p>MockedConfirmationAndBackButton</p>)
jest.mock('../../atoms/buttons/FinishTastingButton', () => () => <p>MockedFinishTastingButton</p>)
jest.mock('../../atoms/buttons/FormControllerButton', () => () => <p>MockedFormControllerButton</p>)
jest.mock('../../atoms/buttons/PostTastingSheetButton', () => () => <p>MockedPostTastingSheetButton</p>)
jest.mock('../../atoms/buttons/SaveSheetButton', () => () => <p>MockedSaveSheetButton</p>)

const setUp = ({
  children,
  onClick,
  isFirstStep,
  isAppearanceStep,
  isLastStep,
  disabled,
  backButtonText,
  nextButtonText,
  tastingSheet
}: FormControllerProps) => {
  const utils = render(
    <FormController
      onClick={onClick}
      isFirstStep={isFirstStep}
      isAppearanceStep={isAppearanceStep}
      isLastStep={isLastStep}
      disabled={disabled}
      backButtonText={backButtonText}
      nextButtonText={nextButtonText}
      tastingSheet={tastingSheet}
    >
      {children}
    </FormController>
  )

  return {
    ...utils,
    hiddenButton: screen.getByRole('button', { hidden: true })
  }
}

describe('FromController', () => {
  let props: FormControllerProps
  const initialProps: FormControllerProps = {
    children: <p>MockedChildren</p>,
    onClick: jest.fn(),
    isFirstStep: false,
    isAppearanceStep: false,
    isLastStep: false,
    disabled: false,
    backButtonText: 'test-back-button-text',
    nextButtonText: 'test-next-button-text',
    tastingSheet: {} as TastingSheet
  }

  beforeEach(() => {
    props = { ...initialProps }
    ;(mockUseAuthContext as jest.Mock).mockImplementation(() => ({
      currentUser: false
    }))
    ;(mockUseGetButtonFlexType as jest.Mock).mockImplementation(() => ({
      getButtonFlexType: jest.fn()
    }))
  })

  test('useGetButtonFlexTypeで取得したclassNameをもつ要素が表示される', () => {
    const mockedClassName = 'mock-class'
    ;(mockUseGetButtonFlexType as jest.Mock).mockImplementation(() => ({
      getButtonFlexType: jest.fn(() => mockedClassName)
    }))

    const { hiddenButton } = setUp(props)
    expect(hiddenButton.parentElement?.className.includes(mockedClassName)).toBeTruthy()
  })

  test('childrenが表示される', () => {
    const { getByText } = setUp(props)
    expect(getByText('MockedChildren')).toBeInTheDocument()
  })

  describe('FinishTastingButton', () => {
    test('isLastStepがtrue、currentUserがfalseの場合に表示される', () => {
      props.isLastStep = true
      const { getByText } = setUp(props)
      expect(getByText('MockedFinishTastingButton')).toBeInTheDocument()
    })

    test.each([
      [false, false],
      [true, true],
      [false, true]
    ])('isLastStepが%p、currenUserが%pの場合は表示されない', (isLastStep, currentUser) => {
      props.isLastStep = isLastStep
      ;(mockUseAuthContext as jest.Mock).mockImplementation(() => ({
        currentUser
      }))

      const { queryByText } = setUp(props)
      expect(queryByText('MockedFinishTastingButton')).not.toBeInTheDocument()
    })
  })

  describe('ConfirmationAndBackButton', () => {
    test('isAppearanceStepがfalseの場合は表示されない', () => {
      const { queryByText } = setUp(props)
      expect(queryByText('MockedConfirmationAndBackButton')).not.toBeInTheDocument()
    })

    test('isAppearanceStepがtrueの場合は表示される', () => {
      props.isAppearanceStep = true
      const { getByText } = setUp(props)
      expect(getByText('MockedConfirmationAndBackButton')).toBeInTheDocument()
    })
  })

  test('hiddenのsubmit buttonが表示される', () => {
    const { hiddenButton } = setUp(props)
    expect(hiddenButton).toBeInTheDocument()
  })

  describe('PostTastingSheetButton', () => {
    test('isLastStepがtrue、currenUserがtrueの場合は表示される', () => {
      props.isLastStep = true
      ;(mockUseAuthContext as jest.Mock).mockImplementation(() => ({
        currentUser: true
      }))

      const { getByText } = setUp(props)
      expect(getByText('MockedPostTastingSheetButton')).toBeInTheDocument()
    })

    test.each([
      [false, false],
      [false, true],
      [true, false]
    ])('isLastStepが%p、currentUserが%pの場合は表示されない', (isLastStep, currentUser) => {
      props.isLastStep = isLastStep
      ;(mockUseAuthContext as jest.Mock).mockImplementation(() => ({
        currentUser
      }))

      const { queryByText } = setUp(props)
      expect(queryByText('MockedPostTastingSheetButton')).not.toBeInTheDocument()
    })
  })

  describe('SaveSheetButton', () => {
    test('isLastStepがtrue、currenUserがfalseの場合は表示される', () => {
      props.isLastStep = true
      const { getByText } = setUp(props)
      expect(getByText('MockedSaveSheetButton')).toBeInTheDocument()
    })

    test.each([
      [false, false],
      [false, true],
      [true, true]
    ])('isLastStepが%p、currentUserが%pの場合は表示されない', (isLastStep, currentUser) => {
      props.isLastStep = isLastStep
      ;(mockUseAuthContext as jest.Mock).mockImplementation(() => ({ currentUser }))

      const { queryByText } = setUp(props)
      expect(queryByText('MockedSaveSheetButton')).not.toBeInTheDocument()
    })
  })

  describe('FormControllerButton', () => {
    test.each([
      [false, false, false, 2],
      [false, false, true, 1],
      [false, true, false, 1],
      [true, false, false, 1],
      [true, true, false, 1]
    ])(
      'isFirstStepが%p、isAppearanceStepが%p、isLastStepが%pの場合、%d個表示される',
      (isFirstStep, isAppearanceStep, isLastStep, result) => {
        props = {
          ...props,
          isFirstStep,
          isAppearanceStep,
          isLastStep
        }
        const { getAllByText } = setUp(props)
        expect(getAllByText('MockedFormControllerButton').length).toEqual(result)
      }
    )

    test.each([
      [false, true, true],
      [true, false, true],
      [true, true, true]
    ])(
      'isFirstStepが%p、isAppearanceStepが%p、isLastStepが%pの場合は表示されない',
      (isFirstStep, isAppearanceStep, isLastStep) => {
        props = {
          ...props,
          isFirstStep,
          isAppearanceStep,
          isLastStep
        }
        const { queryByText } = setUp(props)
        expect(queryByText('MockedFormControllerButton')).not.toBeInTheDocument()
      }
    )
  })
})
