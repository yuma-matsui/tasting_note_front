import { FC } from 'react'

import { DefaultLayout } from '../templates'
import SignUpForm from '../molecules/forms/SignUpForm'
import { useGetAuthFormParams } from '../../hooks'
import { LoadingSpinner } from '../atoms'

const SignUpPage: FC = () => {
  const { tastingSheet, authFunction, loading, authError } = useGetAuthFormParams({ type: 'signUp' })

  if (loading) return <LoadingSpinner />

  return (
    <DefaultLayout>
      <SignUpForm tastingSheet={tastingSheet} authFunction={authFunction} authError={authError} />
    </DefaultLayout>
  )
}

export default SignUpPage
