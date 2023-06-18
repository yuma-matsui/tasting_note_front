import { render } from '@testing-library/react'

import TastingSheetTimer from '../TastingSheetTimer'
import { TastingSheetTimerProps } from '../../../types'
import { initialTastingSheet } from '../../../utils'

const mockStyle = { display: 'block' }
const mockTimerClassName = 'mock-timer-class'
jest.mock('../../../hooks/tasting_sheet/useTastingSheetTimer', () => () => ({
  timerClassName: mockTimerClassName,
  styleForSecond: mockStyle,
  styleForMinute: mockStyle
}))

const setUp = ({ tastingSheet, isLastStep }: TastingSheetTimerProps) => {
  const utils = render(<TastingSheetTimer tastingSheet={tastingSheet} isLastStep={isLastStep} />)

  return {
    ...utils
  }
}

describe('TastingSheetTimer', () => {
  let props: TastingSheetTimerProps
  const initialProps: TastingSheetTimerProps = {
    tastingSheet: { ...initialTastingSheet },
    isLastStep: true
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
