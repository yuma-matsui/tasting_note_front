import { FC } from 'react'

import { DefaultLayout } from '../templates'
import { HeadMeta, ResetPasswordForm } from '../molecules'
import { LoadingSpinner } from '../atoms'
import { useResetPasswordFormParams } from '../../hooks'
import { metaContents } from '../../assets'

const ResetPasswordPage: FC = () => {
  const { description, path, title } = metaContents.resetPassword
  const { error, isSent, loading, sendEmail, setIsSent } = useResetPasswordFormParams()

  if (loading) return <LoadingSpinner />

  return (
    <HeadMeta title={title} description={description} path={path}>
      <DefaultLayout>
        <ResetPasswordForm sendEmail={sendEmail} error={error} isSent={isSent} setIsSent={setIsSent} />
      </DefaultLayout>
    </HeadMeta>
  )
}

export default ResetPasswordPage
