import { render } from '@testing-library/react'

import TopPageTitle from '../TopPageTitle'

const setUp = () => {
  const utils = render(<TopPageTitle />)

  return {
    ...utils
  }
}

describe('TopPageTitle', () => {
  test('Tasting Noteが表示される', () => {
    const { getByRole } = setUp()
    expect(getByRole('heading', { name: 'Tasting Note' })).toBeInTheDocument()
  })

  test('テイスティングを記録してソムリエにが表示される', () => {
    const { getByText } = setUp()
    expect(getByText('テイスティングを記録してソムリエに')).toBeInTheDocument()
  })

  test('alt属性がlogoのimgタグが表示される', () => {
    const { getByRole } = setUp()
    expect(getByRole('img')).toHaveAttribute('alt', 'logo')
  })
})
