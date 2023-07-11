import { initializeApp } from 'firebase/app'
import { AuthError, getAuth } from 'firebase/auth'
import { FC, useMemo, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'

import {
  AuthCurrentUserContext,
  AuthErrorContext,
  AuthErrorDispatchContext,
  AuthLoadingContext,
  AuthLoadingDispatchContext
} from '../contexts'
import { firebaseConfig } from '../lib'
import { ReactNodeChildren } from '../types'

const AuthProvider: FC<ReactNodeChildren> = ({ children }) => {
  const auth = getAuth(initializeApp(firebaseConfig))
  const [currentUser, authChangeLoading, authChangeError] = useAuthState(auth)
  const [authLoading, setAuthLoading] = useState(false)
  const [authError, setAuthError] = useState<AuthError | Error | undefined>()

  const loading = useMemo(() => authChangeLoading || authLoading, [authChangeLoading, authLoading])
  const error = useMemo(() => authChangeError || authError, [authChangeError, authError])

  return (
    <AuthCurrentUserContext.Provider value={currentUser}>
      <AuthLoadingContext.Provider value={loading}>
        <AuthErrorContext.Provider value={error}>
          <AuthLoadingDispatchContext.Provider value={setAuthLoading}>
            <AuthErrorDispatchContext.Provider value={setAuthError}>{children}</AuthErrorDispatchContext.Provider>
          </AuthLoadingDispatchContext.Provider>
        </AuthErrorContext.Provider>
      </AuthLoadingContext.Provider>
    </AuthCurrentUserContext.Provider>
  )
}

export default AuthProvider
