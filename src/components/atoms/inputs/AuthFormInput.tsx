import { FC, memo } from 'react'

import { AuthFormInputProps } from '../../../types'

const AuthFormInput: FC<AuthFormInputProps> = memo(({ name, error, label, register }) => (
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
        <span className="text-theme-red">{error.message}</span>
      </p>
    )}
  </div>
))

export default AuthFormInput
