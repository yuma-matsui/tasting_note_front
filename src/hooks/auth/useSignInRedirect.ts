import { GoogleAuthProvider, getAuth, signInWithRedirect } from 'firebase/auth'
import { useEffect } from 'react'

import useAuthContext from '../context/useAuthContext'

const useSignInRedirect = () => {
  const { currentUser, setAuthError } = useAuthContext()
  useEffect(() => {
    const signIn = async () => {
      try {
        await signInWithRedirect(getAuth(), new GoogleAuthProvider())
      } catch (e) {
        if (e instanceof Error) setAuthError(e)
      }
    }

    if (!currentUser) signIn().catch((e: Error) => setAuthError(e))
  }, [currentUser, setAuthError])
}

export default useSignInRedirect
