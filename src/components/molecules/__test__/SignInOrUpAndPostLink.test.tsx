import userEvent from '@testing-library/user-event'
import { render } from '@testing-library/react'
import { RouterProvider, createMemoryRouter } from 'react-router-dom'

import SignInOrUpAndPostLinks from '../SignInOrUpAndPostLinks'
import { TastingSheet, WineColor } from '../../../types'
import { initialTastingSheet } from '../../../utils'

type TestCases = [WineColor, string][]

const setUp = (tastingSheet: TastingSheet) => {
  const router = createMemoryRouter([
    {
      element: <SignInOrUpAndPostLinks tastingSheet={tastingSheet} />,
      path: '/'
    },
    {
      element: <p>SignUp</p>,
      path: '/signup'
    },
    {
      element: <p>SignIn</p>,
      path: '/signin'
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
  const testCases: TestCases = [
    ['red', 'text-theme-red'],
    ['white', 'text-theme-green']
  ]

  beforeEach(() => {
    tastingSheet = { ...initialTastingSheet }
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

  test.each(testCases)('tastingSheetのcolorが%sの場合、%sのclassNameを持つ', (color, className) => {
    tastingSheet.color = color
    const { queryAllByRole } = setUp(tastingSheet)
    const links = queryAllByRole('link')

    links.map((link) => expect(link.parentElement?.className.includes(className)).toBeTruthy())
  })

  describe('link', () => {
    test.each([
      ['サインアップ', '/signup'],
      ['ログイン', '/signin']
    ])('%sリンクを押すと%sへ遷移する', (text, href) => {
      const { getByRole, router } = setUp(tastingSheet)
      userEvent.click(getByRole('link', { name: text }))

      expect(router.state.location.pathname).toEqual(href)
    })
  })

  test.each([['サインアップ'], ['ログイン']])('%sリンクが押されるとstateが更新される', (text) => {
    const { getByRole, router } = setUp(tastingSheet)
    expect(router.state.location.state).toBeNull()

    userEvent.click(getByRole('link', { name: text }))
    expect(router.state.location.state).toBe(tastingSheet)
  })
})
