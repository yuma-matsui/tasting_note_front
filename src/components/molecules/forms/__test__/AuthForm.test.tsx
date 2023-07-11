import { fireEvent, render } from '@testing-library/react'
import { AuthError } from 'firebase/auth'
import { act } from 'react-dom/test-utils'

import { useAuthForm as mockUseAuthForm } from '../../../../hooks'
import { AuthFormProps } from '../../../../types'
import { getFirebaseErrorMessage as mockGetFirebaseErrorMessage, initialTastingSheet } from '../../../../utils'
import AuthForm from '../AuthForm'

jest.mock('../../../../hooks/auth/useAuthForm')
jest.mock('../../../../utils/getFirebaseErrorMessage')

jest.mock('../../../atoms/inputs/AuthFormInput', () => () => <p>MockAuthFormInput</p>)
jest.mock('../../../atoms/inputs/AuthFormSubmitInput', () => () => (
  <input type="submit" value="MockAuthFormSubmitInput" />
))
jest.mock('../../../atoms/links/ResetPasswordLink', () => () => <a href="/">MockResetPasswordLink</a>)

const setUp = ({ authError, authFunction, tastingSheet, type }: AuthFormProps) => {
  const utils = render(
    <AuthForm tastingSheet={tastingSheet} authFunction={authFunction} authError={authError} type={type} />
  )

  return {
    ...utils
  }
}

describe('AuthForm', () => {
  let props: AuthFormProps
  const initialProps: AuthFormProps = {
    authError: {
      message: 'error-test'
    } as AuthError,
    authFunction: jest.fn(),
    tastingSheet: { ...initialTastingSheet },
    type: 'signIn'
  }

  let useAuthFormReturnValue = {} as typeof initialReturnValue
  const initialReturnValue = {
    btnColor: 'test',
    btnValue: 'test',
    errors: {
      email: 'test',
      password: 'test',
      passwordConfirmation: 'test'
    },
    handleSubmit: jest.fn(),
    isSignIn: false,
    onSubmit: jest.fn(),
    register: jest.fn(),
    title: 'test'
  }

  beforeEach(() => {
    useAuthFormReturnValue = { ...initialReturnValue }
    props = { ...initialProps }
    ;(mockUseAuthForm as jest.Mock).mockImplementation(() => useAuthFormReturnValue)
  })

  test('AuthFormSubmitInputが表示される', () => {
    const { getByText } = setUp(props)
    expect(getByText('MockAuthFormSubmitInput')).toBeInTheDocument()
  })

  describe('authError', () => {
    const mockErrorMessage = 'mockErrorMessage'

    beforeEach(() => {
      ;(mockGetFirebaseErrorMessage as jest.Mock).mockReturnValue(mockErrorMessage)
    })

    test('存在する場合はメッセージが表示される', () => {
      const { getByText } = setUp(props)
      expect(getByText(mockErrorMessage)).toBeInTheDocument()
    })

    test('存在しない場合はメッセージが表示されない', () => {
      props.authError = undefined
      const { queryByText } = setUp(props)
      expect(queryByText(mockErrorMessage)).not.toBeInTheDocument()
    })
  })

  describe('useAuthForm', () => {
    test('titleが表示される', () => {
      const { getByRole } = setUp(props)
      expect(getByRole('heading', { name: useAuthFormReturnValue.title })).toBeInTheDocument()
    })

    test('submitされるとhandleSubmitがonSubmitを引数に実行される', async () => {
      const { getByRole } = setUp(props)
      await act(() => {
        fireEvent.submit(getByRole('button', { name: 'MockAuthFormSubmitInput' }))
      })

      expect(useAuthFormReturnValue.handleSubmit).toHaveBeenCalledWith(useAuthFormReturnValue.onSubmit)
    })

    describe('isSignIn', () => {
      test('falseの場合はAuthFormInputが3つ表示される', () => {
        const { getAllByText } = setUp(props)
        expect(getAllByText('MockAuthFormInput').length).toEqual(3)
      })

      describe('trueの場合', () => {
        beforeEach(() => {
          useAuthFormReturnValue.isSignIn = true
          ;(mockUseAuthForm as jest.Mock).mockImplementation(() => useAuthFormReturnValue)
        })

        test('AuthFormInputが2つ表示される', () => {
          const { getAllByText } = setUp(props)
          expect(getAllByText('MockAuthFormInput').length).toEqual(2)
        })

        test('RestPasswordLinkが表示される', () => {
          const { getByRole } = setUp(props)
          expect(getByRole('link', { name: 'MockResetPasswordLink' })).toBeInTheDocument()
        })
      })
    })
  })
})
