/* eslint-disable @typescript-eslint/no-unsafe-return */
import Router, { RouterProvider, createMemoryRouter } from 'react-router-dom'
import { render } from '@testing-library/react'

import { useAuthContext as mockUseAuthContext } from '../../hooks'
import EditWinePageWrapper from '../EditWinePageWrapper'

jest.mock('../../hooks/context/useAuthContext')

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: jest.fn(),
  useLocation: jest.fn()
}))

jest.mock('../../components/pages/EditWinePage', () => () => <p>MockedEditWinePage</p>)

const setUp = () => {
  const router = createMemoryRouter(
    [
      {
        path: '/test',
        element: <EditWinePageWrapper />
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

describe('EditWinePageWrapper', () => {
  const useLocationParams = {
    state: { wine: {} },
    key: '',
    pathname: '',
    search: '',
    hash: ''
  }

  beforeEach(() => {
    ;(mockUseAuthContext as jest.Mock).mockImplementation(() => ({
      currentUser: true
    }))

    jest.spyOn(Router, 'useParams').mockReturnValue({
      wineId: '1'
    })
    jest.spyOn(Router, 'useLocation').mockReturnValue(useLocationParams)
  })

  test('currentUserが存在して、wineIdが数字の文字列、stateにwineが存在する場合はEditWinePageが表示される', () => {
    const { getByText } = setUp()
    expect(getByText('MockedEditWinePage')).toBeInTheDocument()
  })

  test('currentUserが存在しない場合、トップページにリダイレクトされる', () => {
    ;(mockUseAuthContext as jest.Mock).mockImplementation(() => ({
      currentUser: false
    }))

    const { router, queryByText } = setUp()
    expect(queryByText('MockedEditWinePage')).not.toBeInTheDocument()
    expect(router.state.location.pathname).toEqual('/')
  })

  describe('wineIdが数字以外の文字列の場合、トップページにリダイレクトされる', () => {
    test.each([['test'], ['string']])('%sの場合', (wineId) => {
      jest.spyOn(Router, 'useParams').mockReturnValue({
        wineId
      })

      const { router, queryByText } = setUp()
      expect(queryByText('MockedEditWinePage')).not.toBeInTheDocument()
      expect(router.state.location.pathname).toEqual('/')
    })
  })

  test('location.stateにwineが存在しない場合、トップページにリダイレクトされる', () => {
    jest.spyOn(Router, 'useLocation').mockReturnValue({
      ...useLocationParams,
      state: null
    })

    const { router, queryByText } = setUp()
    expect(queryByText('MockedEditWinePage')).not.toBeInTheDocument()
    expect(router.state.location.pathname).toEqual('/')
  })
})
