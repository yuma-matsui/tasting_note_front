import { render } from '@testing-library/react'
import { ReactElement } from 'react'
import { RouterProvider, createMemoryRouter } from 'react-router-dom'

import { useAuthContext as mockUseAuthContext } from '../../hooks'
import AuthPageWrapper from '../AuthPageWrapper'

jest.mock('../../hooks/context/useAuthContext')

const setUp = (page: ReactElement) => {
  const router = createMemoryRouter(
    [
      {
        path: '/test',
        element: <AuthPageWrapper page={page} />
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

describe('AuthPageWrapper', () => {
  const page = <p>MockedPage</p>

  beforeEach(() => {
    ;(mockUseAuthContext as jest.Mock).mockImplementation(() => ({
      currentUser: true
    }))
  })

  test('currentUserが存在する場合、トップページにリダイレクトされる', () => {
    const { router } = setUp(page)
    expect(router.state.location.pathname).toEqual('/')
  })

  test('currentUserが存在しない場合はpropsで受け取ったpageが表示される', () => {
    ;(mockUseAuthContext as jest.Mock).mockImplementation(() => ({
      currentUser: false
    }))

    const { getByText } = setUp(page)
    expect(getByText('MockedPage')).toBeInTheDocument()
  })
})
