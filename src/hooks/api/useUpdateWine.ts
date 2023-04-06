import { useNavigate } from 'react-router-dom'
import { useErrorBoundary } from 'react-error-boundary'

import { Wine, WineApi } from '../../types'
import useAuthContext from '../context/useAuthContext'
import useToastContext from '../context/useToastContext'
import useAxios from '../useAxios'
import useRequestingContext from '../context/useRequestingContext'

const useUpdateWine = () => {
  const navigate = useNavigate()
  const { showBoundary } = useErrorBoundary()

  const { client, getHeaders } = useAxios()
  const { currentUser } = useAuthContext()
  const { showToast } = useToastContext()
  const { setRequesting } = useRequestingContext()

  const updateWine = async (wine: Wine, wineId: number) => {
    if (!currentUser) return
    setRequesting(true)

    try {
      const { data: wineApi } = await client.put<WineApi>(`/wines/${wineId}`, wine, await getHeaders(currentUser))
      navigate(`/tasting_sheets/${wineApi.tastingSheetId}`)
    } catch (e) {
      if (e instanceof Error) showBoundary(e)
    } finally {
      setRequesting(false)
    }
    showToast({
      text: 'ワインを更新しました',
      type: 'success'
    })
  }

  return {
    updateWine
  }
}

export default useUpdateWine
