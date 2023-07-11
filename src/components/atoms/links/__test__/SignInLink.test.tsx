import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { createMemoryRouter, RouterProvider } from 'react-router-dom'

import { TastingSheet } from '../../../../types'
import { initialTastingSheet } from '../../../../utils'
import SignInLink from '../SignInLink'

const setUp = (tastingSheet?: TastingSheet) => {
  const router = createMemoryRouter([
    {
      element: <SignInLink tastingSheet={tastingSheet} />,
      path: '/'
    },
    {
      element: <p>sign in</p>,
      path: '/signin'
    }
  ])
  const utils = render(<RouterProvider router={router} />)

  return {
    router,
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

  test('クリックされた場合、/signinに遷移する', () => {
    const { getByRole, router } = setUp()
    userEvent.click(getByRole('link'))

    expect(router.state.location.pathname).toEqual('/signin')
  })

  test('propsにtastingSheetがある場合、クリックされた時にstateが更新される', () => {
    const tastingSheet = { ...initialTastingSheet }
    const { getByRole, router } = setUp(tastingSheet)
    userEvent.click(getByRole('link'))

    expect(router.state.location.state).toBe(tastingSheet)
  })
})
