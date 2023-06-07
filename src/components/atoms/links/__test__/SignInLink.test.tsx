import { render } from '@testing-library/react'
import { RouterProvider, createMemoryRouter } from 'react-router-dom'
import userEvent from '@testing-library/user-event'

import SignInLink from '../SignInLink'
import { TastingSheet } from '../../../../types'

const setUp = (tastingSheet?: TastingSheet) => {
  const router = createMemoryRouter([
    {
      path: '/',
      element: <SignInLink tastingSheet={tastingSheet} />
    },
    {
      path: '/signin',
      element: <p>sign in</p>
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
    const { router, getByRole } = setUp()
    userEvent.click(getByRole('link'))

    expect(router.state.location.pathname).toEqual('/signin')
  })

  test('propsにtastingSheetがある場合、クリックされた時にstateが更新される', () => {
    const tastingSheet = { name: 'test' } as TastingSheet
    const { router, getByRole } = setUp(tastingSheet)
    userEvent.click(getByRole('link'))

    expect(router.state.location.state).toBe(tastingSheet)
  })
})
