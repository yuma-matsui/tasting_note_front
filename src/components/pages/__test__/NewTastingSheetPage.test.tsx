import { render } from '@testing-library/react'

import { useMultiStepForm as mockUseMultiStepForm } from '../../../hooks'
import { ReactNodeChildren } from '../../../types'
import NewTastingSheetPage from '../NewTastingSheetPage'

jest.mock('../../molecules/HeadMeta', () => ({ children }: ReactNodeChildren) => (
  <>
    <p>MockedHeadMeta</p>
    {children}
  </>
))

jest.mock('../../templates/DefaultLayout', () => ({ children }: ReactNodeChildren) => (
  <>
    <p>MockedDefaultLayout</p>
    {children}
  </>
))

jest.mock('../../templates/FormController', () => ({ children }: ReactNodeChildren) => (
  <>
    <p>MockedFormController</p>
    {children}
  </>
))

jest.mock('../../molecules/forms/NewTastingSheetSettingForm', () => () => <p>MockedNewTastingSheetForm</p>)

jest.mock('../../molecules/forms/TastingSheetBaseForm', () => () => <p>MockedTastingSheetBaseForm</p>)

jest.mock('../../organisms/TastingSheetDetailsTab', () => () => <p>MockedTastingSheetDetailsTab</p>)

jest.mock('../../atoms/TastingSheetTimer', () => () => <p>MockedTastingSheetTimer</p>)

jest.mock('../../molecules/StepsBar', () => () => <p>MockedStepsBar</p>)

jest.mock('../../../hooks/tasting_sheet/useMultiStepForm')

jest.mock('../../../hooks/tasting_sheet/useTastingSheetForm', () => () => ({
  handleSubmit: jest.fn(),
  isValid: false,
  isSubmitting: false,
  onSubmit: jest.fn(),
  register: jest.fn(),
  errors: undefined,
  getValues: jest.fn(),
  tastingSheet: {}
}))

jest.mock('../../../hooks/tasting_sheet/useTastingSheetLabels', () => () => [
  { type: 'appearance', items: [], options: [] },
  { type: 'flavor', items: [], options: [] },
  { type: 'taste', items: [], options: [] },
  { type: 'conclusion', items: [], options: [] }
])

const setUp = () => {
  const utils = render(<NewTastingSheetPage />)

  return {
    ...utils
  }
}

describe('NewTastingSheetPage', () => {
  let useMultiStepFormReturnValue: typeof initialStepFormReturnValue
  const initialStepFormReturnValue = {
    step: <p>MockedStep</p>,
    onClickPageControl: jest.fn(),
    isFirstStep: false,
    isAppearanceStep: false,
    isLastStep: false,
    getButtonText: jest.fn(),
    currentStepIndex: 0
  }

  beforeEach(() => {
    useMultiStepFormReturnValue = { ...initialStepFormReturnValue }
    ;(mockUseMultiStepForm as jest.Mock).mockImplementation(() => useMultiStepFormReturnValue)
  })

  test.each([['HeadMeta'], ['DefaultLayout'], ['FormController']])('%sが表示される', (componentName) => {
    const { getByText } = setUp()
    expect(getByText(`Mocked${componentName}`)).toBeInTheDocument()
  })

  test('useMultiStepFormで取得したstepが表示される', () => {
    const { getByText } = setUp()
    expect(getByText('MockedStep')).toBeInTheDocument()
  })

  describe('TastingSheetTimer', () => {
    test('isFirstStepがfalseの場合は表示される', () => {
      const { getByText } = setUp()
      expect(getByText('MockedTastingSheetTimer')).toBeInTheDocument()
    })

    test('isFirstStepがtrueの場合は表示されない', () => {
      useMultiStepFormReturnValue.isFirstStep = true
      ;(mockUseMultiStepForm as jest.Mock).mockImplementation(() => useMultiStepFormReturnValue)

      const { queryByText } = setUp()
      expect(queryByText('MockedTastingSheetTimer')).not.toBeInTheDocument()
    })
  })

  describe('StepsBar', () => {
    test('isFirstStepがfalse、isLastStepがfalseの場合のみ表示される', () => {
      const { getByText } = setUp()
      expect(getByText('MockedStepsBar')).toBeInTheDocument()
    })

    test.each([
      [false, true],
      [true, false],
      [true, true]
    ])('isFirstStepが%p、isLastStepが%pの場合は表示されない', (isFirstStep, isLastStep) => {
      useMultiStepFormReturnValue = {
        ...initialStepFormReturnValue,
        isFirstStep,
        isLastStep
      }
      ;(mockUseMultiStepForm as jest.Mock).mockImplementation(() => useMultiStepFormReturnValue)

      const { queryByText } = setUp()
      expect(queryByText('MockedStepsBar')).not.toBeInTheDocument()
    })
  })
})
