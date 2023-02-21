import { User } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

import useAuthContext from '../useAuthContext'
import useTastingSheetContext from './useTastingSheetContext'

const usePostTastingSheet = () => {
  const navigate = useNavigate()
  const { tastingSheet } = useTastingSheetContext()
  const { signIn } = useAuthContext()

  const postTastingSheet = (user: User | null | undefined) => {
    if (!user) return

    console.log('APIリクエスト', user, tastingSheet)
    navigate('/')
  }

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
