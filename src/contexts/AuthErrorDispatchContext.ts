import { AuthError } from 'firebase/auth'
import { createContext, Dispatch, SetStateAction } from 'react'

const AuthErrorDispatchContext = createContext<Dispatch<SetStateAction<AuthError | Error | undefined>>>(() => {
  throw Error('No default value!')
})

export default AuthErrorDispatchContext
