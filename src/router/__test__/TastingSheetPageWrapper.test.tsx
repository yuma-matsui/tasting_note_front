/* eslint-disable @typescript-eslint/no-unsafe-return */
import Router, { RouterProvider, createMemoryRouter } from 'react-router-dom'
import { render } from '@testing-library/react'

import { useAuthContext as mockUseAuthContext } from '../../hooks'
import TastingSheetPageWrapper from '../TastingSheetPageWrapper'

jest.mock('../../hooks/context/useAuthContext')
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: jest.fn()
}))

jest.mock('../../components/pages/TastingSheetDetailsPage', () => () => <p>MockedTastingSheetDetailsPage</p>)

const setUp = () => {
  const router = createMemoryRouter(
    [
      {
        path: '/test',
        element: <TastingSheetPageWrapper />
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

describe('TastingSheetPageWrapper', () => {
  beforeEach(() => {
    ;(mockUseAuthContext as jest.Mock).mockImplementation(() => ({
      currentUser: true
    }))
    jest.spyOn(Router, 'useParams').mockReturnValue({
      tastingSheetId: '1'
    })
  })

  test('currentUserが存在して、tastingSheetIdが数字の文字列の場合、TastingSheetDetailsPageが表示される', () => {
    const { getByText } = setUp()
    expect(getByText('MockedTastingSheetDetailsPage')).toBeInTheDocument()
  })

  test('currentUserが存在しない場合、トップページにリダイレクトされる', () => {
    ;(mockUseAuthContext as jest.Mock).mockImplementation(() => ({
      currentUser: false
    }))

    const { router, queryByText } = setUp()
    expect(queryByText('MockedTastingSheetDetailsPage')).not.toBeInTheDocument()
    expect(router.state.location.pathname).toEqual('/')
  })

  test('tastingSheetIdが数字以外の文字列の場合、トップページにリダイレクトされる', () => {
    jest.spyOn(Router, 'useParams').mockReturnValue({
      tastingSheetId: 'test'
    })

    const { router, queryByText } = setUp()
    expect(queryByText('MockedTastingSheetDetailsPage')).not.toBeInTheDocument()
    expect(router.state.location.pathname).toEqual('/')
  })
})
