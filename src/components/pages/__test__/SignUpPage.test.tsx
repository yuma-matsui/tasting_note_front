import { render } from '@testing-library/react'

import { useGetAuthFormParams as mockUseGetAuthFormParams } from '../../../hooks'
import { ReactNodeChildren } from '../../../types'
import SignUpPage from '../SignUpPage'

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
  const utils = render(<SignUpPage />)

  return {
    ...utils
  }
}

describe('ResetPasswordPage', () => {
  let useGetAuthFormParamsReturnValue: typeof initialReturnValue
  const initialReturnValue = {
    authError: undefined,
    authFunction: jest.fn(),
    loading: false,
    tastingSheet: {},
    type: 'signUp'
  }

  beforeEach(() => {
    useGetAuthFormParamsReturnValue = { ...initialReturnValue }
    ;(mockUseGetAuthFormParams as jest.Mock).mockImplementation(() => useGetAuthFormParamsReturnValue)
  })

  test.each([['HeadMeta'], ['DefaultLayout'], ['AuthForm']])('%sが表示される', (componentName) => {
    const { getByText } = setUp()
    expect(getByText(`Mocked${componentName}`)).toBeInTheDocument()
  })

  describe('loadingがtrueの場合', () => {
    beforeEach(() => {
      useGetAuthFormParamsReturnValue.loading = true
      ;(mockUseGetAuthFormParams as jest.Mock).mockImplementation(() => useGetAuthFormParamsReturnValue)
    })

    test.each([['HeadMeta'], ['DefaultLayout'], ['AuthForm']])(
      'LoadingSpinnerが表示されて%sが表示されない',
      (componentName) => {
        const { getByText, queryByText } = setUp()
        expect(getByText('MockedLoadingSpinner')).toBeInTheDocument()
        expect(queryByText(`Mocked${componentName}`)).not.toBeInTheDocument()
      }
    )
  })
})
