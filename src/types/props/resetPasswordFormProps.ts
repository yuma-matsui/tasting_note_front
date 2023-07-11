import { ActionCodeSettings, AuthError } from 'firebase/auth'
import { Dispatch, SetStateAction } from 'react'

type ResetPasswordFormProps = {
  error: AuthError | Error | undefined
  isSent: boolean
  sendEmail: (email: string, actionCodeSettings?: ActionCodeSettings | undefined) => Promise<boolean>
  setIsSent: Dispatch<SetStateAction<boolean>>
}

export default ResetPasswordFormProps
