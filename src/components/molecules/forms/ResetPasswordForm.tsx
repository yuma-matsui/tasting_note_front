import { FC, memo } from 'react'
import { ResetPasswordFormProps } from '../../../types'
import { getFirebaseErrorMessage } from '../../../utils'
import { useResetPasswordForm } from '../../../hooks'
import { AuthFormInput, AuthFormSubmitInput } from '../../atoms'

const ResetPasswordForm: FC<ResetPasswordFormProps> = memo((resetPasswordFormProps) => {
  const { register, handleSubmit, onSubmit, errors } = useResetPasswordForm(resetPasswordFormProps)
  const { error } = resetPasswordFormProps

  return (
    <>
      <h2 className="page-title">パスワードのリセット</h2>
      {error && <p className="user-form-error-message">{getFirebaseErrorMessage(error.message)}</p>}
      <form onSubmit={handleSubmit(onSubmit)} className="user-form">
        <AuthFormInput label="メールアドレス" name="email" register={register} error={errors.email} />
        <AuthFormSubmitInput value="送信" color="white" />
      </form>
    </>
  )
})

export default ResetPasswordForm
