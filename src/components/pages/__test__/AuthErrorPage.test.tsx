/* eslint-disable @typescript-eslint/no-unsafe-return */

import { render } from '@testing-library/react'
import { AuthError } from 'firebase/auth'
import React from 'react'

import { ReactNodeChildren } from '../../../types'
import AuthErrorPage from '../AuthErrorPage'

// jest.mock('react', () => ({
//   ...jest.requireActual('react'),
//   useEffect: jest.fn().mockImplementation((hooks: () => void) => hooks())
// }))

jest.mock('../../molecules/HeadMeta', () => ({ children }: ReactNodeChildren) => (
  <>
    <p>MockedHeadMeta</p>
    {children}
  </>
))

const mockUseUrgentSignOut = jest.fn()
jest.mock('../../../hooks/auth/useUrgentSignOut', () => () => mockUseUrgentSignOut())

const mockShowToast = jest.fn()
jest.mock('../../../hooks/context/useToastContext', () => () => ({
  showToast: mockShowToast
}))

jest.mock('../../molecules/logos/HeaderLogo', () => () => <p>MockedHeaderLogo</p>)
jest.mock('../../molecules/logos/FooterLogo', () => () => <p>MockedFooterLogo</p>)

const setUp = (error: Error | AuthError) => {
  const utils = render(<AuthErrorPage error={error} />)

  return {
    ...utils
  }
}

describe('AuthErrorPage', () => {
  const error = {
    message: 'test-message'
  } as Error

  const mockError = jest.spyOn(console, 'error')
  beforeEach(() => {
    mockError.mockClear()
  })

  test.each([['HeaderLogo'], ['FooterLogo'], ['HeadMeta']])('%sが表示される', (componentName) => {
    const { getByText } = setUp(error)
    expect(getByText(`Mocked${componentName}`)).toBeInTheDocument()
  })

  test('トップページへのリンクが表示される', () => {
    const { getByRole } = setUp(error)
    expect(getByRole('link', { name: 'Tasting Noteトップページへ' })).toBeInTheDocument()
  })

  test('copy rightが表示される', () => {
    const { getByText } = setUp(error)
    expect(getByText('©2023 yuma-matsui')).toBeInTheDocument()
  })

  test('useUrgentSignOutが実行される', () => {
    setUp(error)
    expect(mockUseUrgentSignOut).toHaveBeenCalled()
  })

  test('showToastが実行される', () => {
    setUp(error)
    expect(mockShowToast).toHaveBeenCalledWith({
      text: '認証エラーが発生しました',
      type: 'error'
    })
  })

  test('console.errorが実行される', () => {
    setUp(error)
    expect(mockError).toHaveBeenCalledWith(error.message)
  })
})
