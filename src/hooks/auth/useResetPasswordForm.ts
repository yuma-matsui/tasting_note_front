import { useEffect } from 'react'
import { useErrorBoundary } from 'react-error-boundary'
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useNavigate } from 'react-router-dom'

import { resetPasswordFormSchema } from '../../utils'
import { AuthForm, ResetPasswordFormProps } from '../../types'
import useToastContext from '../context/useToastContext'

const useResetPasswordForm = ({ isSent, sendEmail, setIsSent }: ResetPasswordFormProps) => {
  const { showBoundary } = useErrorBoundary()
  const { showToast } = useToastContext()
  const navigate = useNavigate()

  useEffect(() => {
    if (isSent) {
      navigate('/')
      showToast({ text: 'メールを送信しました', type: 'success' })
    }
  }, [isSent, showToast, navigate])

  const {
    formState: { errors },
    handleSubmit,
    register,
    reset
  } = useForm<AuthForm>({
    resolver: yupResolver(resetPasswordFormSchema)
  })

  const actionCode = {
    url: process.env.REACT_APP_SEND_EMAIL_URL
  }

  const onSubmit: SubmitHandler<AuthForm> = async ({ email }) => {
    try {
      const success = await sendEmail(email, actionCode)
      reset()
      setIsSent(success)
    } catch (e) {
      if (e instanceof Error) showBoundary(e)
    }
  }

  return {
    errors,
    handleSubmit,
    onSubmit,
    register
  }
}

export default useResetPasswordForm
