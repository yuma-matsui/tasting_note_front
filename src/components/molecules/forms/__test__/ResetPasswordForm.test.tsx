import { fireEvent, render } from '@testing-library/react'
import { AuthError } from 'firebase/auth'
import { act } from 'react-dom/test-utils'

import { useResetPasswordForm } from '../../../../hooks'
import { ResetPasswordFormProps } from '../../../../types'
import { getFirebaseErrorMessage } from '../../../../utils'
import ResetPasswordForm from '../ResetPasswordForm'

jest.mock('../../../../hooks/auth/useResetPasswordForm')
jest.mock('../../../../utils/getFirebaseErrorMessage')

jest.mock('../../../atoms/inputs/AuthFormInput', () => () => <p>AuthFormInput</p>)
jest.mock('../../../atoms/inputs/AuthFormSubmitInput', () => () => <input type="submit" value="AuthFormSubmitInput" />)

const setUp = ({ error, isSent, sendEmail, setIsSent }: ResetPasswordFormProps) => {
  const utils = render(<ResetPasswordForm sendEmail={sendEmail} error={error} isSent={isSent} setIsSent={setIsSent} />)

  return {
    ...utils
  }
}

describe('ResetPasswordForm', () => {
  let props: ResetPasswordFormProps
  const initialProps: ResetPasswordFormProps = {
    error: undefined,
    isSent: false,
    sendEmail: jest.fn(),
    setIsSent: jest.fn()
  }

  let useResetPasswordFormReturnValue = {} as typeof initialReturnValue
  const initialReturnValue = {
    errors: {
      email: 'test',
      password: 'test',
      passwordConfirmation: 'test'
    },
    handleSubmit: jest.fn(),
    onSubmit: jest.fn(),
    register: jest.fn()
  }

  beforeEach(() => {
    props = { ...initialProps }
    useResetPasswordFormReturnValue = { ...initialReturnValue }
    ;(useResetPasswordForm as jest.Mock).mockImplementation(() => useResetPasswordFormReturnValue)
  })

  test('"パスワードのリセット"が表示される', () => {
    const { getByRole } = setUp(props)
    expect(getByRole('heading', { name: 'パスワードのリセット' })).toBeInTheDocument()
  })

  test.each([['AuthFormInput'], ['AuthFormSubmitInput']])('%sが表示される', (componentName) => {
    const { getByText } = setUp(props)
    expect(getByText(componentName)).toBeInTheDocument()
  })

  describe('error', () => {
    const mockErrorMessage = 'mockErrorMessage'

    beforeEach(() => {
      ;(getFirebaseErrorMessage as jest.Mock).mockReturnValue(mockErrorMessage)
    })

    test('errorが存在しない場合、メッセージが表示されない', () => {
      const { queryByText } = setUp(props)
      expect(queryByText(mockErrorMessage)).not.toBeInTheDocument()
    })

    test('errorが存在する場合、メッセージが表示される', () => {
      props.error = {} as AuthError
      const { getByText } = setUp(props)
      expect(getByText(mockErrorMessage)).toBeInTheDocument()
    })
  })

  describe('useResetPasswordForm', () => {
    test('submitボタンが押されたらonSubmitを引数にhandleSubmitが実行される', async () => {
      const { getByRole } = setUp(props)
      await act(() => {
        fireEvent.submit(getByRole('button', { name: 'AuthFormSubmitInput' }))
      })

      expect(useResetPasswordFormReturnValue.handleSubmit).toHaveBeenCalledWith(
        useResetPasswordFormReturnValue.onSubmit
      )
    })
  })
})
