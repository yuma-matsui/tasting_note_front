import { FC } from 'react'

import { metaContents } from '../../assets'
import { useResetPasswordFormParams } from '../../hooks'
import { LoadingSpinner } from '../atoms'
import { HeadMeta, ResetPasswordForm } from '../molecules'
import { DefaultLayout } from '../templates'

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
