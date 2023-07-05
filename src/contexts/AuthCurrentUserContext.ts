import { User } from 'firebase/auth'
import { createContext } from 'react'

const AuthCurrentUserContext = createContext<User | null | undefined>(null)

export default AuthCurrentUserContext
