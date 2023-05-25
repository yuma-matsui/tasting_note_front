import { FC } from 'react'

import { DefaultLayout } from '../templates'
import { AuthForm, HeadMeta } from '../molecules'
import { useGetAuthFormParams } from '../../hooks'
import { LoadingSpinner } from '../atoms'
import { metaContents } from '../../assets'

const SignInPage: FC = () => {
  const { title, description, path } = metaContents.signIn
  const { tastingSheet, authFunction, loading, authError, type } = useGetAuthFormParams({ type: 'signIn' })

  if (loading) return <LoadingSpinner />

  return (
    <HeadMeta title={title} description={description} path={path}>
      <DefaultLayout>
        <AuthForm tastingSheet={tastingSheet} authFunction={authFunction} authError={authError} type={type} />
      </DefaultLayout>
    </HeadMeta>
  )
}

export default SignInPage
