import { FC } from 'react'

import { DefaultLayout } from '../templates'
import { useGetAuthFormParams } from '../../hooks'
import { LoadingSpinner } from '../atoms'
import { AuthForm, HeadMeta } from '../molecules'
import { metaContents } from '../../assets'

const SignUpPage: FC = () => {
  const { description, path, title } = metaContents.signUp
  const { authError, authFunction, loading, tastingSheet, type } = useGetAuthFormParams({ type: 'signUp' })

  if (loading) return <LoadingSpinner />

  return (
    <HeadMeta title={title} description={description} path={path}>
      <DefaultLayout>
        <AuthForm tastingSheet={tastingSheet} authFunction={authFunction} authError={authError} type={type} />
      </DefaultLayout>
    </HeadMeta>
  )
}

export default SignUpPage
