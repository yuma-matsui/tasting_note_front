import { render } from '@testing-library/react'
import { ReactElement } from 'react'
import { RouterProvider, createMemoryRouter } from 'react-router-dom'

import AuthPageWrapper from '../AuthPageWrapper'
import { useCurrentUserContext as mockUseCurrentUserContext } from '../../hooks'

jest.mock('../../hooks/context/useCurrentUserContext')

const setUp = (page: ReactElement) => {
  const router = createMemoryRouter(
    [
      {
        element: <AuthPageWrapper page={page} />,
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

describe('AuthPageWrapper', () => {
  let currentUser: boolean
  const page = <p>MockedPage</p>

  beforeEach(() => {
    currentUser = true
    ;(mockUseCurrentUserContext as jest.Mock).mockImplementation(() => currentUser)
  })

  describe('currentUserが存在する場合', () => {
    test('トップページにリダイレクトされる', () => {
      const { router } = setUp(page)
      expect(router.state.location.pathname).toEqual('/')
    })
  })

  describe('currentUserが存在しない場合', () => {
    beforeEach(() => {
      currentUser = false
      ;(mockUseCurrentUserContext as jest.Mock).mockImplementation(() => currentUser)
    })

    test('propsで受け取ったpageが表示される', () => {
      const { getByText } = setUp(page)
      expect(getByText('MockedPage')).toBeInTheDocument()
    })
  })
})
