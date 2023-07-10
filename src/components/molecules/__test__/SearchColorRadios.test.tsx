import { render } from '@testing-library/react'

import SearchColorRadios from '../SearchColorRadios'
import { SearchColorRadiosProps } from '../../../types'

jest.mock('../../atoms/inputs/SearchColorRadio', () => () => <p>SearchColorRadio</p>)

const setUp = ({ onChange, selectedColor }: SearchColorRadiosProps) => {
  const utils = render(<SearchColorRadios selectedColor={selectedColor} onChange={onChange} />)

  return {
    ...utils
  }
}

describe('SearchColorRadios', () => {
  const props: SearchColorRadiosProps = {
    onChange: jest.fn(),
    selectedColor: 'red'
  }

  test('SearchColorRadioが3つ表示される', () => {
    const { getAllByText } = setUp(props)
    expect(getAllByText('SearchColorRadio').length).toEqual(3)
  })
})
