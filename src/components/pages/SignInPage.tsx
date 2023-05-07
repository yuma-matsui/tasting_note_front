import { FC } from 'react'

import { DefaultLayout } from '../templates'
import { AuthForm } from '../molecules'
import { useGetAuthFormParams } from '../../hooks'
import { LoadingSpinner } from '../atoms'

const SignInPage: FC = () => {
  const { tastingSheet, authFunction, loading, authError, type } = useGetAuthFormParams({ type: 'signIn' })

  if (loading) return <LoadingSpinner />

  return (
    <DefaultLayout>
      <AuthForm tastingSheet={tastingSheet} authFunction={authFunction} authError={authError} type={type} />
    </DefaultLayout>
  )
}

export default SignInPage
