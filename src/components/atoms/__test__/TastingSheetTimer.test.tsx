import { render } from '@testing-library/react'

import { TastingSheetTimerProps } from '../../../types'
import { initialTastingSheet } from '../../../utils'
import TastingSheetTimer from '../TastingSheetTimer'

const mockStyle = { display: 'block' }
const mockTimerClassName = 'mock-timer-class'
jest.mock('../../../hooks/tasting_sheet/useTastingSheetTimer', () => () => ({
  styleForMinute: mockStyle,
  styleForSecond: mockStyle,
  timerClassName: mockTimerClassName
}))

const setUp = ({ isLastStep, tastingSheet }: TastingSheetTimerProps) => {
  const utils = render(<TastingSheetTimer tastingSheet={tastingSheet} isLastStep={isLastStep} />)

  return {
    ...utils
  }
}

describe('TastingSheetTimer', () => {
  let props: TastingSheetTimerProps
  const initialProps: TastingSheetTimerProps = {
    isLastStep: true,
    tastingSheet: { ...initialTastingSheet }
  }

  beforeEach(() => {
    props = { ...initialProps }
  })

  describe('isLastStepがtrueの場合', () => {
    test('何も表示されない', () => {
      const { queryByText } = setUp(props)
      expect(queryByText('残り時間：')).not.toBeInTheDocument()
    })
  })

  describe('isLastStepがfalseの場合', () => {
    beforeEach(() => {
      props.isLastStep = false
    })

    test('"残り時間："が表示される', () => {
      const { getByText } = setUp(props)
      expect(getByText('残り時間：')).toBeInTheDocument()
    })

    test('"："が表示される', () => {
      const { getByText } = setUp(props)
      expect(getByText('：')).toBeInTheDocument()
    })

    test('useTastingSheetTimerで取得したtimerClassNameをもつspanタグが2つ存在する', () => {
      const { getByText } = setUp(props)
      const targetSpanParent = getByText('：')

      expect(targetSpanParent.firstChild).toHaveClass(mockTimerClassName)
      expect(targetSpanParent.lastChild).toHaveClass(mockTimerClassName)
    })

    test('useTastingSheetTimerで取得したstyleをもつspanタグが2つ存在する', () => {
      const { getByText } = setUp(props)
      const targetSpanParent = getByText('：')

      expect(targetSpanParent.firstChild).toHaveStyle(mockStyle)
      expect(targetSpanParent.lastChild).toHaveStyle(mockStyle)
    })
  })
})
