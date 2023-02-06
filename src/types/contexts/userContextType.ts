import { User } from 'firebase/auth'
import { Dispatch, SetStateAction } from 'react'

type UserContextType = {
  user: User | null
  setUser: Dispatch<SetStateAction<User | null>>
}

export default UserContextType
