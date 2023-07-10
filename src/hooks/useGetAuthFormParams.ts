import { getAuth } from 'firebase/auth'
import { useCreateUserWithEmailAndPassword, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth'
import { useLocation } from 'react-router-dom'

import { TastingSheet, UseGetAuthFormParamsProps } from '../types'

const useGetAuthFormParams = ({ type }: UseGetAuthFormParamsProps) => {
  const location = useLocation()
  const tastingSheet = location.state as TastingSheet

  const isSignIn = type === 'signIn'

  const [createUserWithEmailAndPassword, , createLoading, createError] = useCreateUserWithEmailAndPassword(getAuth())
  const [signInWithEmailAndPassword, , signInLoading, signInError] = useSignInWithEmailAndPassword(getAuth())

  return {
    authError: isSignIn ? signInError : createError,
    authFunction: isSignIn ? signInWithEmailAndPassword : createUserWithEmailAndPassword,
    loading: isSignIn ? signInLoading : createLoading,
    tastingSheet,
    type
  }
}

export default useGetAuthFormParams
