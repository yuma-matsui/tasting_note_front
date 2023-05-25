import { FieldError, FieldErrorsImpl, Merge, UseFormRegister } from 'react-hook-form'
import AuthForm from '../user/authForm'

type AuthFormInputProps = {
  name: 'email' | 'password' | 'passwordConfirmation'
  label: string
  register: UseFormRegister<AuthForm>
  error: Merge<FieldError, FieldErrorsImpl<AuthForm>> | undefined
}

export default AuthFormInputProps
