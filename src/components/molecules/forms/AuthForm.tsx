import { FC, memo } from 'react'

import { AuthFormProps } from '../../../types'
import { useAuthForm } from '../../../hooks'
import { getFirebaseErrorMessage } from '../../../utils'
import { AuthFormInput, AuthFormSubmitInput } from '../../atoms'

const AuthForm: FC<AuthFormProps> = memo((authFormProps) => {
  const { register, handleSubmit, onSubmit, errors, isSignIn, title, btnValue, btnColor } = useAuthForm(authFormProps)
  const { authError } = authFormProps

  return (
    <>
      <h2 className="page-title">{title}</h2>
      {authError && <p className="user-form-error-message">{getFirebaseErrorMessage(authError.message)}</p>}
      <form onSubmit={handleSubmit(onSubmit)} className="user-form">
        <AuthFormInput label="メールアドレス" name="email" register={register} error={errors.email} />
        <AuthFormInput label="パスワード" name="password" register={register} error={errors.password} />
        {!isSignIn && (
          <AuthFormInput
            label="確認用"
            name="passwordConfirmation"
            register={register}
            error={errors.passwordConfirmation}
          />
        )}
        <AuthFormSubmitInput value={btnValue} color={btnColor} />
      </form>
    </>
  )
})

export default AuthForm
