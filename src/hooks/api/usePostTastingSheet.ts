import { User } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

import { TastingSheet, TastingSheetApi } from '../../types'
import useCurrentUserContext from '../context/useCurrentUserContext'
import useRequestingDispatchContext from '../context/useRequestingDispatchContext'
import useToastContext from '../context/useToastContext'
import useAxios from '../useAxios'

const usePostTastingSheet = () => {
  const navigate = useNavigate()
  const currentUser = useCurrentUserContext()
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
