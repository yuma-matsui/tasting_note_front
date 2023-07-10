import userEvent from '@testing-library/user-event'
import { render } from '@testing-library/react'
import { RouterProvider, createMemoryRouter } from 'react-router-dom'

import CardInsideLink from '../CardInsideLink'
import { CardInsideLinkProps } from '../../../../types'
import { wineTestData } from '../../../../utils'

const setUp = ({ state, text, textColor, to }: CardInsideLinkProps) => {
  const router = createMemoryRouter([
    {
      element: <CardInsideLink text={text} to={to} textColor={textColor} state={state} />,
      path: '/'
    },
    {
      element: <p>test</p>,
      path: '/test'
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
    state: { ...wineTestData },
    text: 'test',
    textColor: 'red',
    to: '/'
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
    const { getByRole, router } = setUp(props)

    userEvent.click(getByRole('link'))
    expect(router.state.location.pathname).toEqual(props.to)
  })

  test('クリックされるとstateが更新される', () => {
    const { getByRole, router } = setUp(props)
    userEvent.click(getByRole('link'))

    expect(router.state.location.state).toBe(props.state)
  })
})
