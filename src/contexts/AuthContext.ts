import { createContext } from 'react'
import { AuthContextType } from '../types'

const AuthContext = createContext<AuthContextType>({
  currentUser: null,
  loading: false,
  error: undefined,
  signIn: () => {},
  deleteAccount: () => {},
  setAuthError: () => {}
})

export default AuthContext
