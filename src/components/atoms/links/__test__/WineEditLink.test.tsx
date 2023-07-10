import userEvent from '@testing-library/user-event'
import { render } from '@testing-library/react'
import { RouterProvider, createMemoryRouter } from 'react-router-dom'

import WineEditLink from '../WineEditLink'
import { WineEditLinkProps } from '../../../../types'
import { wineTestData } from '../../../../utils'

const mockClassName = 'mock-class'
jest.mock('../../../../hooks/useGetButtonClassName', () => () => ({
  className: mockClassName
}))

const setUp = ({ color, wine }: WineEditLinkProps) => {
  const router = createMemoryRouter([
    {
      element: <WineEditLink wine={wine} color={color} />,
      path: '/'
    },
    {
      element: <p>test</p>,
      path: '/wines/edit/:id'
    }
  ])

  const utils = render(<RouterProvider router={router} />)

  return {
    router,
    ...utils
  }
}

describe('WineEditLink', () => {
  let props: WineEditLinkProps
  const initialProps: WineEditLinkProps = {
    color: 'red',
    wine: { ...wineTestData }
  }

  beforeEach(() => {
    props = { ...initialProps }
  })

  test('"ワインの編集"が表示される', () => {
    const { getByText } = setUp(props)
    expect(getByText('ワインの編集')).toBeInTheDocument()
  })

  test('useGetButtonClassNameで取得したclassNameを持つ', () => {
    const { getByRole } = setUp(props)
    expect(getByRole('link')).toHaveClass(mockClassName)
  })

  test('wineのidによって遷移先のパスが変わる', () => {
    const { getByRole } = setUp(props)
    expect(getByRole('link')).toHaveAttribute('href', `/wines/edit/${props.wine.id}`)
  })

  test('クリックされた場合、/wines/edit/:idに遷移する', () => {
    const { getByRole, router } = setUp(props)
    userEvent.click(getByRole('link'))

    expect(router.state.location.pathname).toEqual(`/wines/edit/${props.wine.id}`)
  })

  test('クリックされた場合、stateが更新される', () => {
    const { getByRole, router } = setUp(props)
    userEvent.click(getByRole('link'))

    expect(router.state.location.state).toBe(props.wine)
  })
})
