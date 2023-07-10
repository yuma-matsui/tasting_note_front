import userEvent from '@testing-library/user-event'
import { render } from '@testing-library/react'
import { RouterProvider, createMemoryRouter } from 'react-router-dom'

import ResetPasswordLink from '../ResetPasswordLink'

const setUp = () => {
  const router = createMemoryRouter([
    {
      element: <ResetPasswordLink />,
      path: '/'
    },
    {
      element: <p>reset password</p>,
      path: '/reset_password'
    }
  ])
  const utils = render(<RouterProvider router={router} />)

  return {
    router,
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

  test('クリックされた場合、/reset_passwordに遷移する', () => {
    const { getByRole, router } = setUp()
    userEvent.click(getByRole('link'))

    expect(router.state.location.pathname).toEqual('/reset_password')
  })
})
