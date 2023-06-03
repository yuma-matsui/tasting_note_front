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
})
