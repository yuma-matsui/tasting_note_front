import { getAuth } from 'firebase/auth'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth'
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useErrorBoundary } from 'react-error-boundary'

import { SignUpForm, TastingSheet } from '../types'
import useGetButtonClassName from './useGetButtonClassName'
import userFormSchema from '../utils/userFormSchema'
import useToastContext from './context/useToastContext'
import usePostTastingSheet from './api/usePostTastingSheet'

const useSignUpForm = (tastingSheet: TastingSheet | null) => {
  const [createUserWithEmailAndPassword, , loading, authError] = useCreateUserWithEmailAndPassword(getAuth())
  const { showToast } = useToastContext()
  const { showBoundary } = useErrorBoundary()
  const { postTastingSheet } = usePostTastingSheet()

  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting: disabled, errors }
  } = useForm<SignUpForm>({ resolver: yupResolver(userFormSchema) })

  const onSubmit: SubmitHandler<SignUpForm> = async ({ email, password }) => {
    try {
      reset()
      const user = await createUserWithEmailAndPassword(email, password)
      if (tastingSheet) postTastingSheet(tastingSheet, user?.user).catch((e: Error) => showBoundary(e))
    } catch (e) {
      if (e instanceof Error) showBoundary(e)
    }
    if (!tastingSheet) showToast({ text: '登録しました', type: 'success' })
  }

  const { className: submitButtonClassName } = useGetButtonClassName('red', disabled)

  return {
    register,
    disabled,
    handleSubmit,
    errors,
    authError,
    onSubmit,
    submitButtonClassName,
    loading
  }
}

export default useSignUpForm
