import { FC, memo } from 'react'

import { useSignUpForm } from '../../../hooks'
import { AuthFormInput, AuthFormSubmitInput, LoadingSpinner } from '../../atoms'
import { getFirebaseErrorMessage } from '../../../utils'
import { TastingSheet } from '../../../types'

const SignUpForm: FC<{
  tastingSheet: TastingSheet | null
}> = memo(({ tastingSheet }) => {
  const { register, handleSubmit, onSubmit, errors, authError, loading } = useSignUpForm(tastingSheet)

  if (loading) return <LoadingSpinner isAuthPage />

  return (
    <>
      <h2 className="page-title">サインアップ</h2>
      {authError && <p className="user-form-error-message">{getFirebaseErrorMessage(authError.message)}</p>}
      <form onSubmit={handleSubmit(onSubmit)} className="my-4 flex flex-col sm:items-center">
        <AuthFormInput label="メールアドレス" name="email" register={register} error={errors.email} />
        <AuthFormInput label="パスワード" name="password" register={register} error={errors.password} />
        <AuthFormInput
          label="確認用"
          name="passwordConfirmation"
          register={register}
          error={errors.passwordConfirmation}
        />
        <AuthFormSubmitInput value="登録" />
      </form>
    </>
  )
})

export default SignUpForm
