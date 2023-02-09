import { useCallback, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import useFirebaseAuth from '../useFirebaseAuth'
import useUserContext from '../useUserContext'
import useTastingSheetContext from './useTastingSheetContext'

const usePostTastingSheet = () => {
  const navigate = useNavigate()
  const { signIn } = useFirebaseAuth()
  const { tastingSheet } = useTastingSheetContext()
  const { user } = useUserContext()

  const postTastingSheet = useCallback(() => {
    console.log('APIリクエスト', tastingSheet, user)
    navigate('/')
  }, [tastingSheet, user, navigate])

  const [isChangedUser, setIsChangedUser] = useState(false)
  const signInAndPostTastingSheet = async () => {
    await signIn()
    setIsChangedUser(true)
  }

  useEffect(() => {
    if (user && isChangedUser) postTastingSheet()
  }, [user, postTastingSheet, isChangedUser])

  return {
    postTastingSheet,
    signInAndPostTastingSheet
  }
}

export default usePostTastingSheet
