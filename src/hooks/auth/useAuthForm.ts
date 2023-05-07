import { useErrorBoundary } from 'react-error-boundary'
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { AuthForm, AuthFormProps, WineColor } from '../../types'
import useSignUpOrInAndPostTastingSheet from '../api/useSignUpOrInAndPostTastingSheet'
import { signInFormSchema, signUpFormSchema } from '../../utils'

const useAuthForm = ({ tastingSheet, authFunction, type }: AuthFormProps) => {
  const { showBoundary } = useErrorBoundary()
  const { signUpOrInAndPostTastingSheet } = useSignUpOrInAndPostTastingSheet()

  const isSignIn = type === 'signIn'
  const schema = isSignIn ? signInFormSchema : signUpFormSchema
  const btnColor: WineColor = isSignIn ? 'white' : 'red'

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<AuthForm>({
    resolver: yupResolver(schema)
  })

  const onSubmit: SubmitHandler<AuthForm> = async ({ email, password }) => {
    try {
      const user = await authFunction(email, password)
      reset()
      await signUpOrInAndPostTastingSheet({
        user: user?.user,
        tastingSheet,
        type
      })
    } catch (e) {
      if (e instanceof Error) showBoundary(e)
    }
  }

  return {
    register,
    handleSubmit,
    errors,
    onSubmit,
    isSignIn,
    title: isSignIn ? 'ログイン' : 'サインアップ',
    btnValue: isSignIn ? 'ログイン' : '登録',
    btnColor
  }
}

export default useAuthForm
