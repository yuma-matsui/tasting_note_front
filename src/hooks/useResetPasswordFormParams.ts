import { getAuth } from 'firebase/auth'
import { useState } from 'react'
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth'

const useResetPasswordFormParams = () => {
  const [sendEmail, loading, error] = useSendPasswordResetEmail(getAuth())
  const [isSent, setIsSent] = useState(false)

  return {
    sendEmail,
    loading,
    error,
    isSent,
    setIsSent
  }
}

export default useResetPasswordFormParams
