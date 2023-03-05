import { initializeApp } from 'firebase/app'
import { browserLocalPersistence, getAuth, setPersistence, User } from 'firebase/auth'
import { FC, useCallback, useLayoutEffect, useMemo, useState } from 'react'
import { useAuthState, useDeleteUser, useSignInWithGoogle, useSignOut } from 'react-firebase-hooks/auth'

import { AuthContext } from '../contexts'
import { useAxios } from '../hooks'
import { firebaseConfig } from '../lib'
import { ReactNodeChildren } from '../types'

const AuthProvider: FC<ReactNodeChildren> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null | undefined>(null)

  initializeApp(firebaseConfig)
  const auth = getAuth()
  const { client, getHeaders } = useAxios()

  const [deleteAccountLoading, setDeleteAccountLoading] = useState(false)
  const [signInWithGoogle, , signInLoading, signInError] = useSignInWithGoogle(auth)
  const [authUser, authLoading, authError] = useAuthState(auth)
  const [signOut, signOutLoading, signOutError] = useSignOut(auth)
  const [deleteUser, deleteLoading, deleteError] = useDeleteUser(auth)
  const loading = signInLoading || authLoading || signOutLoading || deleteLoading || deleteAccountLoading
  const error = signInError || authError || signOutError || deleteError

  useLayoutEffect(() => {
    setCurrentUser(authUser)
  }, [authUser, setCurrentUser])

  const signIn = useCallback(
    async () => setPersistence(auth, browserLocalPersistence).then(() => signInWithGoogle()),
    [auth, signInWithGoogle]
  )

  const deleteAccount = useCallback(async () => {
    if (!currentUser) return
    setDeleteAccountLoading(true)
    const headers = await getHeaders(currentUser)
    const userId = (await client.get<number>('/sessions', headers)).data
    await client.delete(`/users/${userId}`, headers)
    await deleteUser()
    setDeleteAccountLoading(false)
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
