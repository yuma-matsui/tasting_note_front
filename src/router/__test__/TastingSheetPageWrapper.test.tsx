/* eslint-disable @typescript-eslint/no-unsafe-return */

import Router, { RouterProvider, createMemoryRouter } from 'react-router-dom'
import { render } from '@testing-library/react'

import TastingSheetPageWrapper from '../TastingSheetPageWrapper'
import { useAuthContext as mockUseAuthContext } from '../../hooks'

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
  let currentUser: boolean

  beforeEach(() => {
    currentUser = true

    jest.spyOn(Router, 'useParams').mockReturnValue({
      tastingSheetId: '1'
    })
    ;(mockUseAuthContext as jest.Mock).mockImplementation(() => ({
      currentUser
    }))
  })

  describe('currentUserが存在して、tastingSheetIdが数字の文字列の場合', () => {
    test('TastingSheetDetailsPageが表示される', () => {
      const { getByText } = setUp()
      expect(getByText('MockedTastingSheetDetailsPage')).toBeInTheDocument()
    })
  })

  describe('currentUserが存在しない場合', () => {
    beforeEach(() => {
      currentUser = false
      ;(mockUseAuthContext as jest.Mock).mockImplementation(() => ({
        currentUser
      }))
    })

    test('トップページにリダイレクトされる', () => {
      const { router, queryByText } = setUp()
      expect(queryByText('MockedTastingSheetDetailsPage')).not.toBeInTheDocument()
      expect(router.state.location.pathname).toEqual('/')
    })
  })

  describe('tastingSheetIdが数字以外の文字列の場合', () => {
    beforeEach(() => {
      jest.spyOn(Router, 'useParams').mockReturnValue({
        tastingSheetId: 'test'
      })
    })

    test('トップページにリダイレクトされる', () => {
      const { router, queryByText } = setUp()
      expect(queryByText('MockedTastingSheetDetailsPage')).not.toBeInTheDocument()
      expect(router.state.location.pathname).toEqual('/')
    })
  })
})
