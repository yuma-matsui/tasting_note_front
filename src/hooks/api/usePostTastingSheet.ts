import { User } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

import { TastingSheet, TastingSheetApi } from '../../types'
import useAuthContext from '../context/useAuthContext'
import useAxios from '../useAxios'
import useTastingSheetsContext from '../context/useTastingSheetsContext'
import useToastContext from '../context/useToastContext'

const usePostTastingSheet = (tastingSheet: TastingSheet) => {
  const navigate = useNavigate()
  const { signIn, currentUser } = useAuthContext()
  const { client, getHeaders } = useAxios()
  const { setRequesting } = useTastingSheetsContext()
  const { showToast } = useToastContext()

  const postTastingSheet = async (user?: User) => {
    setRequesting(true)
    const postingUser = currentUser ?? user
    if (!postingUser) throw new Error('不正な呼び出し方です。')

    try {
      const { data: tastingSheetApi } = await client.post<TastingSheetApi>(
        '/tasting_sheets',
        tastingSheet,
        await getHeaders(postingUser)
      )
      navigate(`/tasting_sheets/${tastingSheetApi.id}`)
    } catch (e) {
      if (e instanceof Error) throw e
    } finally {
      setRequesting(false)
    }
    showToast('テイスティングシートを記録しました')
  }

  const signInAndPostTastingSheet = async () => {
    try {
      await postTastingSheet((await signIn())?.user)
    } catch (e) {
      if (e instanceof Error) throw e
    }
  }

  return {
    postTastingSheet,
    signInAndPostTastingSheet
  }
}

export default usePostTastingSheet
