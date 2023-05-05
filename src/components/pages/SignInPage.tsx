import { FC } from 'react'

import { LoadingSpinner } from '../atoms'
import { useSignIn, useSignInRedirect } from '../../hooks'

const SignInPage: FC = () => {
  useSignInRedirect()
  useSignIn()

  return <LoadingSpinner />
}

export default SignInPage
