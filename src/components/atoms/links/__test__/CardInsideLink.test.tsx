import { render } from '@testing-library/react'
import { RouterProvider, createMemoryRouter } from 'react-router-dom'
import userEvent from '@testing-library/user-event'

import { CardInsideLinkProps, WineApi } from '../../../../types'
import CardInsideLink from '../CardInsideLink'

const setUp = ({ text, to, textColor, state }: CardInsideLinkProps) => {
  const router = createMemoryRouter([
    {
      path: '/',
      element: <CardInsideLink text={text} to={to} textColor={textColor} state={state} />
    },
    {
      path: '/test',
      element: <p>test</p>
    }
  ])
  const utils = render(<RouterProvider router={router} />)

  return {
    router,
    ...utils
  }
}

describe('CardInsideLink', () => {
  let props: CardInsideLinkProps
  const initialProps: CardInsideLinkProps = {
    text: 'test',
    to: '/',
    textColor: 'red',
    state: {} as WineApi
  }

  beforeEach(() => {
    props = { ...initialProps }
  })

  test('textが表示される', () => {
    const { getByText } = setUp(props)
    expect(getByText(props.text)).toBeInTheDocument()
  })

  test('toを持つaタグが表示される', () => {
    const { getByRole } = setUp(props)
    expect(getByRole('link')).toHaveAttribute('href', '/')
  })

  test('クリックされるとtoへ遷移する', () => {
    props.to = '/test'
    const { router, getByRole } = setUp(props)

    userEvent.click(getByRole('link'))
    expect(router.state.location.pathname).toEqual(props.to)
  })

  test('クリックされるとstateが更新される', () => {
    props.state = {
      name: 'test'
    } as WineApi

    const { router, getByRole } = setUp(props)
    userEvent.click(getByRole('link'))

    expect(router.state.location.state).toBe(props.state)
  })
})
