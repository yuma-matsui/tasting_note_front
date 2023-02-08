import { User } from 'firebase/auth'
import { FC, useMemo, useState } from 'react'
import { UserContext } from '../contexts'

import { ReactNodeChildren } from '../types'

const UserProvider: FC<ReactNodeChildren> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)
  const userState = useMemo(() => ({ user, setUser }), [user])

  return <UserContext.Provider value={userState}>{children}</UserContext.Provider>
}

export default UserProvider
