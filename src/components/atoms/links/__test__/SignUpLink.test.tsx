import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

import SignUpLink from '../SignUpLink'

const setUp = () => {
  const utils = render(<SignUpLink />, { wrapper: MemoryRouter })

  return {
    ...utils
  }
}

describe('SignInLink', () => {
  test('サインアップが表示される', () => {
    const { getByText } = setUp()
    expect(getByText('サインアップ')).toBeInTheDocument()
  })

  test('hrefに/signupをもつaタグが表示される', () => {
    const { getByRole } = setUp()
    expect(getByRole('link')).toHaveAttribute('href', '/signup')
  })
})
