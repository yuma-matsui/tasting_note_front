import { createContext } from 'react'
import { AuthContextType } from '../types'

const AuthContext = createContext<AuthContextType>({
  currentUser: null,
  setCurrentUser: () => {},
  loading: false,
  error: undefined,
  signIn: () => {},
  signOut: () => {},
  deleteAccount: () => {}
})

export default AuthContext
