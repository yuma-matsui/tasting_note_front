import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

import ResetPasswordLink from '../ResetPasswordLink'

const setUp = () => {
  const utils = render(<ResetPasswordLink />, { wrapper: MemoryRouter })

  return {
    ...utils
  }
}

describe('ResetPasswordLink', () => {
  test('"パスワードをお忘れの方は"が表示される', () => {
    const { getByText } = setUp()
    expect(getByText('パスワードをお忘れの方は')).toBeInTheDocument()
  })

  test('"こちら"が表示される', () => {
    const { getByText } = setUp()
    expect(getByText('こちら')).toBeInTheDocument()
  })

  test('hrefに/reset_passwordを持つaタグが表示される', () => {
    const { getByRole } = setUp()
    expect(getByRole('link')).toHaveAttribute('href', '/reset_password')
  })
})
