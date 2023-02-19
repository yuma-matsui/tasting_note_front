import { initializeApp } from 'firebase/app'
import {
  browserLocalPersistence,
  getAuth,
  GoogleAuthProvider,
  setPersistence,
  signInWithPopup,
  User
} from 'firebase/auth'
import { useEffect } from 'react'

import { firebaseConfig } from '../lib'
import useAxios from './useAxios'
import useUserContext from './useUserContext'

const useFirebaseAuth = () => {
  initializeApp(firebaseConfig)
  const auth = getAuth()
  const { user, setUser } = useUserContext()
  const { client, getHeaders } = useAxios()

  useEffect(() => {
    auth.onAuthStateChanged((_user) => {
      let newUser: User | null = null
      if (_user) newUser = _user
      setUser(newUser)
    })
  })

  const signIn = () =>
    setPersistence(auth, browserLocalPersistence).then(() =>
      signInWithPopup(auth, new GoogleAuthProvider()).then((userCredential) => setUser(userCredential.user))
    )

  const signOut = async () => {
    if (user) await auth.signOut()
  }

  const deleteAccount = async () => {
    if (!user) return
    const headers = await getHeaders(user)
    const userId = (await client.get<number>('/sessions', headers)).data
    await client.delete(`/users/${userId}`, headers)
    await user.delete()
  }

  return {
    signIn,
    signOut,
    deleteAccount
  }
}

export default useFirebaseAuth
