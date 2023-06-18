import { render } from '@testing-library/react'

import ResetPasswordPage from '../ResetPasswordPage'
import { useResetPasswordFormParams as mockUseResetPasswordFormParams } from '../../../hooks'
import { ReactNodeChildren } from '../../../types'

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
jest.mock('../../molecules/forms/ResetPasswordForm', () => () => <p>MockedResetPasswordForm</p>)

jest.mock('../../../hooks/useResetPasswordFormParams')

const setUp = () => {
  const utils = render(<ResetPasswordPage />)

  return {
    ...utils
  }
}

describe('ResetPasswordPage', () => {
  let useResetPasswordFormParamsReturnValue: typeof initialReturnValue
  const initialReturnValue = {
    sendEmail: jest.fn(),
    loading: false,
    error: undefined,
    isSent: false,
    setIsSent: jest.fn()
  }

  beforeEach(() => {
    useResetPasswordFormParamsReturnValue = { ...initialReturnValue }
    ;(mockUseResetPasswordFormParams as jest.Mock).mockImplementation(() => useResetPasswordFormParamsReturnValue)
  })

  test.each([['HeadMeta'], ['DefaultLayout'], ['ResetPasswordForm']])('%sが表示される', (componentName) => {
    const { getByText } = setUp()
    expect(getByText(`Mocked${componentName}`)).toBeInTheDocument()
  })

  describe('loadingがtrueの場合', () => {
    beforeEach(() => {
      useResetPasswordFormParamsReturnValue.loading = true
      ;(mockUseResetPasswordFormParams as jest.Mock).mockImplementation(() => useResetPasswordFormParamsReturnValue)
    })

    test.each([['HeadMeta'], ['DefaultLayout'], ['ResetPasswordForm']])(
      'LoadingSpinnerが表示されて%sが表示されない',
      (componentName) => {
        const { getByText, queryByText } = setUp()
        expect(getByText('MockedLoadingSpinner')).toBeInTheDocument()
        expect(queryByText(`Mocked${componentName}`)).not.toBeInTheDocument()
      }
    )
  })
})
