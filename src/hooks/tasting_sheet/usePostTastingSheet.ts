import { User } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

import useAuthContext from '../useAuthContext'
import useTastingSheetContext from './useTastingSheetContext'

const usePostTastingSheet = () => {
  const navigate = useNavigate()
  const { tastingSheet } = useTastingSheetContext()
  const { signIn, currentUser } = useAuthContext()

  const postTastingSheet = (user?: User) => {
    let postingUser: User | undefined | null = currentUser
    if (user) postingUser = user

    if (!postingUser) throw new Error('不正な呼び出し方です。')

    console.log('APIリクエスト', postingUser, tastingSheet)
    navigate('/')
  }

  const signInAndPostTastingSheet = async () => postTastingSheet((await signIn())?.user)

  return {
    postTastingSheet,
    signInAndPostTastingSheet
  }
}

export default usePostTastingSheet
