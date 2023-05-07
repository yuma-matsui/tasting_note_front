import { getAuth } from 'firebase/auth'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth'
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useErrorBoundary } from 'react-error-boundary'

import { SignUpForm, TastingSheet } from '../types'
import { signUpFormSchema } from '../utils'
import useSignUpOrInAndPostTastingSheet from './api/useSignUpOrInAndPostTastingSheet'

const useSignUpForm = (tastingSheet: TastingSheet | null) => {
  const [createUserWithEmailAndPassword, , loading, authError] = useCreateUserWithEmailAndPassword(getAuth())
  const { showBoundary } = useErrorBoundary()
  const { signUpOrInAndPostTastingSheet } = useSignUpOrInAndPostTastingSheet()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<SignUpForm>({ resolver: yupResolver(signUpFormSchema) })

  const onSubmit: SubmitHandler<SignUpForm> = async ({ email, password }) => {
    try {
      const user = await createUserWithEmailAndPassword(email, password)
      reset()
      await signUpOrInAndPostTastingSheet({
        user: user?.user,
        tastingSheet,
        type: 'signUp'
      })
    } catch (e) {
      if (e instanceof Error) showBoundary(e)
    }
  }

  return {
    register,
    handleSubmit,
    errors,
    authError,
    onSubmit,
    loading
  }
}

export default useSignUpForm
