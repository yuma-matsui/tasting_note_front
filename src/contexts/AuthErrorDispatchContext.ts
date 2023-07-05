import { AuthError } from 'firebase/auth'
import { Dispatch, SetStateAction, createContext } from 'react'

const AuthErrorDispatchContext = createContext<Dispatch<SetStateAction<AuthError | Error | undefined>>>(() => {
  throw Error('No default value!')
})

export default AuthErrorDispatchContext
