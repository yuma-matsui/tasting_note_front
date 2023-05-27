import { render } from '@testing-library/react'
import { RouterProvider, createMemoryRouter } from 'react-router-dom'
import userEvent from '@testing-library/user-event'

import SignUpLink from '../SignUpLink'

const setUp = () => {
  const router = createMemoryRouter([
    {
      path: '/',
      element: <SignUpLink />
    },
    {
      path: '/signup',
      element: <p>sign up</p>
    }
  ])
  const utils = render(<RouterProvider router={router} />)

  return {
    router,
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

  test('クリックされた場合、/signupに遷移する', () => {
    const { router, getByRole } = setUp()
    userEvent.click(getByRole('link'))

    expect(router.state.location.pathname).toEqual('/signup')
  })
})
