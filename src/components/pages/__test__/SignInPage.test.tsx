import { render } from '@testing-library/react'

import { useGetAuthFormParams as mockUseGetAuthFormParams } from '../../../hooks'
import { ReactNodeChildren } from '../../../types'
import SignInPage from '../SignInPage'

jest.mock('../../molecules/HeadMeta', () => ({ children }: ReactNodeChildren) => (
  <>
    <p>MockedHeadMeta</p>
    {children}
  </>
))

jest.mock('../../templates/DefaultLayout', () => ({ children }: ReactNodeChildren) => (
  <>
    <p>MockedDefaultLayout</p>
    {children}
  </>
))

jest.mock('../../atoms/LoadingSpinner', () => () => <p>MockedLoadingSpinner</p>)

jest.mock('../../molecules/forms/AuthForm', () => () => <p>MockedAuthForm</p>)

jest.mock('../../../hooks/useGetAuthFormParams')

const setUp = () => {
  const utils = render(<SignInPage />)

  return {
    ...utils
  }
}

describe('ResetPasswordPage', () => {
  let useGetAuthFormParamsReturnValue: typeof initialReturnValue
  const initialReturnValue = {
    tastingSheet: {},
    authFunction: jest.fn(),
    loading: false,
    authError: undefined,
    type: 'signIn'
  }

  beforeEach(() => {
    useGetAuthFormParamsReturnValue = { ...initialReturnValue }
    ;(mockUseGetAuthFormParams as jest.Mock).mockImplementation(() => useGetAuthFormParamsReturnValue)
  })

  test.each([['HeadMeta'], ['DefaultLayout'], ['AuthForm']])('%sが表示される', (componentName) => {
    const { getByText } = setUp()
    expect(getByText(`Mocked${componentName}`)).toBeInTheDocument()
  })

  test.each([['HeadMeta'], ['DefaultLayout'], ['AuthForm']])(
    'loadingがtrueの場合、LoadingSpinnerが表示されて%sが表示されない',
    (componentName) => {
      useGetAuthFormParamsReturnValue.loading = true
      ;(mockUseGetAuthFormParams as jest.Mock).mockImplementation(() => useGetAuthFormParamsReturnValue)

      const { getByText, queryByText } = setUp()
      expect(getByText('MockedLoadingSpinner')).toBeInTheDocument()
      expect(queryByText(`Mocked${componentName}`)).not.toBeInTheDocument()
    }
  )
})
