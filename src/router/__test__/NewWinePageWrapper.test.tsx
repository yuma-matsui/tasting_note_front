/* eslint-disable @typescript-eslint/no-unsafe-return */

import Router, { RouterProvider, createMemoryRouter } from 'react-router-dom'
import { render } from '@testing-library/react'

import NewWinePageWrapper from '../NewWinePageWrapper'
import { useCurrentUserContext as mockUseCurrentUserContext } from '../../hooks'

jest.mock('../../components/pages/NewWinePage', () => () => <p>MockedNewWinePage</p>)

jest.mock('../../hooks/context/useCurrentUserContext')
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: jest.fn()
}))

const setUp = () => {
  const router = createMemoryRouter(
    [
      {
        element: <NewWinePageWrapper />,
        path: '/test'
      },
      {
        element: <p>Test</p>,
        path: '/'
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
  let currentUser: boolean
  const state = { id: 1, name: 'test', color: 'red' }

  beforeEach(() => {
    currentUser = true

    jest.spyOn(Router, 'useLocation').mockReturnValue({
      ...jest.requireActual('react-router-dom'),
      state
    })
    ;(mockUseCurrentUserContext as jest.Mock).mockImplementation(() => currentUser)
  })

  describe('currentUserが存在して、location.stateが存在する場合', () => {
    test('NewWinePageが表示される', () => {
      const { getByText } = setUp()
      expect(getByText('MockedNewWinePage')).toBeInTheDocument()
    })
  })

  describe('currentUserが存在しない場合', () => {
    beforeEach(() => {
      currentUser = false
      ;(mockUseCurrentUserContext as jest.Mock).mockImplementation(() => currentUser)
    })

    test('トップページにリダイレクトされる', () => {
      const { queryByText, router } = setUp()
      expect(queryByText('MockedNewWinePage')).not.toBeInTheDocument()
      expect(router.state.location.pathname).toEqual('/')
    })
  })

  describe('location.stateが存在しない場合', () => {
    beforeEach(() => {
      jest.spyOn(Router, 'useLocation').mockReturnValue({
        ...jest.requireActual('react-router-dom'),
        state: null
      })
    })

    test('トップページにリダイレクトされる', () => {
      const { queryByText, router } = setUp()
      expect(queryByText('MockedNewWinePage')).not.toBeInTheDocument()
      expect(router.state.location.pathname).toEqual('/')
    })
  })
})
