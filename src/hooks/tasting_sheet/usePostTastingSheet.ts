import { User } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

import { TastingSheetApi } from '../../types'
import useAuthContext from '../useAuthContext'
import useAxios from '../useAxios'
import useTastingSheetContext from './useTastingSheetContext'

const usePostTastingSheet = () => {
  const navigate = useNavigate()
  const { tastingSheet, setPosting } = useTastingSheetContext()
  const { signIn, currentUser } = useAuthContext()
  const { client, getHeaders } = useAxios()

  const postTastingSheet = async (user?: User) => {
    setPosting(true)
    let postingUser: User | undefined | null = currentUser
    if (user) postingUser = user

    if (!postingUser) throw new Error('不正な呼び出し方です。')

    try {
      const response = (
        await client.post<TastingSheetApi>('/tasting_sheets', tastingSheet, await getHeaders(postingUser))
      ).data
      console.log(response)
      navigate('/')
    } catch (e) {
      if (e instanceof Error) throw e
    } finally {
      setPosting(false)
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
