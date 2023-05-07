import { ActionCodeSettings, AuthError } from 'firebase/auth'
import { Dispatch, SetStateAction } from 'react'

type ResetPasswordForm = {
  sendEmail: (email: string, actionCodeSettings?: ActionCodeSettings | undefined) => Promise<boolean>
  error: AuthError | Error | undefined
  isSent: boolean
  setIsSent: Dispatch<SetStateAction<boolean>>
}

export default ResetPasswordForm
