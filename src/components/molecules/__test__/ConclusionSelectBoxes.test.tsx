import { render } from '@testing-library/react'

import ConclusionSelectBoxes from '../ConclusionSelectBoxes'
import { ConclusionSelectBoxesProps } from '../../../types'

jest.mock('../../atoms/selects/TastingSheetSelectBox', () => () => <p>TastingSheetSelectBox</p>)

const setUp = ({ options, register }: ConclusionSelectBoxesProps) => {
  const utils = render(<ConclusionSelectBoxes register={register} options={options} />)

  return {
    ...utils
  }
}

describe('ConclusionSelectBoxes', () => {
  const props: ConclusionSelectBoxesProps = {
    options: [
      { name: 'appearanceColors', heading: 'option1', labels: [] },
      { name: 'appearanceColors', heading: 'option2', labels: [] }
    ],
    register: jest.fn()
  }

  test('optionsの要素数だけTastingSheetSelectBoxが表示される', () => {
    const { getAllByText } = setUp(props)
    expect(getAllByText('TastingSheetSelectBox').length).toEqual(props.options.length)
  })
})
