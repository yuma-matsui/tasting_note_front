import { AuthError, User } from 'firebase/auth'
import { Dispatch, SetStateAction } from 'react'

type AuthContextType = {
  currentUser: User | null | undefined
  signIn: () => Promise<void> | void
  deleteAccount: () => Promise<void> | void
  loading: boolean
  error: AuthError | Error | undefined
  setAuthError: Dispatch<SetStateAction<AuthError | Error | undefined>>
}

export default AuthContextType
