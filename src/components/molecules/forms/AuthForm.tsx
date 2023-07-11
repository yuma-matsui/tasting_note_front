import { FC, memo } from 'react'

import { useAuthForm } from '../../../hooks'
import { AuthFormProps } from '../../../types'
import { getFirebaseErrorMessage } from '../../../utils'
import { AuthFormInput, AuthFormSubmitInput, ResetPasswordLink } from '../../atoms'

const AuthForm: FC<AuthFormProps> = memo((authFormProps) => {
  const { btnColor, btnValue, errors, handleSubmit, isSignIn, onSubmit, register, title } = useAuthForm(authFormProps)
  const { authError } = authFormProps

  return (
    <>
      <h2 className="page-title">{title}</h2>
      {authError && <p className="user-form-error-message">{getFirebaseErrorMessage(authError.message)}</p>}
      <form onSubmit={handleSubmit(onSubmit)} className="user-form">
        <AuthFormInput label="メールアドレス" name="email" register={register} error={errors.email} />
        <AuthFormInput label="パスワード" name="password" register={register} error={errors.password} />
        {!isSignIn ? (
          <AuthFormInput
            label="確認用"
            name="passwordConfirmation"
            register={register}
            error={errors.passwordConfirmation}
          />
        ) : (
          <ResetPasswordLink />
        )}
        <AuthFormSubmitInput value={btnValue} color={btnColor} />
      </form>
    </>
  )
})

export default AuthForm
