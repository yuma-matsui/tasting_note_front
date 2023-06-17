import { render } from '@testing-library/react'

import Footer from '../Footer'

jest.mock('../../molecules/logos/FooterLogo', () => () => <p>MockedFooterLogo</p>)
jest.mock('../../molecules/navigation/FooterNavigation', () => () => <p>MockedFooterNavigation</p>)
jest.mock('../../atoms/links/BaseLink', () => () => <p>MockedBaseLink</p>)

jest.mock('../../../hooks/useCheckEditingForm', () => () => ({
  isEditing: false
}))

const setUp = () => {
  const utils = render(<Footer />)

  return {
    ...utils
  }
}

describe('Footer', () => {
  test('copy rightが表示される', () => {
    const { getByText } = setUp()
    expect(getByText('©2023 yuma-matsui')).toBeInTheDocument()
  })

  test('FooterNavigationが表示される', () => {
    const { getByText } = setUp()
    expect(getByText('MockedFooterNavigation')).toBeInTheDocument()
  })

  test('BaseLinkが表示される', () => {
    const { getByText } = setUp()
    expect(getByText('MockedBaseLink')).toBeInTheDocument()
  })
})
