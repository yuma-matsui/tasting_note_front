import { initializeApp } from 'firebase/app'
import {
  browserLocalPersistence,
  getAuth,
  setPersistence,
  User,
  onAuthStateChanged,
  signInWithRedirect,
  GoogleAuthProvider
} from 'firebase/auth'
import { FC, useCallback, useLayoutEffect, useMemo, useState } from 'react'
import { useAuthState, useDeleteUser, useSignOut } from 'react-firebase-hooks/auth'

import { AuthContext } from '../contexts'
import { useAxios, useDisplayToastAfterSignedIn } from '../hooks'
import { firebaseConfig } from '../lib'
import { ReactNodeChildren } from '../types'

const AuthProvider: FC<ReactNodeChildren> = ({ children }) => {
  initializeApp(firebaseConfig)
  const auth = getAuth()

  const { client, getHeaders } = useAxios()

  const [currentUser, setCurrentUser] = useState<User | null>(null)
  const [signInLoading, setSignInLoading] = useState(false)
  const [signInError, setSignInError] = useState<Error | null>(null)
  const [deleteAccountLoading, setDeleteAccountLoading] = useState(false)
  const [deleteAccountApiError, setDeleteAccountApiError] = useState<Error>()
  const [, authChangeLoading, authChangeError] = useAuthState(auth)
  const [signOut, , signOutError] = useSignOut(auth)
  const [deleteUser, deleteLoading, deleteError] = useDeleteUser(auth)
  const loading = signInLoading || authChangeLoading || deleteLoading || deleteAccountLoading
  const error = signInError || authChangeError || signOutError || deleteError || deleteAccountApiError

  useDisplayToastAfterSignedIn(currentUser)
  useLayoutEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user)
    })
  }, [auth, setCurrentUser])

  const signIn = useCallback(() => {
    setSignInLoading(true)

    setPersistence(auth, browserLocalPersistence)
      .then(() => signInWithRedirect(auth, new GoogleAuthProvider()))
      .catch((e) => {
        if (e instanceof Error) setSignInError(e)
      })
      .finally(() => setSignInLoading(false))
  }, [auth])

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
      setCurrentUser,
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
