import { useNavigate } from 'react-router-dom'
import { User } from 'firebase/auth'

import { TastingSheet, TastingSheetApi } from '../../types'
import useAuthContext from '../context/useAuthContext'
import useAxios from '../useAxios'
import useToastContext from '../context/useToastContext'
import useRequestingDispatchContext from '../context/useRequestingDispatchContext'

const usePostTastingSheet = () => {
  const navigate = useNavigate()
  const { currentUser } = useAuthContext()
  const { client, getHeaders } = useAxios()
  const { showToast } = useToastContext()
  const fetchAndChangeRequesting = useRequestingDispatchContext()

  const postTastingSheet = async (tastingSheet: TastingSheet, user?: User) => {
    const postingUser = user ?? currentUser
    if (!postingUser) return

    const fetchFunction = async () => {
      const { data: tastingSheetApi } = await client.post<TastingSheetApi>(
        '/tasting_sheets',
        tastingSheet,
        await getHeaders(postingUser)
      )
      navigate(`/tasting_sheets/${tastingSheetApi.id}`)
    }

    await fetchAndChangeRequesting(fetchFunction)
    showToast({
      text: 'シートを記録しました',
      type: 'success'
    })
  }

  return {
    postTastingSheet
  }
}

export default usePostTastingSheet
