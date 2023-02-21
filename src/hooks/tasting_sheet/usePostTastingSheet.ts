import { User } from 'firebase/auth'
import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

import useAuthContext from '../useAuthContext'
import useTastingSheetContext from './useTastingSheetContext'

const usePostTastingSheet = () => {
  const navigate = useNavigate()
  const { tastingSheet } = useTastingSheetContext()
  const { signIn } = useAuthContext()

  const postTastingSheet = useCallback(
    (user: User | null | undefined) => {
      if (!user) return

      console.log('APIリクエスト', user, tastingSheet)
      navigate('/')
    },
    [navigate, tastingSheet]
  )

  const signInAndPostTastingSheet = async () => {
    const user = (await signIn())?.user
    postTastingSheet(user)
  }

  return {
    postTastingSheet,
    signInAndPostTastingSheet
  }
}

export default usePostTastingSheet
