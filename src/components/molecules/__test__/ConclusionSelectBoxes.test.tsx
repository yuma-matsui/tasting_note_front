import { render } from '@testing-library/react'
import { ConclusionSelectBoxesProps } from '../../../types'
import ConclusionSelectBoxes from '../ConclusionSelectBoxes'

jest.mock('../../atoms/selects/TastingSheetSelectBox', () => () => <p>TastingSheetSelectBox</p>)

const setUp = ({ register, options }: ConclusionSelectBoxesProps) => {
  const utils = render(<ConclusionSelectBoxes register={register} options={options} />)

  return {
    ...utils
  }
}

describe('ConclusionSelectBoxes', () => {
  const props: ConclusionSelectBoxesProps = {
    register: jest.fn(),
    options: [
      { heading: 'option1', name: 'appearanceColors', labels: [] },
      { heading: 'option2', name: 'appearanceColors', labels: [] }
    ]
  }

  test('optionsの要素数だけTastingSheetSelectBoxが表示される', () => {
    const { getAllByText } = setUp(props)
    expect(getAllByText('TastingSheetSelectBox').length).toEqual(props.options.length)
  })
})
