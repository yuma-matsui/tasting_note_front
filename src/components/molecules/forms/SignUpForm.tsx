import { FC, memo } from 'react'

import { useSignUpForm } from '../../../hooks'
import { AuthFormInput, LoadingSpinner } from '../../atoms'
import { getFirebaseErrorMessage } from '../../../utils'
import { TastingSheet } from '../../../types'

const SignUpForm: FC<{
  tastingSheet: TastingSheet | null
}> = memo(({ tastingSheet }) => {
  const { register, handleSubmit, onSubmit, disabled, errors, authError, loading, submitButtonClassName } =
    useSignUpForm(tastingSheet)

  if (loading) return <LoadingSpinner isAuthPage />

  return (
    <>
      <h2 className="page-title">サインアップ</h2>
      {authError && (
        <p className="text-theme-red my-4 text-center font-semibold">{getFirebaseErrorMessage(authError.message)}</p>
      )}
      <form onSubmit={handleSubmit(onSubmit)} className="my-4 flex flex-col sm:items-center">
        <AuthFormInput label="メールアドレス" name="email" register={register} error={errors.email} />
        <AuthFormInput label="パスワード" name="password" register={register} error={errors.password} />
        <AuthFormInput
          label="確認用"
          name="passwordConfirmation"
          register={register}
          error={errors.passwordConfirmation}
        />
        <input type="submit" value="登録" disabled={disabled} className={`${submitButtonClassName} w-28 self-center`} />
      </form>
    </>
  )
})

export default SignUpForm
