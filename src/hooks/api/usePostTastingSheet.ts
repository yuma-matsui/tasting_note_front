import { useNavigate } from 'react-router-dom'
import { User } from 'firebase/auth'
import { useErrorBoundary } from 'react-error-boundary'

import { TastingSheet, TastingSheetApi } from '../../types'
import useAuthContext from '../context/useAuthContext'
import useAxios from '../useAxios'
import useToastContext from '../context/useToastContext'
import useRequestingDispatchContext from '../context/useRequestingDispatchContext'

const usePostTastingSheet = () => {
  const navigate = useNavigate()
  const { currentUser } = useAuthContext()
  const { client, getHeaders } = useAxios()
  const setRequesting = useRequestingDispatchContext()
  const { showToast } = useToastContext()
  const { showBoundary } = useErrorBoundary()

  const postTastingSheet = async (tastingSheet: TastingSheet, user?: User) => {
    const postingUser = user ?? currentUser
    if (!postingUser) return

    setRequesting(true)
    try {
      const { data: tastingSheetApi } = await client.post<TastingSheetApi>(
        '/tasting_sheets',
        tastingSheet,
        await getHeaders(postingUser)
      )
      navigate(`/tasting_sheets/${tastingSheetApi.id}`)
    } catch (e) {
      if (e instanceof Error) showBoundary(e)
    } finally {
      setRequesting(false)
    }
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
