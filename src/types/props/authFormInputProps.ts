import { FieldError, FieldErrorsImpl, Merge, UseFormRegister } from 'react-hook-form'
import AuthForm from '../user/authForm'

type AuthFormInputProps = {
  name: 'email' | 'password' | 'passwordConfirmation'
  error: Merge<FieldError, FieldErrorsImpl<AuthForm>> | undefined
  label: string
  register: UseFormRegister<AuthForm>
}

export default AuthFormInputProps
