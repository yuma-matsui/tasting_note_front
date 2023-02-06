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
import useUserContext from './useUserContext'

const useFirebaseAuth = () => {
  initializeApp(firebaseConfig)
  const auth = getAuth()
  const { user, setUser } = useUserContext()

  useEffect(() => {
    auth.onAuthStateChanged((_user) => {
      let newUser: User | null = null
      if (_user) newUser = _user
      setUser(newUser)
    })
  })

  const signIn = async () =>
    setPersistence(auth, browserLocalPersistence).then(async () => {
      const loggedInUser = (await signInWithPopup(auth, new GoogleAuthProvider())).user
      setUser(loggedInUser)
    })
  const signOut = async () => {
    if (user) await auth.signOut()
  }
  const deleteAccount = async () => {
    if (user) await user.delete()
  }

  return {
    signIn,
    signOut,
    deleteAccount
  }
}

export default useFirebaseAuth
