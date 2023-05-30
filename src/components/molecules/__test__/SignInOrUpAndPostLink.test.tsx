import { render } from '@testing-library/react'
import { RouterProvider, createMemoryRouter } from 'react-router-dom'
import userEvent from '@testing-library/user-event'

import { TastingSheet, WineColor } from '../../../types'
import SignInOrUpAndPostLinks from '../SignInOrUpAndPostLinks'

const setUp = (tastingSheet: TastingSheet) => {
  const router = createMemoryRouter([
    {
      path: '/',
      element: <SignInOrUpAndPostLinks tastingSheet={tastingSheet} />
    },
    {
      path: '/signup',
      element: <p>SignUp</p>
    },
    {
      path: '/signin',
      element: <p>SignIn</p>
    }
  ])

  const utils = render(<RouterProvider router={router} />)

  return {
    router,
    ...utils
  }
}

describe('SignInOrUpAndPostLink', () => {
  let tastingSheet: TastingSheet
  const initialSheet = {
    color: 'red'
  } as TastingSheet

  beforeEach(() => {
    tastingSheet = { ...initialSheet }
  })

  test.each([['サインアップ'], ['ログイン']])('%sが表示される', (result) => {
    const { getByText } = setUp(tastingSheet)
    expect(getByText(result)).toBeInTheDocument()
  })

  test.each([
    ['サインアップ', '/signup'],
    ['ログイン', '/signin']
  ])('href属性が%sのaタグが表示される', (text, href) => {
    const { getByRole } = setUp(tastingSheet)
    expect(getByRole('link', { name: text })).toHaveAttribute('href', href)
  })

  test.each([
    ['red', 'text-theme-red'],
    ['white', 'text-theme-green']
  ])('tastingSheetのcolorが%sの場合、%sのclassNameを持つ', (color, className) => {
    tastingSheet.color = color as WineColor
    const { queryAllByRole } = setUp(tastingSheet)
    const links = queryAllByRole('link')

    links.map((link) => expect(link.parentElement?.className.includes(className)).toBeTruthy())
  })

  describe('link', () => {
    test.each([
      ['サインアップ', '/signup'],
      ['ログイン', '/signin']
    ])('%sリンクを押すと%sへ遷移する', (text, href) => {
      const { router, getByRole } = setUp(tastingSheet)
      userEvent.click(getByRole('link', { name: text }))

      expect(router.state.location.pathname).toEqual(href)
    })
  })

  test.each([['サインアップ'], ['ログイン']])('%sリンクが押されるとstateが更新される', (text) => {
    const { router, getByRole } = setUp(tastingSheet)
    expect(router.state.location.state).toBeNull()

    userEvent.click(getByRole('link', { name: text }))
    expect(router.state.location.state).toBe(tastingSheet)
  })
})
