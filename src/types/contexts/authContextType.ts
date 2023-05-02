import { AuthError, User } from 'firebase/auth'
import { Dispatch, SetStateAction } from 'react'

type AuthContextType = {
  currentUser: User | null
  setCurrentUser: Dispatch<SetStateAction<User | null>>
  signIn: () => void
  signOut: () => Promise<boolean> | void
  deleteAccount: () => Promise<void> | void
  loading: boolean
  error: AuthError | Error | undefined
}

export default AuthContextType
