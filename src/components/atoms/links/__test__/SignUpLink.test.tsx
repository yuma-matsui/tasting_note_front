import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { createMemoryRouter, RouterProvider } from 'react-router-dom'

import { TastingSheet } from '../../../../types'
import { initialTastingSheet } from '../../../../utils'
import SignUpLink from '../SignUpLink'

const setUp = (tastingSheet?: TastingSheet) => {
  const router = createMemoryRouter([
    {
      element: <SignUpLink tastingSheet={tastingSheet} />,
      path: '/'
    },
    {
      element: <p>sign up</p>,
      path: '/signup'
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
    const { getByRole, router } = setUp()
    userEvent.click(getByRole('link'))

    expect(router.state.location.pathname).toEqual('/signup')
  })

  test('propsにtastingSheetがある場合、クリックされた時にstateが更新される', () => {
    const tastingSheet = { ...initialTastingSheet }
    const { getByRole, router } = setUp(tastingSheet)
    userEvent.click(getByRole('link'))

    expect(router.state.location.state).toBe(tastingSheet)
  })
})
