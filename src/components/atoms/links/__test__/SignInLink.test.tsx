import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

import SignInLink from '../SignInLink'

const setUp = () => {
  const utils = render(<SignInLink />, { wrapper: MemoryRouter })

  return {
    ...utils
  }
}

describe('SignInLink', () => {
  test('ログインが表示される', () => {
    const { getByText } = setUp()
    expect(getByText('ログイン')).toBeInTheDocument()
  })

  test('hrefに/signinをもつaタグが表示される', () => {
    const { getByRole } = setUp()
    expect(getByRole('link')).toHaveAttribute('href', '/signin')
  })
})
