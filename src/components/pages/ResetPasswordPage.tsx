import { FC } from 'react'

import { DefaultLayout } from '../templates'
import { ResetPasswordForm } from '../molecules'
import { LoadingSpinner } from '../atoms'
import { useResetPasswordFormParams } from '../../hooks'

const ResetPasswordPage: FC = () => {
  const { sendEmail, loading, error, isSent, setIsSent } = useResetPasswordFormParams()

  if (loading) return <LoadingSpinner />

  return (
    <DefaultLayout>
      <ResetPasswordForm sendEmail={sendEmail} error={error} isSent={isSent} setIsSent={setIsSent} />
    </DefaultLayout>
  )
}

export default ResetPasswordPage
