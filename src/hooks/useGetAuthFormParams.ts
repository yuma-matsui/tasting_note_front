import { getAuth } from 'firebase/auth'
import { useCreateUserWithEmailAndPassword, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth'
import { useLocation } from 'react-router-dom'

import { TastingSheet } from '../types'

const useGetAuthFormParams = ({ type }: { type: 'signIn' | 'signUp' }) => {
  const location = useLocation()
  const tastingSheet = location.state as TastingSheet

  const isSignIn = type === 'signIn'

  const [createUserWithEmailAndPassword, , createLoading, createError] = useCreateUserWithEmailAndPassword(getAuth())
  const [signInWithEmailAndPassword, , signInLoading, signInError] = useSignInWithEmailAndPassword(getAuth())

  return {
    tastingSheet,
    authFunction: isSignIn ? signInWithEmailAndPassword : createUserWithEmailAndPassword,
    loading: isSignIn ? signInLoading : createLoading,
    authError: isSignIn ? signInError : createError
  }
}

export default useGetAuthFormParams
