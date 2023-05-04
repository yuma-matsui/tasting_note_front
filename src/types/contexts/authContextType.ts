import { AuthError, User } from 'firebase/auth'

type AuthContextType = {
  currentUser: User | null | undefined
  signIn: () => void
  signOut: () => Promise<boolean> | void
  deleteAccount: () => Promise<void> | void
  loading: boolean
  error: AuthError | Error | undefined
}

export default AuthContextType
