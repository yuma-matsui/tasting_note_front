import { FC } from 'react'

import { DefaultLayout } from '../templates'
import { useGetAuthFormParams } from '../../hooks'
import { LoadingSpinner } from '../atoms'
import { AuthForm } from '../molecules'

const SignUpPage: FC = () => {
  const { tastingSheet, authFunction, loading, authError, type } = useGetAuthFormParams({ type: 'signUp' })

  if (loading) return <LoadingSpinner />

  return (
    <DefaultLayout>
      <AuthForm tastingSheet={tastingSheet} authFunction={authFunction} authError={authError} type={type} />
    </DefaultLayout>
  )
}

export default SignUpPage
