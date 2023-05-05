import { createContext } from 'react'

import { AuthContextType } from '../types'

const AuthContext = createContext<AuthContextType>({
  currentUser: null,
  loading: false,
  error: undefined,
  setAuthLoading: () => {},
  setAuthError: () => {}
})

export default AuthContext
