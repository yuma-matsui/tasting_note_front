import { useNavigate } from 'react-router-dom'

import { Wine, WineApi } from '../../types'
import useCurrentUserContext from '../context/useCurrentUserContext'
import useRequestingDispatchContext from '../context/useRequestingDispatchContext'
import useToastContext from '../context/useToastContext'
import useAxios from '../useAxios'

const useUpdateWine = () => {
  const navigate = useNavigate()
  const { client, getHeaders } = useAxios()
  const { showToast } = useToastContext()
  const currentUser = useCurrentUserContext()
  const fetchAndChangeRequesting = useRequestingDispatchContext()

  const updateWine = async (wine: Wine, wineId: number) => {
    if (!currentUser) return
    const fetchFunction = async () => {
      const { data: wineApi } = await client.put<WineApi>(`/wines/${wineId}`, wine, await getHeaders(currentUser))
      navigate(`/tasting_sheets/${wineApi.tastingSheetId}`)
    }

    await fetchAndChangeRequesting(fetchFunction)
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
