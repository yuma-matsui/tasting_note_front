import { render } from '@testing-library/react'
import { RouterProvider, createMemoryRouter } from 'react-router-dom'
import userEvent from '@testing-library/user-event'

import { WineApi, WineEditLinkProps } from '../../../../types'
import WineEditLink from '../WineEditLink'

const mockClassName = 'mock-class'
jest.mock('../../../../hooks/useGetButtonClassName', () => () => ({
  className: mockClassName
}))

const setUp = ({ wine, color }: WineEditLinkProps) => {
  const router = createMemoryRouter([
    {
      path: '/',
      element: <WineEditLink wine={wine} color={color} />
    },
    {
      path: '/wines/edit/:id',
      element: <p>test</p>
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
    wine: {} as WineApi,
    color: 'red'
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
    props.wine.id = 1
    const { getByRole } = setUp(props)
    expect(getByRole('link')).toHaveAttribute('href', `/wines/edit/${props.wine.id}`)
  })

  test('クリックされた場合、/wines/edit/:idに遷移する', () => {
    props.wine.id = 2
    const { router, getByRole } = setUp(props)
    userEvent.click(getByRole('link'))

    expect(router.state.location.pathname).toEqual(`/wines/edit/${props.wine.id}`)
  })

  test('クリックされた場合、stateが更新される', () => {
    props.wine = { name: 'test' } as WineApi
    const { router, getByRole } = setUp(props)
    userEvent.click(getByRole('link'))

    expect(router.state.location.state).toBe(props.wine)
  })
})
