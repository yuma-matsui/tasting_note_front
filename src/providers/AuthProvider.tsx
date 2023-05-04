import { browserLocalPersistence, setPersistence, signInWithRedirect, GoogleAuthProvider } from 'firebase/auth'
import { FC, useCallback, useMemo, useState } from 'react'
import { useAuthState, useDeleteUser, useSignOut } from 'react-firebase-hooks/auth'

import { auth } from '../lib'
import { AuthContext } from '../contexts'
import { useAxios, useDisplayToastAfterSignedIn } from '../hooks'
import { ReactNodeChildren } from '../types'

const AuthProvider: FC<ReactNodeChildren> = ({ children }) => {
  const { client, getHeaders } = useAxios()

  const [currentUser, authChangeLoading, authChangeError] = useAuthState(auth)
  const [signInLoading, setSignInLoading] = useState(false)
  const [signInError, setSignInError] = useState<Error | null>(null)
  const [deleteAccountLoading, setDeleteAccountLoading] = useState(false)
  const [deleteAccountApiError, setDeleteAccountApiError] = useState<Error>()
  const [signOut, , signOutError] = useSignOut(auth)
  const [deleteUser, deleteLoading, deleteError] = useDeleteUser(auth)
  const loading = signInLoading || authChangeLoading || deleteLoading || deleteAccountLoading
  const error = signInError || authChangeError || signOutError || deleteError || deleteAccountApiError

  useDisplayToastAfterSignedIn(currentUser)

  const signIn = useCallback(() => {
    setSignInLoading(true)

    setPersistence(auth, browserLocalPersistence)
      .then(() => signInWithRedirect(auth, new GoogleAuthProvider()))
      .catch((e) => {
        if (e instanceof Error) setSignInError(e)
      })
      .finally(() => setSignInLoading(false))
  }, [])

  const deleteAccount = useCallback(async () => {
    if (!currentUser) return
    setDeleteAccountLoading(true)

    try {
      const headers = await getHeaders(currentUser)
      const { data: userId } = await client.get<number>('/sessions', headers)
      await client.delete(`/users/${userId}`, headers)
      await deleteUser()
    } catch (e) {
      if (e instanceof Error) setDeleteAccountApiError(e)
    } finally {
      setDeleteAccountLoading(false)
    }
  }, [currentUser, deleteUser, getHeaders, client])

  const authState = useMemo(
    () => ({
      currentUser,
      loading,
      error,
      signIn,
      deleteAccount,
      signOut
    }),
    [currentUser, loading, error, deleteAccount, signIn, signOut]
  )

  return <AuthContext.Provider value={authState}>{children}</AuthContext.Provider>
}

export default AuthProvider
