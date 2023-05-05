import { signInWithRedirect, GoogleAuthProvider, AuthError } from 'firebase/auth'
import { FC, useCallback, useMemo, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'

import { auth } from '../lib'
import { AuthContext } from '../contexts'
import { useDisplayToastAfterSignedIn } from '../hooks'
import { ReactNodeChildren } from '../types'

const AuthProvider: FC<ReactNodeChildren> = ({ children }) => {
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
  }, [])

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
