import { initializeApp } from 'firebase/app'
import { AuthError, getAuth } from 'firebase/auth'
import { FC, useMemo, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'

import { AuthContext } from '../contexts'
import { ReactNodeChildren } from '../types'
import { firebaseConfig } from '../lib'

const AuthProvider: FC<ReactNodeChildren> = ({ children }) => {
  const auth = getAuth(initializeApp(firebaseConfig))
  const [currentUser, authChangeLoading, authChangeError] = useAuthState(auth)
  const [authLoading, setAuthLoading] = useState(false)
  const [authError, setAuthError] = useState<AuthError | Error | undefined>()

  const loading = authChangeLoading || authLoading
  const error = authChangeError || authError

  const authState = useMemo(
    () => ({
      currentUser,
      loading,
      error,
      setAuthError,
      setAuthLoading
    }),
    [currentUser, loading, error]
  )

  return <AuthContext.Provider value={authState}>{children}</AuthContext.Provider>
}

export default AuthProvider
