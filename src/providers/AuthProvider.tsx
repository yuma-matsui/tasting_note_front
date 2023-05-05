import { initializeApp } from 'firebase/app'
import { signInWithRedirect, GoogleAuthProvider, AuthError, getAuth } from 'firebase/auth'
import { FC, useCallback, useMemo, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'

import { AuthContext } from '../contexts'
import { useDisplayToastAfterSignedIn } from '../hooks'
import { ReactNodeChildren } from '../types'
import { firebaseConfig } from '../lib'

const AuthProvider: FC<ReactNodeChildren> = ({ children }) => {
  const auth = getAuth(initializeApp(firebaseConfig))

  const [authError, setAuthError] = useState<AuthError | Error | undefined>()
  const [authLoading, setAuthLoading] = useState(false)
  const [currentUser, authChangeLoading, authChangeError] = useAuthState(auth)
  const [signInLoading, setSignInLoading] = useState(false)
  const [signInError, setSignInError] = useState<Error | null>(null)
  const loading = signInLoading || authChangeLoading || authLoading
  const error = signInError || authChangeError || authError

  useDisplayToastAfterSignedIn(currentUser)

  const signIn = useCallback(async () => {
    setSignInLoading(true)

    try {
      await signInWithRedirect(auth, new GoogleAuthProvider())
    } catch (e) {
      if (e instanceof Error) setSignInError(e)
    } finally {
      setSignInLoading(false)
    }
  }, [auth])

  const authState = useMemo(
    () => ({
      currentUser,
      loading,
      error,
      signIn,
      setAuthError,
      setAuthLoading
    }),
    [currentUser, loading, error, signIn]
  )

  return <AuthContext.Provider value={authState}>{children}</AuthContext.Provider>
}

export default AuthProvider
