import { render } from '@testing-library/react'

import HeaderLogo from '../HeaderLogo'

const setUp = () => {
  const utils = render(<HeaderLogo />)

  return {
    ...utils
  }
}

describe('HeaderLogo', () => {
  test('alt属性がHeader Logoののimgタグが表示される', () => {
    const { getByRole } = setUp()
    expect(getByRole('img')).toHaveAttribute('alt', 'Header Logo')
  })

  test('Tasting Noteが表示される', () => {
    const { getByRole } = setUp()
    expect(getByRole('heading', { name: 'Tasting Note' })).toBeInTheDocument()
  })

  test('"テイスティングを記録してソムリエに"が表示される', () => {
    const { getByText } = setUp()
    expect(getByText('テイスティングを記録してソムリエに')).toBeInTheDocument()
  })
})
