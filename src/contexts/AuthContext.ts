import { createContext } from 'react'
import { AuthContextType } from '../types'

const AuthContext = createContext<AuthContextType>({
  currentUser: null,
  loading: false,
  error: undefined,
  signIn: () => {},
  signOut: () => {},
  deleteAccount: () => {}
})

export default AuthContext
