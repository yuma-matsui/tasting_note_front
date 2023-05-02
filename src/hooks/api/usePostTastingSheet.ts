import { useNavigate } from 'react-router-dom'
import { useErrorBoundary } from 'react-error-boundary'

import { TastingSheet, TastingSheetApi } from '../../types'
import useAuthContext from '../context/useAuthContext'
import useAxios from '../useAxios'
import useToastContext from '../context/useToastContext'
import useRequestingContext from '../context/useRequestingContext'

const usePostTastingSheet = () => {
  const navigate = useNavigate()
  const { currentUser } = useAuthContext()
  const { client, getHeaders } = useAxios()
  const { setRequesting } = useRequestingContext()
  const { showToast } = useToastContext()
  const { showBoundary } = useErrorBoundary()

  const postTastingSheet = async (tastingSheet: TastingSheet) => {
    if (!currentUser) return

    setRequesting(true)
    try {
      const { data: tastingSheetApi } = await client.post<TastingSheetApi>(
        '/tasting_sheets',
        tastingSheet,
        await getHeaders(currentUser)
      )
      navigate(`/tasting_sheets/${tastingSheetApi.id}`)
    } catch (e) {
      if (e instanceof Error) showBoundary(e)
    } finally {
      setRequesting(false)
      window.localStorage.clear()
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
