import { User } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

import { TastingSheetApi } from '../../types'
import useAuthContext from '../context/useAuthContext'
import useAxios from '../useAxios'
import useTastingSheetContext from '../context/useTastingSheetContext'
import useTastingSheetsContext from '../context/useTastingSheetsContext'

const usePostTastingSheet = () => {
  const navigate = useNavigate()
  const { tastingSheet } = useTastingSheetContext()
  const { signIn, currentUser } = useAuthContext()
  const { client, getHeaders } = useAxios()
  const { setRequesting } = useTastingSheetsContext()

  const postTastingSheet = async (user?: User) => {
    setRequesting(true)
    let postingUser: User | undefined | null = currentUser
    if (user) postingUser = user

    if (!postingUser) throw new Error('不正な呼び出し方です。')

    try {
      const response = (
        await client.post<TastingSheetApi>('/tasting_sheets', tastingSheet, await getHeaders(postingUser))
      ).data
      navigate(`/tasting_sheets/${response.id}`)
    } catch (e) {
      if (e instanceof Error) throw e
    } finally {
      setRequesting(false)
    }
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
