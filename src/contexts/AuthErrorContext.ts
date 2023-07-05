import { AuthError } from 'firebase/auth'
import { createContext } from 'react'

const AuthErrorContext = createContext<AuthError | Error | undefined>(undefined)

export default AuthErrorContext
