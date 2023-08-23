/* eslint-disable @typescript-eslint/no-unsafe-return */

import { render, screen } from '@testing-library/react'

import {
  useCurrentUserContext as mockUseCurrentUserContext,
  useGetButtonFlexType as mockUseGetButtonFlexType
} from '../../../hooks'
import { FormControllerProps } from '../../../types'
import { initialTastingSheet } from '../../../utils'
import FormController from '../FormController'

jest.mock('../../../hooks/tasting_sheet/useBeforeUnload')
jest.mock('../../../hooks/context/useCurrentUserContext')
jest.mock('../../../hooks/useGetButtonFlexType')

jest.mock('../../atoms/buttons/ConfirmationAndBackButton', () => () => <p>MockedConfirmationAndBackButton</p>)
jest.mock('../../atoms/buttons/FinishTastingButton', () => () => <p>MockedFinishTastingButton</p>)
jest.mock('../../atoms/buttons/FormControllerButton', () => () => <p>MockedFormControllerButton</p>)
jest.mock('../../atoms/buttons/PostTastingSheetButton', () => () => <p>MockedPostTastingSheetButton</p>)
// jest.mock('../../atoms/buttons/SaveSheetButton', () => () => <p>MockedSaveSheetButton</p>)

const setUp = ({
  backButtonText,
  children,
  disabled,
  isAppearanceStep,
  isFirstStep,
  isLastStep,
  nextButtonText,
  onClick,
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
  let currentUser: boolean
  const mockedClassName = 'mock-class'

  const initialProps: FormControllerProps = {
    backButtonText: 'test-back-button-text',
    children: <p>MockedChildren</p>,
    disabled: false,
    isAppearanceStep: false,
    isFirstStep: false,
    isLastStep: false,
    nextButtonText: 'test-next-button-text',
    onClick: jest.fn(),
    tastingSheet: { ...initialTastingSheet }
  }

  beforeEach(() => {
    currentUser = false
    props = { ...initialProps }
    ;(mockUseCurrentUserContext as jest.Mock).mockImplementation(() => currentUser)
    ;(mockUseGetButtonFlexType as jest.Mock).mockImplementation(() => ({
      getButtonFlexType: jest.fn()
    }))
  })

  test('useGetButtonFlexTypeで取得したclassNameをもつ要素が表示される', () => {
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
    describe('isLastStepがtrue、currentUserがfalseの場合', () => {
      test('表示される', () => {
        props.isLastStep = true
        const { getByText } = setUp(props)
        expect(getByText('MockedFinishTastingButton')).toBeInTheDocument()
      })
    })

    describe.each([
      [false, false],
      [true, true],
      [false, true]
    ])('isLastStepが%p、currentUserが%pの場合', (isLastStep, isCurrentUser) => {
      beforeEach(() => {
        props.isLastStep = isLastStep
        currentUser = isCurrentUser
        ;(mockUseCurrentUserContext as jest.Mock).mockImplementation(() => currentUser)
      })
      test('表示されない', () => {
        const { queryByText } = setUp(props)
        expect(queryByText('MockedFinishTastingButton')).not.toBeInTheDocument()
      })
    })
  })

  describe('ConfirmationAndBackButton', () => {
    describe('isAppearanceStepがfalseの場合', () => {
      test('表示されない', () => {
        const { queryByText } = setUp(props)
        expect(queryByText('MockedConfirmationAndBackButton')).not.toBeInTheDocument()
      })
    })

    describe('isAppearanceStepがtrueの場合', () => {
      beforeEach(() => {
        props.isAppearanceStep = true
      })

      test('は表示される', () => {
        const { getByText } = setUp(props)
        expect(getByText('MockedConfirmationAndBackButton')).toBeInTheDocument()
      })
    })
  })

  test('hiddenのsubmit buttonが表示される', () => {
    const { hiddenButton } = setUp(props)
    expect(hiddenButton).toBeInTheDocument()
  })

  describe('PostTastingSheetButton', () => {
    describe('isLastStepがtrue、currenUserがtrueの場合', () => {
      beforeEach(() => {
        props.isLastStep = true
        currentUser = true
        ;(mockUseCurrentUserContext as jest.Mock).mockImplementation(() => currentUser)
      })

      test('表示される', () => {
        const { getByText } = setUp(props)
        expect(getByText('MockedPostTastingSheetButton')).toBeInTheDocument()
      })
    })

    describe.each([
      [false, false],
      [false, true],
      [true, false]
    ])('isLastStepが%p、currentUserが%pの場合', (isLastStep, isCurrentUser) => {
      beforeEach(() => {
        props.isLastStep = isLastStep
        currentUser = isCurrentUser
        ;(mockUseCurrentUserContext as jest.Mock).mockImplementation(() => currentUser)
      })

      test('表示されない', () => {
        const { queryByText } = setUp(props)
        expect(queryByText('MockedPostTastingSheetButton')).not.toBeInTheDocument()
      })
    })
  })

  // describe('SaveSheetButton', () => {
  //   describe('isLastStepがtrue、currenUserがfalseの場合', () => {
  //     beforeEach(() => {
  //       props.isLastStep = true
  //     })

  //     test('表示される', () => {
  //       const { getByText } = setUp(props)
  //       expect(getByText('MockedSaveSheetButton')).toBeInTheDocument()
  //     })
  //   })

  //   describe.each([
  //     [false, false],
  //     [false, true],
  //     [true, true]
  //   ])('isLastStepが%p、currentUserが%pの場合', (isLastStep, isCurrentUser) => {
  //     beforeEach(() => {
  //       props.isLastStep = isLastStep
  //       currentUser = isCurrentUser
  //       ;(mockUseCurrentUserContext as jest.Mock).mockImplementation(() => currentUser)
  //     })

  //     test('表示されない', () => {
  //       const { queryByText } = setUp(props)
  //       expect(queryByText('MockedSaveSheetButton')).not.toBeInTheDocument()
  //     })
  //   })
  // })

  describe('FormControllerButton', () => {
    describe.each([
      [false, false, false, 2],
      [false, false, true, 1],
      [false, true, false, 1],
      [true, false, false, 1],
      [true, true, false, 1]
    ])(
      'isFirstStepが%p、isAppearanceStepが%p、isLastStepが%pの場合',
      (isFirstStep, isAppearanceStep, isLastStep, result) => {
        beforeEach(() => {
          props = {
            ...props,
            isAppearanceStep,
            isFirstStep,
            isLastStep
          }
        })

        test(`${result}個表示される`, () => {
          const { getAllByText } = setUp(props)
          expect(getAllByText('MockedFormControllerButton').length).toEqual(result)
        })
      }
    )

    describe.each([
      [false, true, true],
      [true, false, true],
      [true, true, true]
    ])('isFirstStepが%p、isAppearanceStepが%p、isLastStepが%pの場合は', (isFirstStep, isAppearanceStep, isLastStep) => {
      beforeEach(() => {
        props = {
          ...props,
          isAppearanceStep,
          isFirstStep,
          isLastStep
        }
      })

      test('表示されない', () => {
        const { queryByText } = setUp(props)
        expect(queryByText('MockedFormControllerButton')).not.toBeInTheDocument()
      })
    })
  })
})
