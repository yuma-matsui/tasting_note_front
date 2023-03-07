import { User } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

import { TastingSheetApi } from '../../types'
import useAuthContext from '../context/useAuthContext'
import useAxios from '../useAxios'
import useTastingSheetContext from '../context/useTastingSheetContext'
import useTastingSheetsContext from '../context/useTastingSheetsContext'
import useToastContext from '../context/useToastContext'

const usePostTastingSheet = () => {
  const navigate = useNavigate()
  const { tastingSheet } = useTastingSheetContext()
  const { setTastingSheets } = useTastingSheetsContext()
  const { signIn, currentUser } = useAuthContext()
  const { client, getHeaders } = useAxios()
  const { setRequesting } = useTastingSheetsContext()
  const { showToast } = useToastContext()

  const postTastingSheet = async (user?: User) => {
    setRequesting(true)
    let postingUser: User | undefined | null = currentUser
    if (user) postingUser = user

    if (!postingUser) throw new Error('不正な呼び出し方です。')

    try {
      const response = (
        await client.post<TastingSheetApi[]>('/tasting_sheets', tastingSheet, await getHeaders(postingUser))
      ).data
      setTastingSheets(response)
      const target = Math.max(...[...response.map((sheet) => sheet.id)])
      navigate(`/tasting_sheets/${target}`)
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
