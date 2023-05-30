import { render } from '@testing-library/react'

import { SearchColorRadiosProps } from '../../../types'
import SearchColorRadios from '../SearchColorRadios'

jest.mock('../../atoms/inputs/SearchColorRadio', () => () => <p>SearchColorRadio</p>)

const setUp = ({ selectedColor, onChange }: SearchColorRadiosProps) => {
  const utils = render(<SearchColorRadios selectedColor={selectedColor} onChange={onChange} />)

  return {
    ...utils
  }
}

describe('SearchColorRadios', () => {
  const props: SearchColorRadiosProps = {
    selectedColor: 'red',
    onChange: jest.fn()
  }

  test('SearchColorRadioが3つ表示される', () => {
    const { getAllByText } = setUp(props)
    expect(getAllByText('SearchColorRadio').length).toEqual(3)
  })
})
