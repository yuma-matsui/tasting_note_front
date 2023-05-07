import { getAuth } from 'firebase/auth'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth'
import { useErrorBoundary } from 'react-error-boundary'
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { AuthForm, TastingSheet } from '../types'
import { signInFormSchema } from '../utils'
import useSignUpOrInAndPostTastingSheet from './api/useSignUpOrInAndPostTastingSheet'

const useSignInForm = (tastingSheet: TastingSheet | null) => {
  const [signInWithEmailAndPassword, , loading, authError] = useSignInWithEmailAndPassword(getAuth())
  const { showBoundary } = useErrorBoundary()
  const { signUpOrInAndPostTastingSheet } = useSignUpOrInAndPostTastingSheet()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<AuthForm>({
    resolver: yupResolver(signInFormSchema)
  })

  const onSubmit: SubmitHandler<AuthForm> = async ({ email, password }) => {
    try {
      const user = await signInWithEmailAndPassword(email, password)
      reset()
      await signUpOrInAndPostTastingSheet({
        user: user?.user,
        tastingSheet,
        type: 'signIn'
      })
    } catch (e) {
      if (e instanceof Error) showBoundary(e)
    }
  }

  return {
    loading,
    authError,
    register,
    handleSubmit,
    errors,
    onSubmit
  }
}

export default useSignInForm
