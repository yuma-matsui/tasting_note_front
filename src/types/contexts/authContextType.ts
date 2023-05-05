import { AuthError, User } from 'firebase/auth'
import { Dispatch, SetStateAction } from 'react'

type AuthContextType = {
  currentUser: User | null | undefined
  signIn: () => Promise<void> | void
  loading: boolean
  error: AuthError | Error | undefined
  setAuthLoading: Dispatch<SetStateAction<boolean>>
  setAuthError: Dispatch<SetStateAction<AuthError | Error | undefined>>
}

export default AuthContextType
