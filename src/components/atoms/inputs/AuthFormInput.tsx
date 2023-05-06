import { FC, memo } from 'react'
import { FieldError, FieldErrorsImpl, Merge, UseFormRegister } from 'react-hook-form'

import { SignUpForm } from '../../../types'

const AuthFormInput: FC<{
  name: 'email' | 'password' | 'passwordConfirmation'
  label: string
  register: UseFormRegister<SignUpForm>
  error: Merge<FieldError, FieldErrorsImpl<SignUpForm>> | undefined
}> = memo(({ name, label, register, error }) => (
  <div className="user-form-control">
    <label htmlFor={name} className="user-form-label">
      <span className="user-form-label-text">{label}</span>
      <input
        type={name === 'email' ? 'text' : 'password'}
        id={name}
        {...register(name)}
        className="input input-sm input-bordered border-gray-700 w-full max-w-md"
      />
    </label>
    {error && (
      <p>
        <span className="text-theme-pink">{error.message}</span>
      </p>
    )}
  </div>
))

export default AuthFormInput
