import { useCallback, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import useAuthContext from '../useAuthContext'
import useTastingSheetContext from './useTastingSheetContext'

const usePostTastingSheet = () => {
  const navigate = useNavigate()
  const { tastingSheet } = useTastingSheetContext()
  const { currentUser, signIn } = useAuthContext()

  const postTastingSheet = useCallback(() => {
    console.log('APIリクエスト', tastingSheet, currentUser)
    navigate('/')
  }, [tastingSheet, currentUser, navigate])

  const [isSignedIn, setIsSignedIn] = useState(false)
  const signInAndPostTastingSheet = async () => {
    await signIn()
    setIsSignedIn(true)
  }

  useEffect(() => {
    if (currentUser && isSignedIn) postTastingSheet()
  }, [currentUser, postTastingSheet, isSignedIn])

  return {
    postTastingSheet,
    signInAndPostTastingSheet
  }
}

export default usePostTastingSheet
