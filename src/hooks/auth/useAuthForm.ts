import { yupResolver } from '@hookform/resolvers/yup'
import { useErrorBoundary } from 'react-error-boundary'
import { SubmitHandler, useForm } from 'react-hook-form'

import { AuthForm, AuthFormProps, WineColor } from '../../types'
import { signInFormSchema, signUpFormSchema } from '../../utils'
import useSignUpOrInAndPostTastingSheet from '../api/useSignUpOrInAndPostTastingSheet'

const useAuthForm = ({ authFunction, tastingSheet, type }: AuthFormProps) => {
  const { showBoundary } = useErrorBoundary()
  const { signUpOrInAndPostTastingSheet } = useSignUpOrInAndPostTastingSheet()

  const isSignIn = type === 'signIn'
  const schema = isSignIn ? signInFormSchema : signUpFormSchema
  const btnColor: WineColor = isSignIn ? 'white' : 'red'

  const {
    formState: { errors },
    handleSubmit,
    register,
    reset
  } = useForm<AuthForm>({
    resolver: yupResolver(schema)
  })

  const onSubmit: SubmitHandler<AuthForm> = async ({ email, password }) => {
    try {
      const user = await authFunction(email, password)
      reset()
      await signUpOrInAndPostTastingSheet({
        tastingSheet,
        type,
        user: user?.user
      })
    } catch (e) {
      if (e instanceof Error) showBoundary(e)
    }
  }

  return {
    btnColor,
    btnValue: isSignIn ? 'ログイン' : '登録',
    errors,
    handleSubmit,
    isSignIn,
    onSubmit,
    register,
    title: isSignIn ? 'ログイン' : 'サインアップ'
  }
}

export default useAuthForm
