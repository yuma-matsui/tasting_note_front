import { FC } from 'react'

import { DefaultLayout } from '../templates'
import { SignInForm } from '../molecules'
import { useGetAuthFormParams } from '../../hooks'
import { LoadingSpinner } from '../atoms'

const SignInPage: FC = () => {
  const { tastingSheet, authFunction, loading, authError } = useGetAuthFormParams({ type: 'signIn' })

  if (loading) return <LoadingSpinner />

  return (
    <DefaultLayout>
      <SignInForm tastingSheet={tastingSheet} authFunction={authFunction} authError={authError} />
    </DefaultLayout>
  )
}

export default SignInPage
