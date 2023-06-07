/* eslint-disable @typescript-eslint/no-unsafe-return */
import Router, { RouterProvider, createMemoryRouter } from 'react-router-dom'
import { render } from '@testing-library/react'

import { useAuthContext as mockUseAuthContext } from '../../hooks'
import NewWinePageWrapper from '../NewWinePageWrapper'

jest.mock('../../components/pages/NewWinePage', () => () => <p>MockedNewWinePage</p>)

jest.mock('../../hooks/context/useAuthContext')
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: jest.fn()
}))

const setUp = () => {
  const router = createMemoryRouter(
    [
      {
        path: '/test',
        element: <NewWinePageWrapper />
      },
      {
        path: '/',
        element: <p>Test</p>
      }
    ],
    { initialEntries: ['/test'] }
  )

  const utils = render(<RouterProvider router={router} />)

  return {
    ...utils,
    router
  }
}

describe('NewWinePageWrapper', () => {
  const useLocationParams = {
    key: 'test',
    pathname: 'test',
    search: 'test',
    state: { id: 1, name: 'test', color: 'red' },
    hash: 'test'
  }

  beforeEach(() => {
    ;(mockUseAuthContext as jest.Mock).mockImplementation(() => ({
      currentUser: true
    }))
    jest.spyOn(Router, 'useLocation').mockReturnValue(useLocationParams)
  })

  test('currentUserが存在して、location.stateが存在する場合、NewWinePageが表示される', () => {
    const { getByText } = setUp()
    expect(getByText('MockedNewWinePage')).toBeInTheDocument()
  })

  test('currentUserが存在しない場合、トップページにリダイレクトされる', () => {
    ;(mockUseAuthContext as jest.Mock).mockImplementation(() => ({
      currentUser: false
    }))

    const { router, queryByText } = setUp()
    expect(queryByText('MockedNewWinePage')).not.toBeInTheDocument()
    expect(router.state.location.pathname).toEqual('/')
  })

  test('location.stateが存在しない場合、トップページにリダイレクトされる', () => {
    jest.spyOn(Router, 'useLocation').mockReturnValue({
      ...useLocationParams,
      state: null
    })

    const { router, queryByText } = setUp()
    expect(queryByText('MockedNewWinePage')).not.toBeInTheDocument()
    expect(router.state.location.pathname).toEqual('/')
  })
})
