import { render } from '@testing-library/react'

import { WineColorRadiosProps } from '../../../types'
import WineColorRadios from '../WineColorRadios'

jest.mock('../../atoms/inputs/TastingSheetCheckBox', () => () => <p>TastingSheetCheckBox</p>)

const setUp = ({ register }: WineColorRadiosProps) => {
  const utils = render(<WineColorRadios register={register} />)

  return {
    ...utils
  }
}

describe('WineColorRadios', () => {
  const props = {
    register: jest.fn()
  }

  test('"ワインの色"が表示される', () => {
    const { getByText } = setUp(props)
    expect(getByText('ワインの色')).toBeInTheDocument()
  })

  test('TastingSheetCheckBoxが2つ表示される', () => {
    const { getAllByText } = setUp(props)
    expect(getAllByText('TastingSheetCheckBox').length).toBe(2)
  })
})
