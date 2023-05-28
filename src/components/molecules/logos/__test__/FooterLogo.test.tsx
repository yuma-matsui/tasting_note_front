import { render } from '@testing-library/react'
import FooterLogo from '../FooterLogo'

const setUp = () => {
  const utils = render(<FooterLogo />)

  return {
    ...utils
  }
}

describe('FooterLogo', () => {
  test('alt属性がFooter Logoののimgタグが表示される', () => {
    const { getByRole } = setUp()
    expect(getByRole('img')).toHaveAttribute('alt', 'Footer Logo')
  })

  test('Tasting Noteが表示される', () => {
    const { getByText } = setUp()
    expect(getByText('Tasting Note')).toBeInTheDocument()
  })
})
