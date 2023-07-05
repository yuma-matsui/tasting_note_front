/* eslint-disable @typescript-eslint/no-unsafe-return */

import Router, { RouterProvider, createMemoryRouter } from 'react-router-dom'
import { render } from '@testing-library/react'

import EditWinePageWrapper from '../EditWinePageWrapper'
import { useCurrentUserContext as mockUseCurrentUserContext } from '../../hooks'
import { wineTestData } from '../../utils'

jest.mock('../../hooks/context/useCurrentUserContext')

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
  let currentUser: boolean
  beforeEach(() => {
    currentUser = true
    ;(mockUseCurrentUserContext as jest.Mock).mockImplementation(() => currentUser)

    jest.spyOn(Router, 'useParams').mockReturnValue({
      wineId: '1'
    })
    jest.spyOn(Router, 'useLocation').mockReturnValue({
      ...jest.requireActual('react-router-dom'),
      state: {
        wine: { ...wineTestData }
      }
    })
  })

  describe('currentUserが存在して、wineIdが数字の文字列、stateにwineが存在する場合', () => {
    test('EditWinePageが表示される', () => {
      const { getByText } = setUp()
      expect(getByText('MockedEditWinePage')).toBeInTheDocument()
    })
  })

  describe('currentUserが存在しない場合', () => {
    beforeEach(() => {
      currentUser = false
      ;(mockUseCurrentUserContext as jest.Mock).mockImplementation(() => currentUser)
    })

    test('トップページにリダイレクトされる', () => {
      const { router, queryByText } = setUp()
      expect(queryByText('MockedEditWinePage')).not.toBeInTheDocument()
      expect(router.state.location.pathname).toEqual('/')
    })
  })

  describe('wineIdが数字以外の文字列の場合', () => {
    describe.each([['test'], ['string']])('%sの場合', (wineId) => {
      beforeEach(() => {
        jest.spyOn(Router, 'useParams').mockReturnValue({
          wineId
        })
      })

      test('トップページにリダイレクトされる', () => {
        const { router, queryByText } = setUp()
        expect(queryByText('MockedEditWinePage')).not.toBeInTheDocument()
        expect(router.state.location.pathname).toEqual('/')
      })
    })
  })

  describe('location.stateにwineが存在しない場合', () => {
    beforeEach(() => {
      jest.spyOn(Router, 'useLocation').mockReturnValue({
        ...jest.requireActual('react-router-dom'),
        state: null
      })
    })

    test('トップページにリダイレクトされる', () => {
      const { router, queryByText } = setUp()
      expect(queryByText('MockedEditWinePage')).not.toBeInTheDocument()
      expect(router.state.location.pathname).toEqual('/')
    })
  })
})
