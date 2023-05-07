import { FC, memo } from 'react'

import { TastingSheet } from '../../../types'
import { useSignInForm } from '../../../hooks'
import { AuthFormInput, AuthFormSubmitInput, LoadingSpinner } from '../../atoms'
import { getFirebaseErrorMessage } from '../../../utils'

const SignInForm: FC<{
  tastingSheet: TastingSheet | null
}> = memo(({ tastingSheet }) => {
  const { loading, authError, register, handleSubmit, onSubmit, errors } = useSignInForm(tastingSheet)

  if (loading) return <LoadingSpinner isAuthPage />

  return (
    <>
      <h2 className="page-title">ログイン</h2>
      {authError && <p className="user-form-error-message">{getFirebaseErrorMessage(authError.message)}</p>}
      <form onSubmit={handleSubmit(onSubmit)} className="user-form">
        <AuthFormInput label="メールアドレス" name="email" register={register} error={errors.email} />
        <AuthFormInput label="パスワード" name="password" register={register} error={errors.password} />
        <AuthFormSubmitInput value="ログイン" color="white" />
      </form>
    </>
  )
})

export default SignInForm
