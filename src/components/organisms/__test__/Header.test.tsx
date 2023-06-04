import { render } from '@testing-library/react'

import Header from '../Header'

jest.mock('../../atoms/links/BaseLink', () => () => <p>MockedBaseLink</p>)

jest.mock('../../../hooks/useCheckEditingForm', () => () => ({
  isEditing: false
}))

const setUp = () => {
  const utils = render(<Header />)

  return {
    ...utils
  }
}

describe('Header', () => {
  test('BaseLinkが表示される', () => {
    const { getByText } = setUp()
    expect(getByText('MockedBaseLink')).toBeInTheDocument()
  })
})
